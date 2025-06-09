import { Outlet } from "react-router-dom";
import LinksFilmes from "./components/header/LinksFilmes";
import LinksSeries from "./components/header/LinksSeries";

export default function App() {

  return (
    <>
      <section className={``}>
        <header className='bg-primary w-full h-20 flex justify-between px-6 sticky top-0 z-10'>
          <div className='flex items-center gap-20'>
            <a href='/'>
              <h1 className='tracking-wide text-3xl text-white'>Cine
                <span className='text-secondary'>Max</span>
              </h1>
            </a>
            <div className='md:flex hidden gap-20'>
              <h2 className='active-header'>Filmes
                <LinksFilmes />
              </h2>
              <h2 className='active-header'>Séries
                <LinksSeries />
              </h2>
            </div>
          </div>
          <div className='flex items-center gap-16'>
          </div>
        </header>
        <>
          <Outlet />
        </>
        <section className='bg-primary w-full md:hidden flex gap-20 h-20 justify-center fixed bottom-0 z-10'>
          <h2 className='active-header'>Filmes
            <LinksFilmes />
          </h2>
          <h2 className='active-header'>Séries
            <LinksSeries />
          </h2>
        </section>
        <footer className='bg-primary w-full h-36 flex justify-center py-2 md:mb-0 mb-[79px] z-10'>
          <div className='text-center border-r border-white px-3 flex flex-col'>
            <p className='font-bold text-white'>Filmes</p>
            <ul>
              <li><a className='active-link font-thin text-white text-sm' href='/movie/popular'>Populares</a></li>
              <li><a className='active-link font-thin text-white text-sm' href='/movie/now-showing'>Em Exibição</a></li>
              <li><a className='active-link font-thin text-white text-sm' href='/movie/upcoming'>Em Breve</a></li>
              <li><a className='active-link font-thin text-white text-sm' href='/movie/top-rated'>Melhor Classificação</a></li>
            </ul>
          </div>
          <div className='text-center border-l border-white px-3 flex flex-col'>
            <p className='font-bold text-white'>Séries</p>
            <ul>
              <li><a className='active-link font-thin text-white text-sm' href='/serie/popular'>Populares</a></li>
              <li><a className='active-link font-thin text-white text-sm' href='/serie/on-the-air'>No Ar</a></li>
              <li><a className='active-link font-thin text-white text-sm' href='/serie/top-rated'>Melhor Classificação</a></li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  )
}