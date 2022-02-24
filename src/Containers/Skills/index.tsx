import Section from "Components/Section";

interface SkillProps {
    title: string;
    src: string;
}

const Skill: React.FC<SkillProps> = ({ title, src }) => {
    return (
        <div className="grid grid-rows-1 justify-center items-center text-center grayscale hover:grayscale-0">
            <img width="150" height="150" src={process.env.PUBLIC_URL + `/icons/${src}`} />
            <h1 className="font-bold text-3xl">{title}</h1>
        </div>
    )
}

const Skills: React.FC = () => {
    return (
        <Section 
            id="skills"
            title="Skills" 
            description=""
        >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-6">
                <Skill title="React" src="react.svg"/>
                <Skill title="C++" src="cpp.svg"/>
                <Skill title="CSS3" src="css3.svg"/>
                <Skill title="Git" src="git.svg"/>
                <Skill title="GitHub" src="github.svg"/>
                <Skill title="HTML5" src="html5.svg"/>
                <Skill title="JavaScript" src="javascript.svg"/>
                <Skill title="Node.js" src="nodejs.svg"/>
                <Skill title="Python" src="python.svg"/>
                <Skill title="Rust" src="rust.svg"/>
                <Skill title="TypeScript" src="typescript.svg"/>
            </div>
        </Section>
    )
}

export default Skills;