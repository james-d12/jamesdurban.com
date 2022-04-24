interface Props {
    title: string;
    src: string;
}

const SkillIcon: React.FC<Props> = ({ title, src }) => {
    return (
        <div className="grid grid-rows-1 justify-center items-center text-center grayscale hover:grayscale-0">
            <img title={title} alt={title} width="150" height="150" src={process.env.PUBLIC_URL + `/icons/${src}`} />
            <h1 className="font-bold text-3xl">{title}</h1>
        </div>
    )
}

export default SkillIcon