'use client';

import React from 'react';
import DashboardCard from '@/components/atoms/DashboardCard';
import PieChart from '@/components/molecules/PieChart';
import StackedColumnChart from '@/components/molecules/StackedColumnChart';
import { dashboardCards, locationWiseAssetsData, assetsPerCampusData } from '@/app/dummyJson/dummyJson';
import { CheckCircle2, Archive, Settings, Wrench } from 'lucide-react';
import DemoTable from '@/components/Table/Table';

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

  return (
    <div className="p-6 h-full overflow-y-auto"> 
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
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-7">
          <StackedColumnChart 
            data={assetsPerCampusData}
            title="Assets - per Campus"
            colors={['#4F46E5', '#7C3AED', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EF4444', '#F97316', '#06B6D4', '#14B8A6']}
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
      <DemoTable/>
    </div>
  );
}
