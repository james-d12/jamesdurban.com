import HeaderLink from './HeaderLink'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 py-4 z-50 backdrop-blur">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <div className="text-2xl font-bold">
                    <HeaderLink href="/" title="Go to homepage">
                        {' '}
                        James Durban{' '}
                    </HeaderLink>
                </div>
                <div className="hidden md:flex space-x-12 items-center text-xl">
                    <HeaderLink href="#projects" title="Go to projects">
                        {' '}
                        Projects{' '}
                    </HeaderLink>
                    <HeaderLink href="#skills" title="Go to projects">
                        {' '}
                        Skills{' '}
                    </HeaderLink>
                    <button className="px-6 py-2 bg-theme font-bold rounded">
                        {' '}
                        Contact me{' '}
                    </button>
                </div>
                <div className="md:hidden">
                    <svg
                        width="26"
                        height="18"
                        viewBox="0 0 26 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
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

export default Header
