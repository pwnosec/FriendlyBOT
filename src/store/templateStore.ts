import { create } from 'zustand';
import { Vector3 } from 'three';
import type { CharacterTemplate, TemplateState } from '../types/templates';
import { useEditorStore } from './editorStore';

export const useTemplateStore = create<TemplateState>((set, get) => ({
  templates: [
    {
      id: 'robot-explorer-02',
      name: 'Pwn Explorer 02',
      thumbnail: 'https://i.ibb.co.com/dQDg4HL/11zon-cropped-4.png',
      parts: [
        {
          name: 'Head',
          type: 'head',
          position: new Vector3(0, 2.2, 0),
          rotation: new Vector3(0, 0.2, 0),
          scale: new Vector3(0.8, 0.7, 0.8),
        },
        {
          name: 'Eye Left',
          type: 'accessories',
          position: new Vector3(-0.2, 2.3, 0.3),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.15, 0.15, 0.05),
        },
        {
          name: 'Eye Right',
          type: 'accessories',
          position: new Vector3(0.2, 2.3, 0.3),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.15, 0.15, 0.05),
        },
        {
          name: 'Antenna Left',
          type: 'accessories',
          position: new Vector3(-0.3, 2.7, 0),
          rotation: new Vector3(0, 0, 0.2),
          scale: new Vector3(0.08, 0.4, 0.08),
        },
        {
          name: 'Antenna Right',
          type: 'accessories',
          position: new Vector3(0.3, 2.7, 0),
          rotation: new Vector3(0, 0, -0.2),
          scale: new Vector3(0.08, 0.4, 0.08),
        },
        {
          name: 'Body',
          type: 'body',
          position: new Vector3(0, 1, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(1.2, 1.4, 0.9),
        },
        {
          name: 'Chest Light',
          type: 'accessories',
          position: new Vector3(0, 1.2, 0.5),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.3, 0.3, 0.1),
        },
        {
          name: 'Backpack',
          type: 'accessories',
          position: new Vector3(0, 1, 0.6),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.9, 1.1, 0.4),
        },
        {
          name: 'Left Arm',
          type: 'arms',
          position: new Vector3(-0.9, 1.3, 0),
          rotation: new Vector3(0, 0, -0.3),
          scale: new Vector3(0.25, 1.1, 0.25),
        },
        {
          name: 'Right Arm',
          type: 'arms',
          position: new Vector3(0.9, 1.3, 0),
          rotation: new Vector3(0, 0, 0.3),
          scale: new Vector3(0.25, 1.1, 0.25),
        },
        {
          name: 'Left Hand',
          type: 'accessories',
          position: new Vector3(-1.1, 0.6, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.2, 0.2, 0.2),
        },
        {
          name: 'Right Hand',
          type: 'accessories',
          position: new Vector3(1.1, 0.6, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.2, 0.2, 0.2),
        },
        {
          name: 'Left Leg',
          type: 'legs',
          position: new Vector3(-0.4, -0.4, 0),
          rotation: new Vector3(0, 0, -0.1),
          scale: new Vector3(0.35, 1.2, 0.35),
        },
        {
          name: 'Right Leg',
          type: 'legs',
          position: new Vector3(0.4, -0.4, 0),
          rotation: new Vector3(0, 0, 0.1),
          scale: new Vector3(0.35, 1.2, 0.35),
        },
        {
          name: 'Left Boot',
          type: 'accessories',
          position: new Vector3(-0.4, -1.2, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.5, 0.3, 0.7),
        },
        {
          name: 'Right Boot',
          type: 'accessories',
          position: new Vector3(0.4, -1.2, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.5, 0.3, 0.7),
        }
      ],
    },
    {
      id: 'friendly-robot',
      name: 'Pwn Explorer 01',
      thumbnail: 'https://i.ibb.co.com/dQDg4HL/11zon-cropped-4.png',
      parts: [
        {
          name: 'Head',
          type: 'head',
          position: new Vector3(0, 2, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.8, 0.8, 0.8),
        },
        {
          name: 'Body',
          type: 'body',
          position: new Vector3(0, 0.8, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(1.2, 1.5, 0.8),
        },
        {
          name: 'Left Arm',
          type: 'arms',
          position: new Vector3(-0.8, 0.8, 0),
          rotation: new Vector3(0, 0, -0.2),
          scale: new Vector3(0.4, 1.2, 0.4),
        },
        {
          name: 'Right Arm',
          type: 'arms',
          position: new Vector3(0.8, 0.8, 0),
          rotation: new Vector3(0, 0, 0.2),
          scale: new Vector3(0.4, 1.2, 0.4),
        },
        {
          name: 'Left Leg',
          type: 'legs',
          position: new Vector3(-0.4, -0.8, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.4, 1, 0.4),
        },
        {
          name: 'Right Leg',
          type: 'legs',
          position: new Vector3(0.4, -0.8, 0),
          rotation: new Vector3(0, 0, 0),
          scale: new Vector3(0.4, 1, 0.4),
        },
      ],
    },
  ],
  addTemplate: (template) =>
    set((state) => ({
      templates: [
        ...state.templates,
        { ...template, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),
  applyTemplate: (templateId) => {
    const template = get().templates.find((t) => t.id === templateId);
    if (template) {
      const editorStore = useEditorStore.getState();
      // Clear existing parts
      editorStore.characterParts.forEach((part) => {
        editorStore.removePart(part.id);
      });
      // Add template parts
      template.parts.forEach((part) => {
        editorStore.addPart(part);
      });
    }
  },
}));