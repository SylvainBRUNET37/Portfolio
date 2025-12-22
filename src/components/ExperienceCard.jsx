import React from 'react';

export default function ExperienceCard({ project }) {
  return (
    <a 
      href={project.link || "#"} 
      className="group block relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {/* Content */}
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">
            {project.title}
          </h3>
          {project.period && (
            <span className="flex-shrink-0 text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {project.period}
            </span>
          )}
        </div>
        
        {/* Description */}
        <div className="space-y-2.5 mb-5 text-gray-600 text-sm leading-relaxed">
          {project.description.map((line, i) => (
            <p key={i} className="group-hover:text-gray-700 transition-colors duration-300">
              {line}
            </p>
          ))}
        </div>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span 
              key={t} 
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200 group-hover:border-blue-200 group-hover:shadow-sm transition-all duration-300"
              style={{
                transitionDelay: `${idx * 30}ms`
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      </a>
  );
}