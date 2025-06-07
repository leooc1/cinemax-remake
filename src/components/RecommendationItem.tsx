export default function RecommendationItem({ item, type }: {
    item: {
        id: number;
        media_type?: 'movie' | 'tv';
        title?: string;
        name?: string;
        backdrop_path?: string;
    }, type?: string
}) {
    const media_type = item.media_type === 'movie' ? 'movie' : 'serie'
    return (

        <a className='mt-4' href={`/${type || media_type}/${item.id}`} title={item.title || item.name}>
            <div id={`${type || media_type}-${item.id}`} className='rounded-xl w-64'>
                <img className='rounded-xl w-full' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}`} width={1920} height={400} alt={item.title || item.name} />
                <div>
                    <p className={`font-medium text-base px-1 pt-1 tracking-wider text-ellipsis line-clamp-1 hover:text-secondary text-white`}>{item.title || item.name}</p>
                </div>
            </div>
        </a>
    )
}
