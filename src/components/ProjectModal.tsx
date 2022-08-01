import { Setter } from 'solid-js'

interface ProjectModalProps {
    title: string
    setShowProject: Setter<boolean>
}

export default function ProjectModal({ title, setShowProject }: ProjectModalProps) {
    return (
        <>
            <div class="project-modal">
                <div class="relative w-auto my-6 mx-4 max-w-3xl">
                    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                        <div class="flex items-start justify-between p-5 border-b border-solid border-secondary rounded-t bg-tertiary bg-tertiary">
                            <h3 class="text-3xl text-secondary font-semibold">{title}</h3>
                            <button
                                class="p-1 ml-auto bg-transparent border-0 text-secondary opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowProject(false)}
                            >
                                <span class="opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">*</span>
                            </button>
                        </div>
                        <div class="relative p-6 flex-auto bg-tertiary">
                            <p class="my-4 text-slate-500 text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                        <div class="flex items-center justify-end p-6 rounded-b bg-tertiary">
                            <button
                                class="text-secondary background-transparent font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowProject(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
