'use client';

import React, { useState } from 'react';
import DashboardCard from '@/components/atoms/DashboardCard';
import PieChart from '@/components/molecules/PieChart';
import StackedColumnChart from '@/components/molecules/StackedColumnChart';
import { dashboardCards, locationWiseAssetsData, assetsPerCampusData } from '@/dummyJson/dummyJson';
import { CheckCircle2, Archive, Settings, Wrench } from 'lucide-react';
import AssetsTable from '@/components/Table/Table';
import AllocationModal from '@/components/modals/AllocationModal';
import ComponentActionModal from '@/components/modals/ComponentActionModal';

const iconMap = {
  CheckCircle2: CheckCircle2,
  Archive: Archive,
  Settings: Settings,
  Wrench: Wrench,
};

export default function DashboardPage() {
  const legendLabels = {
    'LWS': 'Laptops with Students',
    'LIS': 'Laptops in Stock',
    'LR': 'Laptops Repairable',
    'LNW': 'Non-Working Laptops',
    'LWFHE': 'Laptops with Work-from-Home Employees',
    'LCT': 'Laptops with Campus Team',
    'LASLFH': 'Laptops with Amaravati Students Learning from Home',
    'LSD': 'Laptops with Security Deposit',
    'LB': 'Laptops with Bond',
    'LSJOP': 'Laptops for Student Job Observation Period',
    'LNGIN': 'Laptops with NG Interns'
  };

  const [allocationModalOpen, setAllocationModalOpen] = useState(false);
  const [componentInstallModalOpen, setComponentInstallModalOpen] = useState(false);
  const [componentStripModalOpen, setComponentStripModalOpen] = useState(false);

  const handleAllocationConfirm = (values) => {
    console.log('Allocation confirmed with values:', values);
  };

  const handleComponentAction = (values) => {
    console.log('Component action completed with values:', values);
  };
  return (
    <div className="p-6 h-full overflow-y-auto">
      {/* Modal Test Buttons */}
      <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-900 mb-3">🧪 Modal Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setAllocationModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
          >
            Open Allocation Modal
          </button>
          <button
            onClick={() => setComponentInstallModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm"
          >
            Open Component Install Modal
          </button>
          <button
            onClick={() => setComponentStripModalOpen(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-sm"
          >
            Open Component Strip Modal
          </button>
        </div>
      </div>

      {/* Modals */}
      <AllocationModal
        isOpen={allocationModalOpen}
        onClose={() => setAllocationModalOpen(false)}
        onConfirm={handleAllocationConfirm}
      />
      <ComponentActionModal
        isOpen={componentInstallModalOpen}
        onClose={() => setComponentInstallModalOpen(false)}
        onAction={handleComponentAction}
        action="install"
      />
      <ComponentActionModal
        isOpen={componentStripModalOpen}
        onClose={() => setComponentStripModalOpen(false)}
        onAction={handleComponentAction}
        action="strip"
      />

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardCards.map((card) => {
          const IconComponent = iconMap[card.icon];
          return (
            <DashboardCard
              key={card.id}
              count={card.count}
              label={card.label}
              icon={IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null}
              bgColor={card.bgColor}
            />
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-6">
        <div className="lg:col-span-7">
          <StackedColumnChart 
            data={assetsPerCampusData}
            title="Assets - per Campus"
            colors={['#93C5FD', '#A5B4FC', '#C4B5FD', '#FB923C', '#FDBA74', '#6EE7B7', '#5EEAD4', '#A7F3D0', '#FDE68A', '#BAE6FD', '#A5F3FC']}
            height="500px"
            hAxisTitle="Campus(If Applicable)"
            vAxisTitle="Campus(If Applicable) Count"
            showDropdown={true}
            dropdownLabel="Campus(If Applicable):"
            showLegendLabels={legendLabels}
          />
        </div>
        <div className="lg:col-span-3">
          <PieChart 
            data={locationWiseAssetsData}
            title="Location wise Assets"
            colors={['#93C5FD', '#5EEAD4']}
            height="500px"
          />
        </div>
      </div>
      <AssetsTable/>
    </div>
  );
}
