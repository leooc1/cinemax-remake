export default function SearchButton() {
    const toggleSearch = () => {
        const search = document.getElementById('search-field')
        const input = document.getElementById('search') as HTMLInputElement
        search?.classList.toggle('hidden')

        if (search?.classList.contains('hidden'))
            input.value = ''
        else
            input?.focus()
    }

    return (
        <>
            {/* <Theme /> */}
            <button className="fixed top-5 right-6 z-10 cursor-pointer" onClick={toggleSearch}>
                <img src='/header/search.svg' width={40} height={40} alt='search' />
            </button>
            <search id="search-field" className="bg-primary hidden py-2 sticky top-20 z-30">
                <form className="h-full w-full flex justify-center" method="POST" action="#"
                    onSubmit={(e) => {
                        e.preventDefault()
                        const search = document.getElementById('search') as HTMLInputElement
                        location.assign('/search/'+encodeURIComponent(search.value))
                    }}>
                    <label className="w-[95%] relative" htmlFor="search">
                        <input className="bg-bgl w-full rounded-lg pl-2 pr-9 py-1 focus:outline-none" type="text" name="search" id="search" />
                        <button className="absolute top-[1px] right-1">
                            <img className="invert" src='/header/search.svg' width={30} height={30} alt='search' />
                        </button>
                    </label>
                </form>
                <div onClick={toggleSearch} className="bg-[#0000008f] absolute top-12 min-h-screen w-full">

                </div>
            </search>
        </>
    )
}
