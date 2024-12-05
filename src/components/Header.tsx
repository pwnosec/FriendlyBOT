import React from 'react';
import { Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center">
            <div className="max-w-2xl w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search projects</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search projects"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-400" />
            </button>
            <div className="ml-3 relative">
              <div>
                <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://i.ibb.co.com/jHNPYrP/zz.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}