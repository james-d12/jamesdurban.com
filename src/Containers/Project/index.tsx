import ProjectCard from "./ProjectCard";

const Project: React.FC = () => {
    return (
        <div className="container mt-64 mb-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="projects" className="secondary-title">Projects</h2>
                <p className="section-paragraph">
                    I have built many projects during my professional and hobbyist time as a software engineer ranging from fullstack
                    bespoke web applications to 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    <ProjectCard 
                        title="Budget Planner" 
                        description="A budget planning tool to assist the finance team and directors in creating, reviewing and managing budgets." 
                        imageUrl="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" 
                        imageAlt="Mountain"
                        tags={["Web Development", "Fullstack"]}
                        link={"/projects/budget-planner"}
                    />
                    <ProjectCard 
                        title="Sales Order Book" 
                        description="A website used by directors for getting and displaying overall financial data for the company in tables and charts." 
                        imageUrl="https://media.istockphoto.com/photos/business-audits-using-a-calculator-financial-data-investment-fund-at-picture-id1129810557?k=20&m=1129810557&s=612x612&w=0&h=TzJGKMmv6MtDvdKaikm4kUoTVUtWVmBVPA-qg740NZ4=" 
                        imageAlt="Mountain"
                        tags={["Web Development", "Fullstack"]}
                        link={"/projects/sales-order-book"}
                    />
                    <ProjectCard 
                        title="HR Management Tool" 
                        description="A HR management system used by all employees at the company  for tracking goals and reviews." 
                        imageUrl="https://media.istockphoto.com/photos/human-resource-management-and-teamup-concept-picture-id1199822089?k=20&m=1199822089&s=612x612&w=0&h=SZjP5FCTv6c_dBHT1-v7DUc3jlbjStdX7m-SRu-uUd4=" 
                        imageAlt="Mountain"
                        tags={["Web Development", "Fullstack"]}
                        link={"/projects/hr-management-tool"}
                    />
                    <ProjectCard 
                        title="Atomic" 
                        description="A general purpose mathematical library written in C++." 
                        imageUrl="https://media.istockphoto.com/photos/books-picture-id949118068?k=20&m=949118068&s=612x612&w=0&h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk=" 
                        imageAlt="Mountain"
                        tags={["Web Development", "Fullstack"]}
                        link={"/projects/atomic"}
                    />
                    <ProjectCard 
                        title="Agnostic Package Manager" 
                        description="A universal package management system written in Rust." 
                        imageUrl="https://st2.depositphotos.com/1001877/7125/i/600/depositphotos_71255577-stock-photo-delivery-concept-boxes-on-pallet.jpg" 
                        imageAlt="Mountain"
                        tags={["Web Development", "Fullstack"]}
                        link={"/projects/agnostic-package-manager"}
                    />
                     <ProjectCard 
                        title="Dokky" 
                        description="Documentation markdown generator written in Python." 
                        imageUrl="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        imageAlt="Mountain"
                        tags={[]}
                        link={"/projects/agnostic-package-manager"}
                    />
                </div>
            </section>
        </div>
    )
}

export default Project;