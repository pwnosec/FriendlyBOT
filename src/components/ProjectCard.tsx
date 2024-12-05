import React from 'react';
import { Clock, Users } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={project.thumbnail}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock className="mr-1.5 h-4 w-4 flex-shrink-0" />
          <time dateTime={project.lastModified.toISOString()}>
            {project.lastModified.toLocaleDateString()}
          </time>
        </div>
        <div className="mt-2">
          <div className="flex -space-x-2 overflow-hidden">
            {project.collaborators.map((collaborator) => (
              <img
                key={collaborator.id}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src={collaborator.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(collaborator.name)}`}
                alt={collaborator.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}