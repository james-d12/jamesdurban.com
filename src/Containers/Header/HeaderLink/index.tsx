interface HeaderLinkProps {
    href: string
    title: string
    children: React.ReactNode
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, title, children }) => {
    return (
        <a href={href} title={title} className="hover:text-theme">
            {children}
        </a>
    )
}

export default HeaderLink
