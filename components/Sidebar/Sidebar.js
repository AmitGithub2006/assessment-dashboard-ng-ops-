'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Component, 
  Share2, 
  Ticket, 
  Archive, 
  FileText, 
  Settings 
} from 'lucide-react';
import { menuItems } from '@/app/dummyJson/dummyJson';

const iconMap = {
  LayoutDashboard,
  Package,
  Component,
  Share2,
  Ticket,
  Archive,
  FileText,
  Settings,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 shrink-0 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = pathname === item.path;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}