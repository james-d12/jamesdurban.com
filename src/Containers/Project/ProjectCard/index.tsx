import { useState, Fragment } from 'react'
import Modal from 'Components/Modal'
import Badge from 'Components/Badge'

interface Props {
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    tags: string[]
}

const ProjectCard: React.FC<Props> = ({
    title,
    description,
    imageUrl,
    imageAlt,
    tags,
}) => {
    const [show, setShow] = useState(false)
    const handleSetShow = () => {
        setShow(!show)
    }

    const handleClose = () => { setShow(false) }

    return (
        <Fragment>
            <button onClick={handleSetShow} className="transform transition duration-350 hover:scale-105 hover:border-1 hover:border-theme">
                <div className="max-w-screen rounded overflow-hidden shadow-lg bg-tertiary text-left">
                    <img className="w-full" src={imageUrl} alt={imageAlt} />
                    <div className="px-6 py-4">
                        <h1 className="font-bold text-3xl mb-2 text-theme">
                            {title}
                        </h1>
                        <p className="text-base mt-4 mb-8">{description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {tags.map((tag, index) => (
                            <Fragment key={index}>
                                <Badge>{tag}</Badge>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </button>
            {show && <Modal handleClose={handleClose}/>}
        </Fragment>
    )
}

export default ProjectCard
