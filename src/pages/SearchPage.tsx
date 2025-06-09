import { useState, useEffect } from "react"
import SearchButton from "../components/header/SearchButton"
import Loading from "../components/Loading"
import ItemFound from "../components/ItemFound"

const API_ROUTE = import.meta.env.VITE_API_ROUTE as string
const OPTIONS_FETCH = import.meta.env.VITE_OPTIONS_FETCH as string
const API_KEY_AUTH = import.meta.env.VITE_API_KEY_AUTH as string

export default function SearchPage() {
    const [field, setField] = useState('movie')
    const [loading, setLoading] = useState(true)
    const [itens, setItens] = useState<{
        movies: {
            id: number;
            title?: string;
            name?: string;
            poster_path: string;
            release_date?: string;
            first_air_date?: string;
            overview?: string;
        }[]
        series: {
            id: number;
            title?: string;
            name?: string;
            poster_path: string;
            release_date?: string;
            first_air_date?: string;
            overview?: string;
        }[]
    } | null>(null)
    async function getItems() {
        const search = location.pathname.split('/')[2]
        const movies = await fetch(`${API_ROUTE}/search/movie?query=${search}&include_adult=false&language=pt-BR&page=1&api_key=${API_KEY_AUTH}`,
            JSON.parse(OPTIONS_FETCH))
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err))
        const series = await fetch(`${API_ROUTE}/search/tv?query=${search}&include_adult=false&language=pt-BR&page=1&api_key=${API_KEY_AUTH}`,
            JSON.parse(OPTIONS_FETCH))
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err))

        if (movies.results && series.results)
            setItens({
                movies: movies.results,
                series: series.results
            })
        else
            setItens(null)
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
                <main className={`bg-bgd flex min-h-screen flex-col pb-4`}>
                    <section className="flex gap-10 justify-center mb-4">
                        <button onClick={() => { setField('movie') }} className={`flex gap-3 items-center bg-primary text-white px-3 py-2 rounded-b-2xl ${field === 'movie' ? 'border-2 border-t-0 border-secondary' : null}`}>
                            Filmes
                            <span className="font-light">( {itens?.movies?.length} )</span>
                        </button>
                        <button onClick={() => { setField('tv') }} className={`flex gap-3 items-center bg-primary text-white px-3 py-2 rounded-b-2xl ${field === 'tv' ? 'border-2 border-t-0 border-secondary' : null}`}>
                            Séries
                            <span className="font-light">( {itens?.series?.length} )</span>
                        </button>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        {field === 'movie' ?
                            itens?.movies?.map((item, key: number) => (<ItemFound type="movie" key={key} item={item} />))
                            :
                            itens?.series?.map((item, key: number) => (<ItemFound type="serie" key={key} item={item} />))
                        }
                    </section>
                </main>}
        </>
    )
}
