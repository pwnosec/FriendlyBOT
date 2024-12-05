import React from 'react';
import { Plus, Trash2, Move, RotateCw, Maximize } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { Vector3 } from 'three';

export function ToolsPanel() {
  const { addPart, selectedPart, removePart } = useEditorStore();

  const handleAddPart = () => {
    addPart({
      name: 'New Part',
      type: 'body',
      position: new Vector3(0, 0, 0),
      rotation: new Vector3(0, 0, 0),
      scale: new Vector3(1, 1, 1),
    });
  };

  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 space-y-2">
      <button
        onClick={handleAddPart}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Add Part"
      >
        <Plus className="w-6 h-6" />
      </button>
      <button
        onClick={() => selectedPart && removePart(selectedPart)}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Delete Part"
        disabled={!selectedPart}
      >
        <Trash2 className="w-6 h-6" />
      </button>
      <button
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Move Tool"
      >
        <Move className="w-6 h-6" />
      </button>
      <button
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Rotate Tool"
      >
        <RotateCw className="w-6 h-6" />
      </button>
      <button
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Scale Tool"
      >
        <Maximize className="w-6 h-6" />
      </button>
    </div>
  );
}