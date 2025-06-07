
export default function LinksFilmes() {
    return (
        <nav className='links-nav'>
            <ul className='flex flex-col w-full gap-3 py-4 '>
                <li className='flex justify-center'>
                    <a className='active-link font-thin text-white text-base' href='/movie/popular'>
                        Populares
                    </a>
                </li>
                <li className='flex justify-center'>
                    <a className='active-link font-thin text-white text-base'
                        href='/movie/now-showing'>
                        Em Exibição
                    </a>
                </li>
                <li className='flex justify-center'>
                    <a className='active-link font-thin text-white text-base'
                        href='/movie/upcoming'>
                        Em Breve
                    </a>
                </li>
                <li className='flex justify-center'>
                    <a className='active-link font-thin text-white text-base'
                        href='/movie/top-rated'>
                        Melhor Classificação
                    </a>
                </li>
            </ul>
        </nav>
    )
}
