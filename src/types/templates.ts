import { Vector3 } from 'three';
import type { CharacterPart } from './editor';

export interface CharacterTemplate {
  id: string;
  name: string;
  thumbnail: string;
  parts: Omit<CharacterPart, 'id'>[];
}

export interface TemplateState {
  templates: CharacterTemplate[];
  addTemplate: (template: Omit<CharacterTemplate, 'id'>) => void;
  applyTemplate: (templateId: string) => void;
}