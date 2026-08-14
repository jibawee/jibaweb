import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { getProjectById } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!project) {
    return (
      <div className="p-20 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/projects" className="text-blue-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-20 max-w-4xl mx-auto">
      <Link to="/projects" className="text-blue-400 hover:underline mb-6 block">
        ← Back to Projects
      </Link>
      <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
      <p className="text-gray-300 mb-8 text-lg">{project.fullDescription}</p>
      {project.images && project.images.length > 0 && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${project.title} - Image ${index + 1}`}
                className="rounded w-full"
              />
            ))}
          </div>
        </div>
      )}
      {project.iframe && (
        <div className="mb-8 flex justify-center relative">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-4 border-pink-400 border-t-transparent animate-spin" />
            </div>
          )}
          <iframe
            width="570"
            height="325"
            src={project.iframe}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      )}
      {project.tools && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-2">Tools Used:</h3>
          <div className="flex gap-2 flex-wrap">
            {project.tools.map(tool => (
              <span key={tool} className="bg-slate-700 px-3 py-1 rounded text-white">
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
      {project.links && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-2">Links:</h3>
          <div className="flex gap-4 flex-wrap">
            {project.links.map(link => (
              <a 
                key={link.label}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
