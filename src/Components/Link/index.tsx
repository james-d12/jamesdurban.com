interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
}

const Link: React.FC<Props> = ({ title, href, children }) => {
    return (
        <a href={href} title={title} className="m-8 px-6 py-2 bg-theme font-bold text-2xl">
            {children}
        </a>
    )
}

export default Link;