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
        <div className="z-20 sticky top-0 h-15 p-4 bg-white position-sticky
        ">
         <div className="flex flex-row justify-between max-w-[85rem] mx-auto">
         <div className="min-w-[10rem]">
            <h1 onClick={() => router.push('/')} className="text-2xl flex no-wrap cursor-pointer font-bold text-gray-700">PERITUM</h1>
            <p className="text-sm text-blue-500 font-semibold">AUS</p>
            </div>
        <div className="flex w-full justify-end gap-8">
            {session ?
                <button className="btn" onClick={signOut}>Logout</button>
                :
                <div className="hidden sm:flex align-center justify-center flex-row gap-7">
                    <div className="text-gray-600 sm:flex gap-4 items-center text-md flex-nowrap">
                        <h2 className="cursor-pointer hover:text-gray-800">For Business</h2>
                        <h2 className="cursor-pointer hover:text-gray-800">Tax Refund Calculator</h2>
                        <h2 className="cursor-pointer hover:text-gray-800">FAQs</h2>
                        <h2 className="cursor-pointer hover:text-gray-800">How to?</h2>
                    </div>
                    <div className=" ml-16 flex items-center text-gray-700">
                    Call Sales: 1800 917 221
                        </div>
                    <div className="flex items-center gap-5 ">
                        <button onClick={() => router.push('/auth/login')} className="w-[5rem] h-10 bg-blue-500 ring-0 rounded-sm font-semibold text-md
                         text-gray-100 hover:bg-white hover:text-blue-500 hover:ring-2 hover:border-ring-600" >Login</button>
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