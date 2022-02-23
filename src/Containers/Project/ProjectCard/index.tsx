import React from "react";
import Badge from "Components/Badge";

interface Props {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    tags: string[]
    link: string;
}

const ProjectCard: React.FC<Props> = ({ title, description, imageUrl, imageAlt, tags, link }) => {
    return (
        <a href={link} className="transform transition duration-350 hover:scale-105 hover:border-1 hover:border-theme">
            <div className="max-w-screen rounded overflow-hidden shadow-lg bg-projects">
                <img className="w-full" src={imageUrl} alt={imageAlt} />
                <div className="px-6 py-4">
                    <h1 className="font-bold text-2xl mb-2">{title}</h1>
                    <p className="text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tags.map((tag, index) => (
                    
                        <React.Fragment key={index}>
                            <Badge title={tag}/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </a>

    )
}

export default ProjectCard;