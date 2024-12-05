import { Vector3 } from 'three';

export interface CharacterPart {
  id: string;
  name: string;
  type: 'head' | 'body' | 'arms' | 'legs' | 'accessories';
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
}

export interface EditorState {
  selectedPart: string | null;
  characterParts: CharacterPart[];
  setSelectedPart: (id: string | null) => void;
  addPart: (part: Omit<CharacterPart, 'id'>) => void;
  updatePart: (id: string, updates: Partial<CharacterPart>) => void;
  removePart: (id: string) => void;
}