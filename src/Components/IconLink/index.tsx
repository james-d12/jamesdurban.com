interface Props {
    title: string;
    label: string;
    href: string;
    iconClass: string;
}

const IconLink: React.FC<Props> = ({ title, label, href, iconClass }) => {
    return (
        <a className="m-5 text-4xl transform transition duration-150 hover:scale-125" title={title} aria-label={label} href={href} target="_blank" rel="noopener">
            <i className={iconClass}></i>
        </a>
    )
}

export default IconLink;