import { useState } from "react"
import TrailerModal from "./TrailerModal"

export default function AssistirTrailer({ trailers }: {
    trailers: {
        name: string
        key: string
        site: string
        size: number
        type: string
        official: boolean
        published_at: string
        id: string
    }[]
}) {
    const [listagem, setListagem] = useState<boolean>(false)
    const [watchTrailer, setWatchTrailer] = useState<boolean>(false)
    const [key, setKey] = useState<string>('')
    const [name, setName] = useState<string>('')

    return (
        <section className="h-12 flex items-center">
            <button className="bg-black text-secondary rounded-full text-[17px] font-semibold px-2 py-1 border-2 border-secondary shadow-none transition-all duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_#ff7a00] active:translate-y-0.5 active:translate-x-0.25 active:shadow-none cursor-pointer"
                onClick={() => {
                    if (trailers.filter(t => (t.site).toLowerCase() == 'youtube').length > 0) {
                        setListagem(true)
                    }
                }}>
                Assistir Trailer
            </button>
            {listagem && <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20">
                <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-60" onClick={() => setListagem(false)}></div>
                <ul className="bg-primary z-10 border-2 border-secondary rounded-2xl w-72 md:w-96 pb-4 pt-2 px-2 gap-3 flex flex-col">
                    <button className="w-fit self-end mb-4" onClick={() => setListagem(false)}>
                        <svg className="w-8 h-fit hover:fill-secondary fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
                    </button>
                    {trailers.filter(t => (t.site).toLowerCase() == 'youtube')
                        .map(t => <li className="hover:text-secondary text-white text-xl font-medium border-2 hover:border-secondary border-white rounded-xl px-2 py-1 transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis" title={t.name}
                            onClick={() => {
                                setKey(t.key)
                                setName(t.name)
                                setWatchTrailer(true)
                            }}>{t.name}</li>)}
                </ul>
                {watchTrailer && <TrailerModal id={key} name={name} fechar={()=>setWatchTrailer(false)}/>}
            </section>}
        </section>
    )
}
