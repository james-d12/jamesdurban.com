import { For } from 'solid-js'
import { default as ProjectCard } from './ProjectCard'

import PandaImage from '../assets/images/Panda.webp'
import SalesOrderBookImage from '../assets/images/SalesOrderBook.webp'
import HRManagementToolImage from '../assets/images/HRManagementTool.webp'
import AtomicImage from '../assets/images/Atomic.webp'
import ApmImage from '../assets/images/Apm.webp'
import DokkyImage from '../assets/images/Dokky.webp'

interface ProjectSkillListProps {
    skills: string[]
}

export function ProjectSkillList({ skills }: ProjectSkillListProps) {
    return (
        <div class="pt-4">
            <For each={skills}>
                {(skill) => (
                    <span class="inline-block bg-secondary rounded px-3 py-1 text-sm font-bold text-primary mr-2 mb-2">
                        {skill}
                    </span>
                )}
            </For>
        </div>
    )
}

export default function Projects() {
    return (
        <section id="projects" class="section justify-between">
            <section class="w-full">
                <h2 class="section-title">Projects</h2>
                <p class="section-paragraph">
                    I have built many projects during my professional and hobbyist time as a software engineer ranging
                    from fullstack bespoke web applications to low level mathematical libraries.
                </p>
                <div class="grid grid-cols-1 gap-8 mt-6 text-quaternary">
                    <ProjectCard title="Panda" image={PandaImage} imageAlt="Panda">
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">
                                A budget planning tool to assist the finance team and directors in creating, reviewing
                                and managing budgets across all sectors of the business.
                            </p>
                            <ul class="list-disc mx-5 mt-2">
                                <li>Built with React.js and Material UI.</li>
                                <li>REST API backend built using Express.js & TypeScript</li>
                                <li>Database designed and implemented using Prisma.io</li>
                                <li>API testing using Jest and Supertest.</li>
                                <li>Integration tests using GitHub Actions</li>
                            </ul>
                            <h1 class="mt-2 text-xl font-bold"> How was it built </h1>
                            <p class="mt-2">
                                Panda was designed using the agile methodology and as a result, I worked in sprints of 4 weeks to deliver key features each month.
                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'GitHub Actions', 'Prisma.io', 'SQLITE', 'REST API', 'Sequelize']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard title="Sales Order Book" image={SalesOrderBookImage} imageAlt="Sales Order Book" flip={true}>
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">
                                A website used by directors for getting and displaying overall financial data for the
                                company in tables and charts.
                            </p>
                            <ul class="list-disc mx-5 mt-2">
                                <li>Built with React.js and Material UI.</li>
                                <li>Featured fully functioning REST API with database integration.</li>
                            </ul>
                            <p class="mt-2">

                            </p>
                            <ProjectSkillList
                                skills={['Bootstrap', 'Handlebars', 'Express.js', 'Node.js', 'JavaScript', 'TypeScript', 'SQLITE', 'Sequelize']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard title="Atomic" image={AtomicImage} imageAlt="Atomic">
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">A general purpose mathematical library written in C++.</p>
                            <p class="mt-2">

                            </p>
                            <ProjectSkillList
                                skills={['C++', "Catch2", "CMake", "Clang Tools", "GitHub Actions"]}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard title="APM" image={ApmImage} imageAlt="APM" flip={true}>
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">A universal package management system written in Rust.</p>
                            <p class="mt-2">

                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'REST API', 'Sequelize', 'Sqlite']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard title="Dokky" image={DokkyImage} imageAlt="Dokky">
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">Documentation markdown generator written in Python.</p>
                            <p class="mt-2">

                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'REST API', 'Sequelize', 'Sqlite']}
                            />
                        </div>
                    </ProjectCard>
                </div>
            </section>
        </section>
    )
}
