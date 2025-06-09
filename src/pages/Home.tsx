import { useEffect, useState } from "react"
import CardItem from "../components/CardItem"
import SearchButton from "../components/header/SearchButton"
import Loading from "../components/Loading"


export default function Home() {
    const API_ROUTE = import.meta.env.VITE_API_ROUTE as string
    const OPTIONS_FETCH = import.meta.env.VITE_OPTIONS_FETCH as string
    const API_KEY_AUTH = import.meta.env.VITE_API_KEY_AUTH as string
    const [loading, setLoading] = useState(true)
    const [itens, setItens] = useState<{
        tending: {
            id: number;
            title?: string;
            name?: string;
            poster_path: string;
            vote_average?: number;
            release_date?: string;
            first_air_date?: string;
            media_type?: 'movie' | 'tv';
        }[],
        discover: {
            movie: {
                id: number;
                title?: string;
                name?: string;
                poster_path: string;
                vote_average?: number;
                release_date?: string;
                first_air_date?: string;
                media_type?: 'movie' | 'tv';
            }[],
            serie: {
                id: number;
                title?: string;
                name?: string;
                poster_path: string;
                vote_average?: number;
                release_date?: string;
                first_air_date?: string;
                media_type?: 'movie' | 'tv';
            }[]
        }
    } | null>(null)

    async function getItens() {
        const tending = await fetch(`${API_ROUTE}/trending/all/day?api_key=${API_KEY_AUTH}&language=pt-BR`,
            JSON.parse(OPTIONS_FETCH))
            .then(data => data.json())
            .then(data => data)
            .catch(err => console.log(err))
        const movie = await fetch(`${API_ROUTE}/trending/movie/day?api_key=${API_KEY_AUTH}&language=pt-BR`,
            JSON.parse(OPTIONS_FETCH))
            .then(data => data.json())
            .then(data => data)
            .catch(err => console.log(err))
        const serie = await fetch(`${API_ROUTE}/trending/tv/day?api_key=${API_KEY_AUTH}&language=pt-BR`,
            JSON.parse(OPTIONS_FETCH))
            .then(data => data.json())
            .then(data => data)
            .catch(err => console.log(err))

        if (tending.results && movie.results && serie.results)
            setItens({
                tending: tending.results,
                discover: {
                    movie: movie.results,
                    serie: serie.results
                }
            })
        else
            setItens(null)
        setLoading(false)
    }
    useEffect(() => {
        getItens()
    }, [])
    return (
        <>
            <SearchButton />
            {loading ?
                <Loading />
                :
                <main className={`bg-bgd flex min-h-screen flex-col`}>
                    <h2 className={`text-center font-extrabold text-2xl text-white mt-5`}>Tendência</h2>
                    <section className="mx-3 flex gap-4 overflow-x-scroll scroll-custom pb-4">
                        {itens?.tending?.length ?
                            itens.tending.map((item: {
                                id: number;
                                title?: string;
                                name?: string;
                                poster_path: string;
                                vote_average?: number;
                                release_date?: string;
                                first_air_date?: string;
                                media_type?: 'movie' | 'tv';
                            }, key: number) => (<CardItem key={key} item={item} />))
                            : null}
                    </section>
                    <h2 className={`text-center font-extrabold text-2xl text-white mt-5`}>Descobrir</h2>
                    <h3 className={`text-center font-extrabold text-xl text-white mt-5`}>Filmes</h3>
                    <section className="mx-3 flex gap-4 overflow-x-scroll scroll-custom pb-4">
                        {itens?.discover?.movie?.length ?
                            itens.discover.movie.map((item: {
                                id: number;
                                title?: string;
                                name?: string;
                                poster_path: string;
                                vote_average?: number;
                                release_date?: string;
                                first_air_date?: string;
                                media_type?: 'movie' | 'tv';
                            }, key: number) => (<CardItem type="movie" key={key} item={item} />))
                            : null}
                    </section>
                    <h3 className={`text-center font-extrabold text-xl text-white mt-5`}>Series</h3>
                    <section className="mx-3 flex gap-4 overflow-x-scroll scroll-custom pb-4">
                        {itens?.discover?.serie?.length ?
                            itens.discover.serie.map((item: {
                                id: number;
                                title?: string;
                                name?: string;
                                poster_path: string;
                                vote_average?: number;
                                release_date?: string;
                                first_air_date?: string;
                                media_type?: 'movie' | 'tv';
                            }, key: number) => (<CardItem type="serie" key={key} item={item} />))
                            : null}
                    </section>
                </main>}
        </>
    )
}
