
export default function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-secondary to-primary backdrop:brightness-50">
            <h1 className='tracking-wide text-6xl text-white'>Cine
                <span className='text-secondary'>Max</span>
            </h1>
            <h2 className="text-white text-6xl">40<span className='text-secondary'>4</span></h2>
            <p className="text-white text-2xl">Esta página não existe</p>
            <a className="text-white text-xl underline" href="/">Clique aqui para voltar ao início</a>
        </div>
    )
}
