import Section from 'Components/Section'
import SkillIcon from './SkillIcon'

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Skills" description="">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-6">
                <SkillIcon title="React" src="react.svg" />
                <SkillIcon title="C++" src="cpp.svg" />
                <SkillIcon title="CSS3" src="css3.svg" />
                <SkillIcon title="Git" src="git.svg" />
                <SkillIcon title="GitHub" src="github.svg" />
                <SkillIcon title="HTML5" src="html5.svg" />
                <SkillIcon title="JavaScript" src="javascript.svg" />
                <SkillIcon title="Node.js" src="nodejs.svg" />
                <SkillIcon title="Python" src="python.svg" />
                <SkillIcon title="Rust" src="rust.svg" />
                <SkillIcon title="TypeScript" src="typescript.svg" />
                <SkillIcon title="PowerShell" src="powershell.svg" />
                <SkillIcon title="MUI" src="mui.svg" />
            </div>
        </Section>
    )
}

export default Skills
