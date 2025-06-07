import VoteAverage from './VoteAverage'

export default function CardItem({ item, type }: { item: {
  id: number;
  title?: string;         
  name?: string;         
  poster_path: string;
  vote_average?: number;
  release_date?: string;  
  first_air_date?: string; 
  media_type?: 'movie' | 'tv';
}, type?: string }) {
  function releaseDate(release_date: string){
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
    const date = release_date?.split('-')
    if (date?.length === 3)
      return `${date[2]} de ${months[Number(date[1]) - 1]} de ${date[0]}`
    else
      return ''
  }

  const media_type = item.media_type === 'movie' ? 'movie' : 'serie'


  return (
    <a className='mx-auto mt-4' href={`/${type || media_type}/${item.id}`} title={item.title || item.name}>
      <div id={`${type || media_type}-${item.id}`} className='bg-white rounded-xl w-44 h-[400px] overflow-hidden mx-auto mt-4 relative'>
        <img className='w-44' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`} width={600} height={900} alt={item.title || item.name} />
        <VoteAverage position='-mt-5 ml-2'>{item.vote_average?.toFixed(2)}</VoteAverage>
        <div className='flex flex-col h-24 justify-between'>
          <p className='font-bold text-sm px-1 pt-1'>{item.title || item.name}</p>
          <p className='text-center text-sm'>
            {releaseDate(item.release_date || item.first_air_date || '')}</p>
        </div>
      </div>
    </a>
  )
}
