import { useEventCallback } from '@material-ui/core';
import { getProviders, signIn, getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Link from 'next/link'




function login({ providers, session }) {

    
     return (
        <div className="flex flex-col text-center border sm:max-w-md sm:mx-auto sm:mt-20">
            <header className="py-4 border font-bold text-gray-800">Login or sign up</header>
        <div className="p-8 flex flex-col gap-4">
        <div className="text-left text-2xl font-semibold">Welcome to Tax-Axis</div>
        <form className="flex flex-col ring-1 ring-gray-500 rounded-md  ">
            <input className="p-4 ring-1 ring-gray-500 rounded-b-none rounded-md focus:ring-black-900" type=""placeholder="Email:"></input>
            <input className="p-4 ring-1 ring-gray-500 rounded-t-none rounded-md" placeholder="Password"></input>
        </form>
        <div className="text-left">Remember Me</div>

        <button className="btn bg-gradient-to-r from-red-500 via-pink-500 to-red-600 ring-0 rounded-md
            py-3 text-white text-lg">Continue</button>
            <p>or</p>

            {Object.values(providers).map(provider => (
                <div  className="btn py-3 ring-gray-400 text-gray-500 font-bold flex flex-col gap-3" key={provider.name}>
                    <button onClick={() => (signIn(provider.id))}>Continue with {provider.name}</button>
                </div>
            ))}
        </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    // const router = await useRouter()

    const {req, res} = context;
    const session = await getSession({req})
    const providers = await getProviders(context)
        if(session) {
           return {
               redirect:{
                   destination:'/',
                   permanent:false,
               }
           }
            // res.writeHead(302, {
            //     Location:'/',
            // });
            // res.end()
            // return
        }


    return {
        props:{session, providers}
      
      
    }
}

export default login
