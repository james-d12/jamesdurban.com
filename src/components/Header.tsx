import Dropdown from './Dropdown'

export default function Header() {
    return (
        <header class="fixed top-0 left-0 right-0 py-4 md:py-6 lg:py-6 px-4 z-50 backdrop-blur border-b-4 border-secondary">
            <div class="container flex justify-between items-center mx-auto w-full">
                <div class="text-2xl font-bold">
                    <a class="hover:text-secondary" href="#" title="Go to homepage">
                        James Durban
                    </a>
                </div>
                <ol class="header-list">
                    <li>
                        <a class="hover:text-secondary" href="#projects" title="Go to projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a class="hover:text-secondary" href="#skills" title="Go to Skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            class="hover:text-secondary"
                            href="https://notes.jamesdurban.com"
                            title="Go to my Digital Garden"
                        >
                            Digital Garden
                        </a>
                    </li>
                </ol>
                <Dropdown />
            </div>
        </header>
    )
}
