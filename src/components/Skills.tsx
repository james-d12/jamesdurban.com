import ReactImage from '../assets/icons/react.svg'
import CPPImage from '../assets/icons/cpp.svg'
import CSS3Image from '../assets/icons/css3.svg'
import GitImage from '../assets/icons/git.svg'
import GitHubImage from '../assets/icons/github.svg'
import HTML5Image from '../assets/icons/html5.svg'
import JavaScriptImage from '../assets/icons/javascript.svg'
import NodeJSImage from '../assets/icons/nodejs.svg'
import PythonImage from '../assets/icons/python.svg'
import RustImage from '../assets/icons/rust.svg'
import TypeScriptImage from '../assets/icons/typescript.svg'
import PowerShellImage from '../assets/icons/powershell.svg'
import MUIImage from '../assets/icons/mui.svg'

interface SkillIconProps {
    src: string
    title: string
}

export function SkillIcon({ src, title }: SkillIconProps) {
    return (
        <div class="skill-icon">
            <img title={title} alt={title} width="150" height="150" src={src} />
            <h1 class="font-bold text-3xl">{title}</h1>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" class="section justify-between">
            <section class="w-full">
                <h2 class="section-title">Skills</h2>
                <p class="section-paragraph text-quaternary">
                    I have professional and hobbyist experience in a large variety of tools and languages. Below is a
                    non exhaustive list of my most used technologies.
                </p>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-6">
                    <SkillIcon title="React" src={ReactImage} />
                    <SkillIcon title="C++" src={CPPImage} />
                    <SkillIcon title="CSS3" src={CSS3Image} />
                    <SkillIcon title="Git" src={GitImage} />
                    <SkillIcon title="GitHub" src={GitHubImage} />
                    <SkillIcon title="HTML5" src={HTML5Image} />
                    <SkillIcon title="JavaScript" src={JavaScriptImage} />
                    <SkillIcon title="Node.js" src={NodeJSImage} />
                    <SkillIcon title="Python" src={PythonImage} />
                    <SkillIcon title="Rust" src={RustImage} />
                    <SkillIcon title="TypeScript" src={TypeScriptImage} />
                    <SkillIcon title="PowerShell" src={PowerShellImage} />
                    <SkillIcon title="MUI" src={MUIImage} />
                </div>
            </section>
        </section>
    )
}
