import { For } from 'solid-js'
import { default as ProjectCard } from './ProjectCard'

interface ProjectSkillListProps {
    skills: string[]
}

export function ProjectSkillList({ skills }: ProjectSkillListProps) {
    return (
        <div class="pt-4">
            <For each={skills}>
                {(skill) => (
                    <span class="inline-block bg-secondary rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
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
                <p class="section-paragraph text-quaternary">
                    I have built many projects during my professional and hobbyist time as a software engineer ranging
                    from fullstack bespoke web applications to low level mathematical libraries.
                </p>
                <div class="grid grid-cols-1 gap-8 mt-6;">
                    <ProjectCard
                        title="Panda"
                        image="https://previews.123rf.com/images/nadger/nadger1110/nadger111000008/10923495-project-planning.jpg"
                        imageAlt="Panda"
                    >
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">
                                A budget planning tool to assist the finance team and directors in creating, reviewing
                                and managing budgets across all sectors of the business. This was used internally within
                                the business.
                            </p>
                            <ul class="list-disc mx-5 mt-2">
                                <li>Built with React.js and Material UI.</li>
                                <li>Featured fully functioning REST API with database integration.</li>
                                <li>API testing using Jest and Supertest.</li>
                                <li>Integration tests using GitHub Actions</li>
                            </ul>
                            <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'REST API', 'Sequelize', 'Sqlite']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard
                        title="Sales Order Book"
                        image="https://media.istockphoto.com/photos/business-audits-using-a-calculator-financial-data-investment-fund-at-picture-id1129810557?k=20&amp;m=1129810557&amp;s=612x612&amp;w=0&amp;h=TzJGKMmv6MtDvdKaikm4kUoTVUtWVmBVPA-qg740NZ4="
                        imageAlt="Sales Order Book"
                    >
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'REST API', 'Sequelize', 'Sqlite']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard
                        title="HR Management Tool"
                        image="https://media.istockphoto.com/photos/human-resource-management-and-teamup-concept-picture-id1199822089?k=20&amp;m=1199822089&amp;s=612x612&amp;w=0&amp;h=SZjP5FCTv6c_dBHT1-v7DUc3jlbjStdX7m-SRu-uUd4="
                        imageAlt="HR Management Tool"
                    >
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">
                                An HR management system used by employees to track and manage their goals and reviews
                                for the current year.
                            </p>
                            <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'REST API', 'Sequelize', 'Sqlite']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard
                        title="Atomic"
                        image="https://media.istockphoto.com/photos/books-picture-id949118068?k=20&amp;m=949118068&amp;s=612x612&amp;w=0&amp;h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk="
                        imageAlt="Atomic"
                    >
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">A general purpose mathematical library written in C++.</p>
                            <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'REST API', 'Sequelize', 'Sqlite']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard
                        title="APM"
                        image="https://st2.depositphotos.com/1001877/7125/i/600/depositphotos_71255577-stock-photo-delivery-concept-boxes-on-pallet.jpg"
                        imageAlt="APM"
                    >
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">A universal package management system written in Rust.</p>
                            <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                            <ProjectSkillList
                                skills={['React.js', 'Material UI', 'TypeScript', 'REST API', 'Sequelize', 'Sqlite']}
                            />
                        </div>
                    </ProjectCard>

                    <ProjectCard
                        title="Dokky"
                        image="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        imageAlt="Dokky"
                    >
                        <div class="overflow-hidden">
                            <h1 class="text-xl font-bold"> Overview </h1>
                            <p class="mt-2">Documentation markdown generator written in Python.</p>
                            <p class="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
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
