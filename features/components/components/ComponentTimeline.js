'use client';

import React from 'react';
import { 
  Package, 
  Archive, 
  TestTube, 
  Wrench, 
  HardDrive, 
  XCircle, 
  MapPin, 
  AlertCircle, 
  FileText
} from 'lucide-react';

const eventTypeConfig = {
  ACQUIRED: { 
    icon: Package, 
    color: 'bg-green-100 text-green-800 border-green-300',
    label: 'Acquired/Purchased'
  },
  RECEIVED: { 
    icon: Archive, 
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    label: 'Received & Stored'
  },
  TESTED: { 
    icon: TestTube, 
    color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    label: 'Quality Tested'
  },
  EXTRACTED: { 
    icon: Wrench, 
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    label: 'Extracted from Device'
  },
  INSTALLED: { 
    icon: HardDrive, 
    color: 'bg-green-100 text-green-800 border-green-300',
    label: 'Installed in Device'
  },
  REMOVED: { 
    icon: XCircle, 
    color: 'bg-red-100 text-red-800 border-red-300',
    label: 'Removed from Device'
  },
  LOCATION_CHANGED: { 
    icon: MapPin, 
    color: 'bg-purple-100 text-purple-800 border-purple-300',
    label: 'Location Changed'
  },
  MARKED_FAULTY: { 
    icon: AlertCircle, 
    color: 'bg-red-100 text-red-800 border-red-300',
    label: 'Marked as Faulty'
  },
  MARKED_SCRAP: { 
    icon: XCircle, 
    color: 'bg-gray-100 text-gray-800 border-gray-300',
    label: 'Marked as Scrap'
  },
  REPAIRED: { 
    icon: Wrench, 
    color: 'bg-green-100 text-green-800 border-green-300',
    label: 'Repaired/Fixed'
  },
};

export default function ComponentTimeline({ events = [], filterType = null }) {
  const filteredEvents = filterType 
    ? events.filter(event => event.type === filterType)
    : events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
        <p>No journey history available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredEvents.map((event, index) => {
        const config = eventTypeConfig[event.type] || {
          icon: FileText,
          color: 'bg-gray-100 text-gray-800 border-gray-300',
          label: event.type
        };
        const Icon = config.icon;

        return (
          <div key={index} className="relative">
            {/* Timeline line */}
            {index !== filteredEvents.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 -mb-4" />
            )}
            
            {/* Event card */}
            <div className="flex gap-4">
            {/* Icon circle */}
            <div className={` w-12 h-12 rounded-full ${config.color} border-2 flex items-center justify-center z-10`}>
              <Icon className="w-5 h-5" />
              </div>

              {/* Event content */}
              <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${config.color} border mb-2`}>
                      {config.label}
                    </span>
                    <p className="text-sm font-medium text-gray-900">{event.description}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                    {new Date(event.timestamp).toLocaleString('en-IN', {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })}
                  </span>
                </div>

                {/* Event details */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                  {event.location && (
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <span className="ml-1 font-medium text-gray-700">{event.location}</span>
                    </div>
                  )}
                  {event.performedBy && (
                    <div>
                      <span className="text-gray-500">Performed by:</span>
                      <span className="ml-1 font-medium text-gray-700">{event.performedBy}</span>
                    </div>
                  )}
                  {event.deviceTag && (
                    <div>
                      <span className="text-gray-500">Device:</span>
                      <span className="ml-1 font-medium text-blue-600 hover:underline cursor-pointer">
                        {event.deviceTag}
                      </span>
                    </div>
                  )}
                  {event.reason && (
                    <div>
                      <span className="text-gray-500">Reason:</span>
                      <span className="ml-1 font-medium text-gray-700">{event.reason}</span>
                    </div>
                  )}
                </div>

                {/* Notes */}
                {event.notes && (
                  <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600">
                    <span className="font-medium">Notes: </span>
                    {event.notes}
                  </div>
                )}

                {/* Documents */}
                {event.documents && event.documents.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {event.documents.map((doc, idx) => (
                      <a 
                        key={idx}
                        href={doc.url}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <FileText className="w-3 h-3" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
