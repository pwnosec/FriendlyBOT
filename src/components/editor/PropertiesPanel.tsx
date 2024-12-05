import React from 'react';
import { useEditorStore } from '../../store/editorStore';

export function PropertiesPanel() {
  const { selectedPart, characterParts, updatePart } = useEditorStore();
  const selectedPartData = characterParts.find((p) => p.id === selectedPart);

  if (!selectedPartData) {
    return (
      <div className="w-64 bg-white p-4 border-l border-gray-200">
        <p className="text-gray-500">No part selected</p>
      </div>
    );
  }

  return (
    <div className="w-64 bg-white p-4 border-l border-gray-200">
      <h3 className="font-semibold mb-4">Properties</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={selectedPartData.name}
            onChange={(e) =>
              updatePart(selectedPartData.id, { name: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={selectedPartData.type}
            onChange={(e) =>
              updatePart(selectedPartData.id, {
                type: e.target.value as any,
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="head">Head</option>
            <option value="body">Body</option>
            <option value="arms">Arms</option>
            <option value="legs">Legs</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      </div>
    </div>
  );
}