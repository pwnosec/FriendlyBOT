import React from 'react';
import { useTemplateStore } from '../../store/templateStore';

export function TemplatesPanel() {
  const { templates, applyTemplate } = useTemplateStore();

  return (
    <div className="absolute right-4 top-4 bg-white rounded-lg shadow-lg p-4 w-64">
      <h3 className="text-lg font-semibold mb-4">Templates</h3>
      <div className="grid grid-cols-1 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => applyTemplate(template.id)}
            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <img
              src={template.thumbnail}
              alt={template.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 text-left">
              <h4 className="font-medium">{template.name}</h4>
              <p className="text-sm text-gray-500">
                {template.parts.length} parts
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}