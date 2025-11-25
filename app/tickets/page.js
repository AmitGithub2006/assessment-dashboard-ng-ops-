'use client';

import React from 'react';
import TableWrapper from '@/components/Table/TableWrapper';
import { ticketsTableData } from '@/app/dummyJson/dummyJson';

const columns = [
  { key: "ticketId", label: "TICKET ID" },
  { key: "type", label: "TYPE" },
  { key: "sla", label: "SLA" },
  { key: "status", label: "STATUS" },
];

export default function TicketsPage() {
  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "ticketId":
        return <span className="font-medium text-gray-800">{cellValue}</span>;
      case "sla":
        const slaColor = item.slaStatus === 'critical' 
          ? 'text-red-600 font-semibold' 
          : item.slaStatus === 'warning' 
          ? 'text-orange-600 font-semibold' 
          : 'text-gray-600';
        return <span className={slaColor}>{cellValue}</span>;
      case "status":
        const statusColors = {
          'IN PROGRESS': 'bg-blue-100 text-blue-800',
          'ESCALATED': 'bg-red-100 text-red-800',
          'OPEN': 'bg-green-100 text-green-800',
          'PENDING APPROVAL': 'bg-yellow-100 text-yellow-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[cellValue] || 'bg-gray-100 text-gray-800'}`}>
            {cellValue}
          </span>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="p-6 overflow-y-auto max-h-screen">
      <TableWrapper
        data={ticketsTableData}
        columns={columns}
        title="Tickets"
        renderCell={renderCell}
        itemsPerPage={10}
        showPagination={true}
        ariaLabel="Tickets table"
      />
    </div>
  );
}
