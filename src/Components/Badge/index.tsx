interface Props {
    children: React.ReactNode
}

const Badge: React.FC<Props> = ({ children }) => {
    return (
        <span className="inline-block bg-theme px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
            {children}
        </span>
    )
}

export default Badge
