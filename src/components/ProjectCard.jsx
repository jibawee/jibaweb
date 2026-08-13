import { Link } from 'react-router';

export default function ProjectCard({ project }) {
  return (
    <Link to={project.link} className="block">
      <div className="bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer z-0">
        {project.images && project.images.length > 0 && (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-40 object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
