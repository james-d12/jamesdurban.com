import Section from "Components/Section";
import ProjectCard from "./ProjectCard";

const Project: React.FC = () => {
    return (
        <Section
            id="projects"
            title="Projects"
            description="
            I have built many projects during my professional and hobbyist time as a software engineer ranging from fullstack
            bespoke web applications to low level mathematical libraries.
            "
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                <ProjectCard
                    title="Panda"
                    description="A budget planning tool to assist the finance team and directors in creating, reviewing and managing budgets."
                    imageUrl="https://previews.123rf.com/images/nadger/nadger1110/nadger111000008/10923495-project-planning.jpg"
                    imageAlt="Mountain"
                    tags={["Web Development", "Fullstack", "React"]}
                />
                <ProjectCard
                    title="Sales Order Book"
                    description="A website used by directors for getting and displaying overall financial data for the company in tables and charts."
                    imageUrl="https://media.istockphoto.com/photos/business-audits-using-a-calculator-financial-data-investment-fund-at-picture-id1129810557?k=20&m=1129810557&s=612x612&w=0&h=TzJGKMmv6MtDvdKaikm4kUoTVUtWVmBVPA-qg740NZ4="
                    imageAlt="Mountain"
                    tags={["Web Development", "Fullstack", "JavaScript"]}
                />
                <ProjectCard
                    title="HR Management Tool"
                    description="An HR management system used by employees to track and manage their goals and reviews for the current year."
                    imageUrl="https://media.istockphoto.com/photos/human-resource-management-and-teamup-concept-picture-id1199822089?k=20&m=1199822089&s=612x612&w=0&h=SZjP5FCTv6c_dBHT1-v7DUc3jlbjStdX7m-SRu-uUd4="
                    imageAlt="Mountain"
                    tags={["Web Development", "Fullstack", "React"]}
                />
                <ProjectCard
                    title="Atomic"
                    description="A general purpose mathematical library written in C++."
                    imageUrl="https://media.istockphoto.com/photos/books-picture-id949118068?k=20&m=949118068&s=612x612&w=0&h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk="
                    imageAlt="Mountain"
                    tags={["Library", "C++"]}
                />
                <ProjectCard
                    title="Agnostic Package Manager"
                    description="A universal package management system written in Rust."
                    imageUrl="https://st2.depositphotos.com/1001877/7125/i/600/depositphotos_71255577-stock-photo-delivery-concept-boxes-on-pallet.jpg"
                    imageAlt="Mountain"
                    tags={["Web Development", "Fullstack"]}
                />
                <ProjectCard
                    title="Dokky"
                    description="Documentation markdown generator written in Python."
                    imageUrl="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    imageAlt="Mountain"
                    tags={["Python", "Documentation"]}
                />
            </div>
        </Section>
    )
}

export default Project;