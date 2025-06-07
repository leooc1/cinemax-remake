
export default function LinksSeries() {
    return (
        <nav className='links-nav'>
            <ul className='flex flex-col w-full gap-3 py-4 '>
                <li className='flex justify-center'><a className='active-link font-thin text-white text-base'
                    href='/serie/popular'>Populares</a></li>
                <li className='flex justify-center'><a className='active-link font-thin text-white text-base'
                    href='/serie/on-the-air'>No Ar</a></li>
                <li className='flex justify-center'><a className='active-link font-thin text-white text-base'
                    href='/serie/top-rated'>Melhor Classificação</a></li>
            </ul>
        </nav>
    )
}
