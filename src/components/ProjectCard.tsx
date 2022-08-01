import { createSignal } from 'solid-js'

import ProjectModal from './ProjectModal'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    imageAlt: string
}

export default function ProjectCard({ title, description, image, imageAlt }: ProjectCardProps) {
    const [showProject, setShowProject] = createSignal(false)
    return (
        <>
            <button id={title} class="project" type="button" onClick={() => setShowProject(true)}>
                <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                    <img class="w-full" src={image} alt={imageAlt} />
                    <div class="px-6 py-4">
                        <h1 class="project-title">{title}</h1>
                        <p class="text-base mt-4 mb-8">{description}</p>
                    </div>
                </div>
            </button>
            {showProject() && <ProjectModal title={title} setShowProject={setShowProject} />}
        </>
    )
}
