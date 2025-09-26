import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"
import { projects, getProjectById } from "@/lib/projects-data"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}