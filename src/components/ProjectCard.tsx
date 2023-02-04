import { JSXElement, Show } from 'solid-js'

interface ProjectCardProps {
    title: string
    image: string
    imageAlt: string
    flip?: boolean
    children: JSXElement
}

export default function ProjectCard({ title, image, imageAlt, flip = false, children }: ProjectCardProps) {
    return (
        <div
            id={title}
            class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left grid grid-cols-1 lg:grid-cols-2 w-full px-4 py-4 gap-8"
        >

            <Show when={!flip}>
                <div>
                    <h1 class="font-bold text-3xl text-secondary border-b border-solid border-secondary">{title}</h1>
                    <p class="text-base mt-4">{children}</p>
                </div>
                <div>
                    <img src={image} alt={imageAlt} />
                </div>
            </Show>

            <Show when={flip}>
                <div>
                    <img src={image} alt={imageAlt} />
                </div>
                <div>
                    <h1 class="font-bold text-3xl text-secondary border-b border-solid border-secondary">{title}</h1>
                    <p class="text-base mt-4">{children}</p>
                </div>
            </Show>

        </div>
    )
}
