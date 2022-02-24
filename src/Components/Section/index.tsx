interface Props {
    id: string;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, title, description, children }) => {
    return (
        <div className="container mt-64 mb-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id={id} className="secondary-title">{title}</h2>
                <p className="section-paragraph">{description}</p>
                {children}
            </section>
        </div>
    )
}

export default Section;