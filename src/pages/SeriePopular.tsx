
import { useEffect, useState } from 'react'
import CardItem from '../components/CardItem'
import SearchButton from '../components/header/SearchButton'
import Loading from '../components/Loading'


export default function SeriePopular() {
    const API_ROUTE = import.meta.env.VITE_API_ROUTE as string
    const OPTIONS_FETCH = import.meta.env.VITE_OPTIONS_FETCH as string
    const API_KEY_AUTH = import.meta.env.VITE_API_KEY_AUTH as string
    const [loading, setLoading] = useState(true)
    const [itens, setItens] = useState<{
        id: number;
        title?: string;
        name?: string;
        poster_path: string;
        vote_average?: number;
        release_date?: string;
        first_air_date?: string;
        media_type?: 'movie' | 'tv';
    }[]>([])
    async function getItems() {
        const series = await fetch(`${API_ROUTE}/tv/popular?language=pt-BR&page=1&api_key=${API_KEY_AUTH}`,
            JSON.parse(OPTIONS_FETCH))
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err))
        if (series.results)
            setItens(series.results)
        else
            setItens([])
        setLoading(false)
    }
    useEffect(() => {
        if (loading) {
            getItems()
        }
    }, [loading])
    return (
        <>
            <SearchButton />
            {loading ?
                <Loading />
                :
                <main className={`bg-bgd flex min-h-screen md:flex-row flex-col`}>
                    {/* <Filter /> */}
                    <section className="w-full flex flex-wrap md:mt-0 mt-14 md:px-5 px-0 gap-5">
                        {itens.length ?
                            itens.map((item: {
                                id: number;
                                title?: string;
                                name?: string;
                                poster_path: string;
                                vote_average?: number;
                                release_date?: string;
                                first_air_date?: string;
                                media_type?: 'movie' | 'tv';
                            }, key: number) => (<CardItem type='serie' key={key} item={item} />))
                            : null}
                    </section>
                </main>}
        </>
    )
}
