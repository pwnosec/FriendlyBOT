import React from 'react';
import { Viewport } from './Viewport';
import { ToolsPanel } from './ToolsPanel';
import { PropertiesPanel } from './PropertiesPanel';
import { TemplatesPanel } from './TemplatesPanel';

export function EditorWorkspace() {
  return (
    <div className="flex-1 flex">
      <div className="flex-1 relative">
        <Viewport />
        <ToolsPanel />
        <TemplatesPanel />
      </div>
      <PropertiesPanel />
    </div>
  );
}