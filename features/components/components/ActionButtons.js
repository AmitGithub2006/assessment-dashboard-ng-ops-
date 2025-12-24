'use client';

import React, { useState } from 'react';
import { 
  Edit3, 
  AlertCircle, 
  MapPin, 
  HardDrive, 
  XCircle, 
  Trash2,
  QrCode,
  Printer,
  FileText,
  Upload,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import CustomButton from '@/components/atoms/CustomButton';

export default function ActionButtons({ 
  componentStatus, 
  onEdit,
  onMarkFaulty,
  onMoveStorage,
  onInstall,
  onRemove,
  onMarkScrap,
  onGenerateQR,
  onPrintLabel,
  onViewTestReports,
  onUploadDocuments
}) {
  const [isOpen, setIsOpen] = useState(true);
  const buttons = [
    {
      label: 'Edit Details',
      icon: Edit3,
      onClick: onEdit,
      variant: 'primary',
      disabled: false
    },
    {
      label: 'Mark as Faulty',
      icon: AlertCircle,
      onClick: onMarkFaulty,
      variant: 'danger',
      disabled: componentStatus === 'FAULTY' || componentStatus === 'SCRAP'
    },
    {
      label: 'Move Storage',
      icon: MapPin,
      onClick: onMoveStorage,
      variant: 'secondary',
      disabled: componentStatus === 'INSTALLED' || componentStatus === 'SCRAP'
    },
    {
      label: 'Install in Device',
      icon: HardDrive,
      onClick: onInstall,
      variant: 'success',
      disabled: componentStatus === 'INSTALLED' || componentStatus === 'FAULTY' || componentStatus === 'SCRAP'
    },
    {
      label: 'Remove from Device',
      icon: XCircle,
      onClick: onRemove,
      variant: 'warning',
      disabled: componentStatus !== 'INSTALLED'
    },
    {
      label: 'Mark as Scrap',
      icon: Trash2,
      onClick: onMarkScrap,
      variant: 'danger',
      disabled: componentStatus === 'SCRAP'
    },
    {
      label: 'Generate QR Code',
      icon: QrCode,
      onClick: onGenerateQR,
      variant: 'secondary',
      disabled: false
    },
    {
      label: 'Print Label',
      icon: Printer,
      onClick: onPrintLabel,
      variant: 'secondary',
      disabled: false
    },
    {
      label: 'View Test Reports',
      icon: FileText,
      onClick: onViewTestReports,
      variant: 'secondary',
      disabled: false
    },
    {
      label: 'Upload Documents',
      icon: Upload,
      onClick: onUploadDocuments,
      variant: 'secondary',
      disabled: false
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Actions
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      
      {/* Accordion Content */}
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-200">
          <div className="flex flex-wrap gap-3">
            {buttons.map((button, index) => (
              <CustomButton
                key={index}
                text={button.label}
                icon={button.icon}
                onClick={button.onClick}
                variant={button.variant}
                size="md"
                disabled={button.disabled}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
