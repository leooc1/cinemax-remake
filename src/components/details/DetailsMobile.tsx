import VoteAverage from '../VoteAverage'

export default function DetailsMobile({ item }: {
    item: {
        id: number;
        title?: string;
        name?: string;
        release_date?: string;
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
    }
}) {
    function releaseDate(release_date: string) {
        const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
        const date = release_date?.split('-')
        if (date?.length === 3)
            return `${date[2]} de ${months[Number(date[1]) - 1]} de ${date[0]}`
        else
            return ''
    }
    function minutesToHours(minutos: number) {
        const hrs = Math.floor(minutos / 60);
        const min = minutos % 60;

        const resultado = `${hrs}h ${min}m`;

        return resultado;
    }

    return (
        <section className='relative px-10 pb-10 pt-5 md:hidden flex flex-col justify-center'>
            <h2 className={`text-white text-3xl font-semibold text-center`}>{item.title || item.name}</h2>
            <div className={`mt-3 text-white font-light text-center`}>{releaseDate(item.release_date || item.first_air_date || '')} {item.runtime ? <>| {minutesToHours(item.runtime)}</> : null}
                {item.seasons?.length ? <>| {item.seasons?.length === 1 ? `${item.seasons?.length} Temporada` : `${item.seasons?.length} Temporadas`}</> : null}
                <br />
                {item.genres?.map((genres, key: number, array) => (<span key={key}> {genres.name}{key === array.length - 1 ? '' : ','}</span>))}
            </div>
            <VoteAverage position='my-4 mx-auto'>{item.vote_average?.toFixed(2)}</VoteAverage>
            {item.tagline ? <p className={`text-lg font-semibold italic mb-4 text-center text-zinc-600'}`}>{item.tagline}</p> : null}
            {item.overview &&
                <>
                    <h3 className={`text-2xl text-white font-semibold`}>Sinopse</h3>
                    <p className={`text-white mt-3`}>{item.overview}</p>
                </>
            }
        </section>
    )
}
