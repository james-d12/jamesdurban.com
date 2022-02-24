import Link from "Components/Link";
import IconLink from "Components/IconLink";

const Hero = () => {
    return (
        <div className="container mt-32 flex justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="flex flex-wrap">
                <div className="flex flex-col lg:ml-0 justify-center items-center text-center mx-auto mt-0 md:my-36">
                    <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl my-4 text-theme">
                        Hi, I'm James.
                    </h1>
                    <h2 className="font-normal text-2xl md:text-2xl lg:text-3xl">
                        A software engineer currently working at Scott Brownrigg.
                    </h2>
                    <div className="flex flex-nowrap mt-4">
                        <IconLink
                            title="GitHub Profile"
                            label="Go to GitHub Profile"
                            href="https://www.github.com/james-d12"
                            iconClass="fab fa-github fa-lg"
                        />
                        <IconLink
                            title="GitLab Profile"
                            label="Go to GitLab Profile"
                            href="https://www.gitlab.com/james-d12"
                            iconClass="fab fa-gitlab fa-lg"
                        />
                        <IconLink
                            title="Resume"
                            label="Open Resume"
                            href={process.env.PUBLIC_URL + "/files/resume.pdf"}
                            iconClass="fas fa-file-alt fa-lg"
                        />
                        <IconLink
                            title="Email"
                            label="Email James Durban"
                            href="mailto:@james_d02@protonmail.com"
                            iconClass="fas fa-envelope-square fa-lg"
                        />
                    </div>
                    <Link title="Go to projects" href="#projects">View my projects</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;