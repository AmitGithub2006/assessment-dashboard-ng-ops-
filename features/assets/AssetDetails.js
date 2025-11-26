'use client';

import DetailsPage from '@/components/molecules/DetailsPage';
import { assetDetailsData } from '@/dummyJson/dummyJson';

export default function AssetDetails({ assetId, onBack }) {
  const assetDetails = assetDetailsData[assetId];

  if (!assetDetails) {
    return (
      <div className="p-6">
        <p>Asset not found</p>
      </div>
    );
  }

  const getStatusColor = () => {
    switch (assetDetails.status) {
      case 'Repair':
        return 'text-red-600';
      case 'Allocated':
        return 'text-green-600';
      case 'In Stock':
        return 'text-blue-600';
      case 'Scrap':
        return 'text-gray-600';
      default:
        return 'text-gray-900';
    }
  };

  // Left column sections (30%) - Multiple smaller information cards
  const leftSections = [
    {
      title: 'Quick Info',
      items: [
        { label: 'Status', value: assetDetails.status, className: `font-semibold ${getStatusColor()}` },
        { label: 'Type', value: assetDetails.type },
        { label: 'Campus', value: assetDetails.campus },
        { 
          label: 'SLA Risk', 
          value: assetDetails.slaRisk,
          className: assetDetails.slaRisk.includes('HIGH') || assetDetails.slaRisk.includes('RED')
            ? 'text-red-600 font-semibold'
            : 'text-green-600 font-semibold'
        },
      ],
    },
    {
      title: 'Specs',
      itemsGrid: true, // Enable 2-column grid layout
      items: [
        { label: 'Brand', value: assetDetails.specs.brand },
        { label: 'CPU', value: assetDetails.specs.cpu },
        { label: 'RAM', value: assetDetails.specs.ram },
        { label: 'SSD', value: assetDetails.specs.ssd },
        { label: 'Purchase', value: assetDetails.specs.purchase },
        { label: 'Donor', value: assetDetails.specs.donor },
      ],
    },
  ];

  // Right column sections (70%) - Larger content cards
  const rightSections = [
    {
      title: 'Components',
      table: {
        headers: ['Component Tag', 'Type', 'Status', 'Installed On', 'Slot'],
        rows: assetDetails.components.map(comp => [
          comp.componentTag,
          comp.type,
          comp.status,
          comp.installedOn,
          comp.slot,
        ]),
      },
    },
    {
      title: 'Movement Log',
      items: assetDetails.movementLog.map(log => ({
        label: log.date,
        value: log.event,
      })),
    },
  ];

  return (
    <DetailsPage
      title={`ASSET: ${assetDetails.assetTag}`}
      subtitle={`Status: ${assetDetails.status} | SLA Risk: ${assetDetails.slaRisk}`}
      subtitleColor={assetDetails.slaRisk.includes('HIGH') || assetDetails.slaRisk.includes('RED')
        ? 'text-red-600'
        : 'text-green-600'}
      leftSections={leftSections}
      rightSections={rightSections}
      showTimeline={false}
      onBack={onBack}
    />
  );
}
