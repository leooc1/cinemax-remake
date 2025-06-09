import { useEffect, useState } from 'react'
import SearchButton from '../components/header/SearchButton'
import Loading from '../components/Loading'
import Details from '../components/details/Details'
import DetailsMobile from '../components/details/DetailsMobile'
import RecommendationItem from '../components/RecommendationItem'


export default function FilmeDetails() {
    const API_ROUTE = import.meta.env.VITE_API_ROUTE as string
    const OPTIONS_FETCH = import.meta.env.VITE_OPTIONS_FETCH as string
    const API_KEY_AUTH = import.meta.env.VITE_API_KEY_AUTH as string
    const [loading, setLoading] = useState(true)
    const [itens, setItens] = useState<{
        data: {
            id: number;
            title?: string;
            name?: string;
            release_date?: string;
            backdrop_path: string;
            poster_path: string;
            first_air_date?: string;
            runtime?: number;
            seasons?: {
                id: number;
                name: string;
                air_date?: string;
                episode_count?: number;
                season_number?: number;
            }[];
            genres?: {
                id: number;
                name: string;
            }[];
            vote_average?: number;
            tagline?: string;
            overview?: string;
        },
        recommendations: {
            id: number;
            media_type?: 'movie' | 'tv';
            title?: string;
            name?: string;
            backdrop_path?: string;
        }[]
    } | null>(null)
    const getItems = async () => {
        const id = location.pathname.split('/')[2]
        const data = await fetch(`${API_ROUTE}/movie/${id}?language=pt-BR&api_key=${API_KEY_AUTH}`,
            JSON.parse(OPTIONS_FETCH))
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err))
        const recommendations = await fetch(`${API_ROUTE}/movie/${id}/recommendations?language=pt-BR&page=1&api_key=${API_KEY_AUTH}`,
            JSON.parse(OPTIONS_FETCH))
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err))

        if (data && recommendations)
            setItens({ data, recommendations: [...recommendations.results] })
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
                <main className={`bg-bgd flex min-h-screen flex-col`}>
                    {itens?.data ?
                        <><section className={`w-full h-fit relative bg-center bg-cover flex`}
                            style={{ backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${itens.data.backdrop_path}')` }}>
                            <div className={`bg-primary w-full h-full absolute opacity-90`}></div>
                            <img className='lg:h-96 md:h-64 h-60 w-fit rounded-xl relative md:my-10 my-5 md:ml-10' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${itens.data.poster_path}`}
                                width={600} height={900} alt={itens.data.title || ''} />
                            <Details item={itens.data} />
                        </section>
                            <div className="bg-secondary w-full h-[2px]"></div>
                            <DetailsMobile item={itens.data} />
                            <section className='p-4'>
                                <h3 className={`font-semibold text-2xl text-white`}>Recomendações</h3>
                                <div className='flex gap-4 overflow-x-scroll py-4 scroll-custom'>
                                    {itens.recommendations.length > 0 ?
                                        itens.recommendations.map((item, key: number) => (<RecommendationItem type='movie' key={key} item={item} />))
                                        : <p className={`text-xl text-white`}>Nenhuma recomendação</p>
                                    }
                                </div>
                            </section></>
                        :
                        <p>Tem nada esse id</p>}

                </main>}
        </>
    )
}
