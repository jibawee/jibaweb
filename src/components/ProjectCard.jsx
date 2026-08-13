import { Link } from 'react-router';

export default function ProjectCard({ project }) {
  return (
    <Link to={project.link} className="block">
      <div className="bg-olive-700 rounded-lg hover:bg-olive-600 transition-colors cursor-pointer z-0">
        {project.images && project.images.length > 0 && (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-43 object-cover"
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
