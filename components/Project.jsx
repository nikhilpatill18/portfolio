"use client"
import React from 'react'
import { GlowCard } from './spotlight-card'
import Link from 'next/link'
const Project =({ 
  title, 
  description, 
  techstack, 
  link, 
  githubLink, 
  liveDemo,
  image,
  tags = [],
  status = "Completed",
  featured = false 
}) => {
  return (
    <div className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${featured ? 'ring-1 ring-blue-500/30' : ''}`}>
      
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
          Featured
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
          status === 'Completed' ? 'bg-green-600/20 text-green-400 border border-green-600/30' :
          status === 'In Progress' ? 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30' :
          'bg-gray-600/20 text-gray-400 border border-gray-600/30'
        }`}>
          {status}
        </span>
      </div>

      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-600/30 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 font-medium">{title}</p>
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {githubLink && (
            <Link 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
          )}
          {liveDemo && (
            <Link 
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-600/10 text-blue-400 text-xs rounded-md border border-blue-600/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2 font-bold">Tech Stack</p>
          <div className='flex flex-wrap gap-2'>
            {
            techstack.split(",").map((t)=><p
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 hover:text-white shadow-sm hover:shadow-md transition-all duration-200">{t} </p>)
            }
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {link && (
            <Link 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
            >
              View Project
            </Link>
          )}
          {githubLink && (
            <Link 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};



export default Project
