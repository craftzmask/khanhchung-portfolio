import { Badge } from "@/components/ui/badge"

interface Project {
  name: string
  stack: string[]
  description: string
  link: string
  role?: string
}

interface ProjectListProps {
  projects: Project[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
  <ul>
    {projects.map((project) => (
      <a
        key={project.name}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-card border border-border rounded-lg p-5 shadow-md transition duration-300 hover:shadow-xl hover:ring-1 hover:ring-primary mt-4"
      >
        <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
        {project.role && <p className="mt-2 text-xs text-foreground font-medium">{project.role}</p>}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </a>
    ))}
  </ul>
)

export default ProjectList