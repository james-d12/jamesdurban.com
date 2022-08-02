export default function Footer() {
    return (
        <footer class="text-center text-white">
            <div class="flex justify-center mt-4 gap-2">
                <a
                    id="GitHub Footer Link"
                    class="footer-social"
                    title="GitHub Profile"
                    aria-label="Go to GitHub Profile"
                    href="https://www.github.com/james-d12"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fa-brands fa-github fa-lg"></i>
                </a>
                <a
                    id="Linkedin Footer Link"
                    class="footer-social"
                    title="LinkedIn Profile"
                    aria-label="Go to LinkedIn Profile"
                    href="https://www.linkedin.com/in/james-durban"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fa-brands fa-linkedin fa-lg"></i>
                </a>
                <a
                    id="GitLab Footer Link"
                    class="footer-social"
                    title="GitLab Profile"
                    aria-label="Go to GitLab Profile"
                    href="https://www.gitlab.com/james-d12"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fa-brands fa-gitlab fa-lg"></i>
                </a>
                <a
                    id="Email Footer Link"
                    class="footer-social"
                    title="Email"
                    aria-label="Email"
                    href="mailto:james_d02@protonmail.com"
                >
                    <i class="fa-solid fa-square-envelope fa-lg"></i>
                </a>
            </div>
            <div class="text-center text-white p-4 bg-tertiary text-xs md:text-sm lg:text-lg">
                © 2022 Copyright:<a href="https://jamesdurban.com/"> James Durban</a>
            </div>
        </footer>
    )
}
