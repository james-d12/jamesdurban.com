export default function Projects() {
    return (
        <section id="projects" class="section justify-between">
            <section class="w-full">
                <h2 class="section-title">Projects</h2>
                <p class="section-paragraph text-quaternary">
                    I have built many projects during my professional and hobbyist time as a software engineer ranging
                    from fullstack bespoke web applications to low level mathematical libraries.
                </p>
                <div class="project-container">
                    <button id="panda-project" class="project" type="button" data-modal-toggle="panda-modal">
                        <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                            <img
                                class="w-full"
                                src="https://previews.123rf.com/images/nadger/nadger1110/nadger111000008/10923495-project-planning.jpg"
                                alt="Mountain"
                            />
                            <div class="px-6 py-4">
                                <h1 class="project-title">Panda</h1>
                                <p class="text-base mt-4 mb-8">
                                    A budget planning tool to assist the finance team and directors in creating,
                                    reviewing and managing budgets.
                                </p>
                            </div>
                        </div>
                    </button>

                    <div
                        id="panda-modal"
                        tabindex="-1"
                        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
                    >
                        <div class="relative p-4 w-full max-w-7xl h-full md:h-auto">
                            <div class="relative rounded-lg shadow bg-primary border-2 border-secondary">
                                <div class="flex justify-between items-center p-5 rounded-t">
                                    <h3 class="text-4xl font-bold text-secondary">Panda</h3>
                                    <button
                                        type="button"
                                        class="rounded-lg text-sm p-1.5 ml-auto hover:bg-gray-600"
                                        data-modal-toggle="panda-modal"
                                    >
                                        <i class="fa-solid fa-xmark fa-2xl"></i>
                                    </button>
                                </div>
                                <div class="project-modal-content">
                                    <div>
                                        <img
                                            class="w-full"
                                            src="https://previews.123rf.com/images/nadger/nadger1110/nadger111000008/10923495-project-planning.jpg"
                                            alt="Mountain"
                                        />
                                    </div>
                                    <div>
                                        <div class="p-2">
                                            <h4 class="text-2xl font-bold text-secondary">Overview</h4>
                                            <p>
                                                The project was a budget planning tool to assist the finance team and
                                                directors in creating, reviewing and managing budgets.
                                            </p>
                                        </div>
                                        <div class="p-2">
                                            <h4 class="text-2xl font-bold text-secondary">Tech Stack</h4>
                                            <p>
                                                The project was a budget planning tool to assist the finance team and
                                                directors in creating, reviewing and managing budgets.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="project">
                        <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                            <img
                                class="w-full"
                                src="https://media.istockphoto.com/photos/business-audits-using-a-calculator-financial-data-investment-fund-at-picture-id1129810557?k=20&amp;m=1129810557&amp;s=612x612&amp;w=0&amp;h=TzJGKMmv6MtDvdKaikm4kUoTVUtWVmBVPA-qg740NZ4="
                                alt="Mountain"
                            />
                            <div class="px-6 py-4">
                                <h1 class="project-title">Sales Order Book</h1>
                                <p class="text-base mt-4 mb-8">
                                    A website used by directors for getting and displaying overall financial data for
                                    the company in tables and charts.
                                </p>
                            </div>
                        </div>
                    </button>
                    <button class="project">
                        <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                            <img
                                class="w-full"
                                src="https://media.istockphoto.com/photos/human-resource-management-and-teamup-concept-picture-id1199822089?k=20&amp;m=1199822089&amp;s=612x612&amp;w=0&amp;h=SZjP5FCTv6c_dBHT1-v7DUc3jlbjStdX7m-SRu-uUd4="
                                alt="Mountain"
                            />
                            <div class="px-6 py-4">
                                <h1 class="project-title">HR Management Tool</h1>
                                <p class="text-base mt-4 mb-8">
                                    An HR management system used by employees to track and manage their goals and
                                    reviews for the current year.
                                </p>
                            </div>
                        </div>
                    </button>
                    <button class="project">
                        <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                            <img
                                class="w-full"
                                src="https://media.istockphoto.com/photos/books-picture-id949118068?k=20&amp;m=949118068&amp;s=612x612&amp;w=0&amp;h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk="
                                alt="Mountain"
                            />
                            <div class="px-6 py-4">
                                <h1 class="project-title">Atomic</h1>
                                <p class="text-base mt-4 mb-8">
                                    A general purpose mathematical library written in C++.
                                </p>
                            </div>
                        </div>
                    </button>
                    <button class="project">
                        <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                            <img
                                class="w-full"
                                src="https://st2.depositphotos.com/1001877/7125/i/600/depositphotos_71255577-stock-photo-delivery-concept-boxes-on-pallet.jpg"
                                alt="Mountain"
                            />
                            <div class="px-6 py-4">
                                <h1 class="project-title">APM</h1>
                                <p class="text-base mt-4 mb-8">
                                    A universal package management system written in Rust.
                                </p>
                            </div>
                        </div>
                    </button>
                    <button class="project">
                        <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                            <img
                                class="w-full"
                                src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                alt="Mountain"
                            />
                            <div class="px-6 py-4">
                                <h1 class="project-title">Dokky</h1>
                                <p class="text-base mt-4 mb-8">Documentation markdown generator written in Python.</p>
                            </div>
                        </div>
                    </button>
                </div>
            </section>
        </section>
    )
}
