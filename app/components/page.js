'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Download, Eye } from 'lucide-react';
import TableWrapper from '@/components/Table/TableWrapper';
import Modal from '@/components/molecules/Modal';
import GenericForm from '@/components/molecules/GenericForm';
import CustomButton from '@/components/atoms/CustomButton';
import { componentsPageData } from '@/dummyJson/dummyJson';
import {
  componentFormFields,
  componentFormValidationSchema,
  componentFormInitialValues,
} from '@/app/config/formConfigs/componentFormConfig';

const columns = [
  { key: "componentTag", label: "COMPONENT TAG" },
  { key: "type", label: "TYPE" },
  { key: "status", label: "STATUS" },
  { key: "installedOn", label: "INSTALLED ON" },
  { key: "action", label: "ACTION" },
];

export default function ComponentsPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleViewDetails = (componentId) => {
    // Use componentTag instead of numeric ID
    router.push(`/components/${componentId}?id=${componentId}`);
  };

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "componentTag":
        return (
          <button 
            onClick={() => handleViewDetails(item.componentTag)}
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            {cellValue}
          </button>
        );
      case "status":
        const statusColors = {
          'Working': 'bg-green-100 text-green-800',
          'In Stock': 'bg-blue-100 text-blue-800',
          'Scrap': 'bg-gray-100 text-gray-800',
        };
        return (
          <span className={`px-3 py-1 rounded text-xs font-medium ${statusColors[cellValue] || 'bg-gray-100 text-gray-800'}`}>
            {cellValue}
          </span>
        );
      case "action":
        const actionIconMap = {
          'Remove': Trash2,
          'Install': Download,
          'Details': Eye,
        };
        const actionVariantMap = {
          'Remove': 'danger',
          'Install': 'success',
          'Details': 'info',
        };
        
        const handleAction = () => {
          if (cellValue === 'Details') {
            handleViewDetails(item.componentTag);
          } else {
            console.log(`Action: ${cellValue} for ${item.componentTag}`);
          }
        };
        
        return (
          <CustomButton
            text={cellValue}
            icon={actionIconMap[cellValue]}
            onClick={handleAction}
            variant={actionVariantMap[cellValue] || 'info'}
            size="sm"
          />
        );
      case "installedOn":
        return <span className="text-gray-600">{cellValue}</span>;
      default:
        return cellValue;
    }
  };

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      // Dummy submission - just console log
      console.log('Component created with values:', values);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(`Component created successfully!\nComponent Tag: ${values.componentTag}\nType: ${values.componentType}`);
      
      // Close modal
      setIsModalOpen(false);
      
    } catch (error) {
      console.error('Error creating component:', error);
      alert('Failed to create component. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get only basic fields for the form (first section)
  const basicFormFields = componentFormFields
    .find(section => section.section === 'Basic Information')
    ?.fields || [];

  return (
    <div className="p-6 overflow-y-auto h-full">
      <TableWrapper
        data={componentsPageData}
        columns={columns}
        title="Components"
        renderCell={renderCell}
        itemsPerPage={10}
        showPagination={true}
        ariaLabel="Components table"
        showCreateButton={true}
        onCreateClick={handleCreateClick}
      />

      {/* Create Component Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Create New Component"
        size="large"
      >
        <GenericForm
          fields={basicFormFields}
          initialValues={componentFormInitialValues}
          validationSchema={componentFormValidationSchema}
          onSubmit={handleFormSubmit}
          onCancel={handleCloseModal}
          submitButtonText="Create Component"
          isSubmitting={isSubmitting}
        />
      </Modal>
    </div>
  );
}
