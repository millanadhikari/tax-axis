import { React, useState, useEffect } from 'react'
import {MenuIcon} from '@heroicons/react/solid'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { getProviders, useSession, signOut, getSession } from 'next-auth/client'




function Navbar() {
    const [session, loading] = useSession()
    const router = useRouter()


    const [openMenu, setOpenMenu] = useState(false)


    return (
        <div className="z-20 sticky top-0 h-15 p-4 flex flex-row justify-between bg-white position-sticky
        sm:max-w-full sm:mx-auto md:max-w-5xl">
            <div className="min-w-[10rem]">
            <h1 onClick={() => router.push('/')} className="text-2xl flex no-wrap cursor-pointer font-bold text-gray-700">TAX-AXIS</h1>
            <p className="text-sm text-blue-500 font-semibold">ACCOUNTING</p>
            </div>
        <div className="flex w-full justify-end gap-8">
            {session ?
                <button className="btn" onClick={signOut}>Logout</button>
                :
                <div className="hidden sm:flex justify-end flex-row gap-7 w-[40rem]">
                    <div className="text-gray-700 sm:flex gap-4 items-center text-md font-semibold flex-nowrap">
                        <h2>Advice</h2>
                        <h2>Tax Refund Calculator</h2>
                        <h2>FAQs</h2>
                        <h2>How to?</h2>
                    </div>
                    <div className="flex items-center gap-5 ">
                        <button onClick={() => router.push('/auth/login')} className="w-[6rem] h-10 bg-blue-500 ring-0 rounded-sm font-semibold text-lg
                         text-blue-100 hover:bg-blue-400" >Login</button>
                    </div>
                </div>

            }
              {!session ?
                 <div className="sm:hidden">
                    {openMenu ? <ArrowRightIcon onClick={() => setOpenMenu(!openMenu)} className="h-[35px] w-[45px] cursor-pointer sm:hidden" /> :
                        <MenuIcon onClick={() => setOpenMenu(!openMenu)} className="h-[35px] w-[45px] cursor-pointer sm:hidden" />
                    }
                </div> :
                <div className="h-10 w-10 cursor-pointer">
                    <img className="h-10 w-10 ring-black-500 rounded-full" src={session.user.image}alt=""/>
                </div>

            }


            {/* {!session ? <div className="hidden sm:flex flex-row gap-7">
                <div className="sm:hidden lg:flex gap-4 text-lg font-semibold">
                    <h2>Advice</h2>
                    <h2>Tax Refund Calculator</h2>
                    <h2>FAQs</h2>
                    <h2>How to?</h2>
                </div>
                <div className="flex gap-5 ">
                    <button onClick={() => router.push('/auth/login')} className="btn hover:bg-[#2c6ac7] hover:text-white" >Login</button>
                    <button className="btn btn--primary ">Sign Up</button>
                </div>
            </div>
                :
                <button onClick={signOut} >Logout</button> */}


            {/* {!session ?
                <div className="hidden sm:flex flex-row gap-7">
                    <div className="sm:hidden lg:flex gap-4 text-lg font-semibold">
                        <h2>Advice</h2>
                        <h2>Tax Refund Calculator</h2>
                        <h2>FAQs</h2>
                        <h2>How to?</h2>
                    </div>
                    <div className="flex gap-5 ">
                        <button onClick={()=> router.push('/auth/login')} className="btn hover:bg-[#2c6ac7] hover:text-white" >Login</button>
                        <button className="btn btn--primary ">Sign Up</button>
                    </div>
                </div>:
                <button onClick={signOut}>Logout</button>}
                            {!session ?
                 <div className="sm:hidden">
                    {openMenu ? <AiOutlineCloseCircle onClick={() => setOpenMenu(!openMenu)} className="h-[35px] w-[45px] cursor-pointer sm:hidden" /> :
                        <HiMenuAlt3 onClick={() => setOpenMenu(!openMenu)} className="h-[35px] w-[45px] cursor-pointer sm:hidden" />
                    }
                </div> :
                <div className="h-10 w-10 ring-black-500 rounded-full ">
                    <img className="h-10 w-10" alt=""/>
                </div>

            } */}
            {openMenu &&
                <div className="absolute top-[65px] left-0 w-full bg-white sm:hidden">
                    <ul className="flex flex-col gap-3 m-5 font-semibold">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Blogs</li>
                    </ul>
                </div>

            }

</div>

        </div>
    )
}

export default Navbar

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: { session }
    }
}