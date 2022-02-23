interface Props {
    title: string;
}

const Badge: React.FC<Props> = ({ title }) => {
    return (
        <span className="inline-block bg-theme px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">
            {title}
        </span>
    )
}

export default Badge;