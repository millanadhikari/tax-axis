import Link from 'next/link'

import {useSession} from 'next-auth/client'


function Welcome() {
    const [session] = useSession()
    return (
        <div className="">
            <div className = "box">
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold"><span>{session.user.name} </span> - Welcome to TaxAxis</h1>
            <h2>The 2020 tax return is for income you received between 1
                July 2019 and 30 June 2020.
            </h2>
            <p>Just add your income, bank interest, any more deductions, health cover and other items, then you should be done! Your return was started, but not signed.
            </p>
            
        </div>
        <Link href='/Details'>
        <button className="btn rounded-md ring-0 bg-[#464775] text-white py-2 px-6 shadow-lg  sm:max-w-lg
            ">Finish My 2020 Tax Return</button></Link>
        </div>
        </div>
    )
}




export default Welcome
