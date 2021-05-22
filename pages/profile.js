import React from 'react'
import withAuth from '../HOC/withAuth'
import {useSession, getSession } from 'next-auth/client'
import ProfileDetails from '../components/taxreturn/ui/profileDetails'




function profile() {
    const [session, loading] = useSession()

    return (
        <div className="h-screen ">
            <div className=" flex flex-col gap-2 text-center align-center justify-center pt-10 max-w-lg  
            sm:ring-1 sm:m-10 sm:ring-gray-600 sm:rounded-md sm:mx-auto">
                <img className="h-20 w-20 ring-black-500 mx-auto rounded-full" src={session.user.image} alt="" />
                <div>
            <h1 className="text-xl text-gray-700 font-bold">{session.user.name}</h1>
            <p className="text-sm text-gray-500">Since March 2020</p>
            <ProfileDetails/>
            </div>
            </div>
        </div>

    )
}

export default withAuth(profile)

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//     return {
//         props: { session }
//     }
// }
