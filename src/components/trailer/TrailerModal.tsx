import { useEffect } from "react"

type TrailerModalProps = {
    id: string
    name: string
    fechar: () => void
}

export default function TrailerModal(props: TrailerModalProps) {

    useEffect(() => { }, [props])
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20" onClick={props.fechar}>
            <div className="w-full md:w-4/5 lg:w-3/5 aspect-video z-10">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${props.id}`}
                    title={props.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    )
}
