
import ProjectCard from '../components/ProjectCard';
import { projectsList } from '../data/projects';

export default function Projects() {
    return (
    <div className="p-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {projectsList.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </div>
    )
}