interface Props {
    title: string;
}

const Badge: React.FC<Props> = ({ title }) => {
    return (
        <span className="inline-block bg-theme px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
            {title}
        </span>
    )
}

export default Badge;