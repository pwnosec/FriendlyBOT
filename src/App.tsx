import React from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { EditorWorkspace } from './components/editor/EditorWorkspace';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 bg-gray-800">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
              <h1 className="text-xl font-bold text-white">PwnOsec Creator</h1>
            </div>
            <div className="h-0 flex-1 flex flex-col overflow-y-auto">
              <Navigation />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <EditorWorkspace />
        </div>
      </div>
    </div>
  );
}

export default App;