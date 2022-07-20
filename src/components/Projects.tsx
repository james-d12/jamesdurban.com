interface ProjectProps {
    title: string
    description: string
    image: string
    imageAlt: string
}

export function Project({ title, description, image, imageAlt }: ProjectProps) {
    return (
        <button id={title} class="project" type="button">
            <div class="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                <img class="w-full" src={image} alt={imageAlt} />
                <div class="px-6 py-4">
                    <h1 class="project-title">{title}</h1>
                    <p class="text-base mt-4 mb-8">{description}</p>
                </div>
            </div>
        </button>
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
                <div class="project-container">
                    <Project
                        title="Panda"
                        description=" A budget planning tool to assist the finance team and directors in creating, reviewing and managing budgets."
                        image="https://previews.123rf.com/images/nadger/nadger1110/nadger111000008/10923495-project-planning.jpg"
                        imageAlt="Panda"
                    />

                    <Project
                        title="Sales Order Book"
                        description="A website used by directors for getting and displaying overall financial data for the company in tables and charts."
                        image="https://media.istockphoto.com/photos/business-audits-using-a-calculator-financial-data-investment-fund-at-picture-id1129810557?k=20&amp;m=1129810557&amp;s=612x612&amp;w=0&amp;h=TzJGKMmv6MtDvdKaikm4kUoTVUtWVmBVPA-qg740NZ4="
                        imageAlt="Sales Order Book"
                    />

                    <Project
                        title="HR Management Tool"
                        description=" An HR management system used by employees to track and manage their goals and reviews for the current year."
                        image="https://media.istockphoto.com/photos/human-resource-management-and-teamup-concept-picture-id1199822089?k=20&amp;m=1199822089&amp;s=612x612&amp;w=0&amp;h=SZjP5FCTv6c_dBHT1-v7DUc3jlbjStdX7m-SRu-uUd4="
                        imageAlt="HR Management Tool"
                    />

                    <Project
                        title="Atomic"
                        description="A general purpose mathematical library written in C++."
                        image="https://media.istockphoto.com/photos/books-picture-id949118068?k=20&amp;m=949118068&amp;s=612x612&amp;w=0&amp;h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk="
                        imageAlt="Atomic"
                    />

                    <Project
                        title="APM"
                        description="A universal package management system written in Rust."
                        image="https://st2.depositphotos.com/1001877/7125/i/600/depositphotos_71255577-stock-photo-delivery-concept-boxes-on-pallet.jpg"
                        imageAlt="APM"
                    />

                    <Project
                        title="Dokky"
                        description="Documentation markdown generator written in Python."
                        image="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        imageAlt="Dokky"
                    />
                </div>
            </section>
        </section>
    )
}
