import { create } from 'zustand';
import { Vector3 } from 'three';
import type { EditorState, CharacterPart } from '../types/editor';

export const useEditorStore = create<EditorState>((set) => ({
  selectedPart: null,
  characterParts: [],
  setSelectedPart: (id) => set({ selectedPart: id }),
  addPart: (part) =>
    set((state) => ({
      characterParts: [
        ...state.characterParts,
        { ...part, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),
  updatePart: (id, updates) =>
    set((state) => ({
      characterParts: state.characterParts.map((part) =>
        part.id === id ? { ...part, ...updates } : part
      ),
    })),
  removePart: (id) =>
    set((state) => ({
      characterParts: state.characterParts.filter((part) => part.id !== id),
    })),
}));