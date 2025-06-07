export default function ItemFound({ item, type }: {
    item: {
        id: number;
        title?: string;
        name?: string;
        poster_path: string;
        release_date?: string;
        first_air_date?: string;
        overview?: string;
    }, type: string
}) {
    function releaseDate(release_date: string) {
        const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
        const date = release_date?.split('-')
        if (date?.length === 3)
            return `${date[2]} de ${months[Number(date[1]) - 1]} de ${date[0]}`
        else
            return ''
    }

    return (
        <div className='flex w-4/5 h-36 rounded-xl overflow-hidden bg-white'>
            <a className='contents' href={`/${type}/${item.id}`}>
                <img className='h-36 w-fit' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`} width={600} height={900} alt={item.title || ''} />
            </a>
            <div className='flex flex-col justify-center pl-4'>
                <a href={`/${type}/${item.id}`} className='font-bold text-lg line-clamp-2 text-ellipsis hover:text-secondary w-fit' title={item.title || item.name}>{item.title || item.name}</a>
                <p className='text-sm'>{releaseDate(item.release_date || item.first_air_date || '')}</p>
                <p className='line-clamp-2 text-ellipsis font-medium mt-3' title={item.overview}>{item.overview}</p>
            </div>
        </div>
    )
}
