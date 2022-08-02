export default function Header() {
    return (
        <header class="fixed top-0 left-0 right-0 py-6 px-4 z-50 backdrop-blur border-b-4 border-secondary">
            <div class="container flex justify-between items-center mx-auto w-full">
                <div class="text-2xl font-bold">
                    <a class="hover:text-secondary" href="#" title="Go to homepage">
                        James Durban
                    </a>
                </div>
                <ol class="header-list">
                    <li>
                        <a class="hover:text-secondary" href="#projects" title="Go to projects">
                            {' '}
                            Projects{' '}
                        </a>
                    </li>
                    <li>
                        <a class="hover:text-secondary" href="#skills" title="Go to projects">
                            {' '}
                            Skills{' '}
                        </a>
                    </li>
                    <li>
                        <a
                            class="hover:text-secondary"
                            href="https://notes.jamesdurban.com"
                            title="Go to my Digital Garden"
                        >
                            {' '}
                            Digital Garden
                        </a>
                    </li>
                </ol>
                <div class="md:hidden">
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </header>
    )
}
