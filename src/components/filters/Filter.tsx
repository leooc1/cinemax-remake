import FilterMobile from "./FilterMobile";

export default function Filter() {
    function toggleSectionsFilter(index: number) {
        document.getElementsByClassName('fild-filter')[index].classList.toggle('h-14')
        document.getElementsByClassName('fild-filter')[index].classList.toggle('h-fit')
        document.getElementsByClassName('arrow-filter')[index].classList.toggle('rotate-90')
    }
    return (
        <>
            <FilterMobile />
            <section className="filter">
                <div className="fild-filter fild-filter bg-primary border-2 border-secondary h-14 rounded-2xl w-4/5 relative overflow-hidden">
                    <h2 onClick={() => { toggleSectionsFilter(2) }} className="text-xl p-3 text-white flex justify-between cursor-pointer">
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
                    <h2 onClick={() => { toggleSectionsFilter(3) }} className="text-xl p-3 text-white flex justify-between cursor-pointer">
                        Filtros
                        <span className="arrow-filter transition-all">
                            <img src='/filter/arrow.svg' width={32} height={32} alt="arrow" />
                        </span>
                    </h2>
                    <div className="bg-secondary w-full h-[2px] absolute top-[52px] left-0"></div>
                </div>
            </section>
        </>
    )
}
