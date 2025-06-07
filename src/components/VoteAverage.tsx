import React from 'react'

export default function VoteAverage({ children, position }: 
    { children: React.ReactNode, position?: string }) {
    return (
        <>
            <div className={`bg-black h-10 w-16 border-2 border-secondary rounded-full text-white
            flex justify-center gap-1 items-center relative ${position}`}>
                {children}
                <img src='/header/star.svg' width={14} height={14} alt='star'/>
            </div>
        </>
    )
}
