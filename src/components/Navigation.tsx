import React from 'react';
import { Home, Layers, Users, Box, Settings, LogOut } from 'lucide-react';
import type { NavigationItem } from '../types';

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/', icon: Home, current: true },
  { name: 'Projects', href: '/projects', icon: Layers, current: false },
  { name: 'Collaborate', href: '/collaborate', icon: Users, current: false },
  { name: 'Assets', href: '/assets', icon: Box, current: false },
  { name: 'Settings', href: '/settings', icon: Settings, current: false },
];

export function Navigation() {
  return (
    <nav className="space-y-1 px-2">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`
            group flex items-center px-2 py-2 text-sm font-medium rounded-md
            ${
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }
          `}
        >
          <item.icon
            className={`
              mr-3 h-6 w-6 flex-shrink-0
              ${
                item.current
                  ? 'text-gray-300'
                  : 'text-gray-400 group-hover:text-gray-300'
              }
            `}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
      
      <button className="w-full mt-4 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
        <LogOut className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-300" />
        Logout
      </button>
    </nav>
  );
}