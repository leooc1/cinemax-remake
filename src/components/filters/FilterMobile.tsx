
export default function FilterMobile() {
    function toggleSectionsFilter(index: number) {
        document.getElementsByClassName('fild-filter')[index].classList.toggle('h-14')
        document.getElementsByClassName('fild-filter')[index].classList.toggle('h-fit')
        document.getElementsByClassName('arrow-filter')[index].classList.toggle('rotate-90')
    }
    function toggleFilter() {
        document.getElementById('filter')?.classList.toggle('hidden')
        document.getElementById('filter')?.classList.toggle('flex')
        document.getElementById('back-filter')?.classList.toggle('hidden')
        document.getElementById('back-filter')?.classList.toggle('flex')
    }
    return (
        <>
            <section className={`fixed h-14 w-full justify-center items-center z-20
            md:hidden flex bg-bgd`}>
                <button onClick={toggleFilter} className="p-2 border-2 border-secondary bg-primary w-fit rounded-xl">
                    <img src='/filter/filter.svg' width={24} height={24} alt='filter' />
                </button>{/* filter button */}
                <section id="filter" className="filter-mobile hidden">
                    <div className="bg-primary z-10 fixed top-0 w-60 h-[95px] flex px-2 items-center justify-end">
                        <button onClick={toggleFilter} className="p-3">
                            <img src='/filter/close.svg' width={20} height={20} alt="close" />
                        </button>
                    </div>{/* close button */}
                    <div className="fild-filter fild-filter bg-primary border-2 border-secondary h-14 rounded-2xl w-4/5 relative overflow-hidden">
                        <h2 onClick={() => { toggleSectionsFilter(0) }} className="text-xl p-3 text-white flex justify-between cursor-pointer">
                            Ordenar
                            <span className="arrow-filter transition-all ">
                                <img src='/filter/arrow.svg' width={32} height={32} alt="arrow" />
                            </span>
                        </h2>
                        <div className="bg-secondary w-full h-[2px] absolute top-[52px] left-0"></div>
                        <div className="px-1 py-4">
                            <label className="text-white font-light w-full" htmlFor="order">Ordenar Resultados Por</label>
                            <select className="bg-primary text-white w-full border-2 border-secondary focus:outline-none rounded-lg py-1 mt-2" name="order" id="order">
                                <option value="">Popularidade Descendente</option>
                                <option value="">Popularidade Ascendente</option>
                                <option value="">Classificação Descendente</option>
                                <option value="">Classificação Ascendente</option>
                                <option value="">Data de Lançamento Descendente</option>
                                <option value="">Data de Lançamento Ascendente</option>
                                <option value="">Título (A-Z)</option>
                                <option value="">Título (Z-A)</option>
                            </select>
                        </div>
                    </div>
                    <div className="fild-filter bg-primary border-2 border-secondary h-14 rounded-2xl w-4/5 relative overflow-hidden">
                        <h2 onClick={() => { toggleSectionsFilter(1) }} className="text-xl p-3 text-white flex justify-between cursor-pointer">
                            Filtros
                            <span className="arrow-filter transition-all">
                                <img src='/filter/arrow.svg' width={32} height={32} alt="arrow" />
                            </span>
                        </h2>
                        <div className="bg-secondary w-full h-[2px] absolute top-[52px] left-0"></div>
                    </div>
                </section>
                <div onClick={toggleFilter} id="back-filter" className="bg-[#00000091] w-screen h-screen fixed -z-10 top-0 hidden"></div>
            </section>
        </>
    )
}
