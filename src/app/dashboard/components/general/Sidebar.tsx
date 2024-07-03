import React from 'react'
import NavLinks from './NavLinks'

export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex'>
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <NavLinks />
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}
