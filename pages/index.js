import Head from 'next/head'
import Main from '../components/Main'
import Features from '../components/Features'
import {signIn, signOut, useSession} from 'next-auth/client'
import Taxreturn from './Taxreturn';
import { useRouter } from "next/router";


export default function Home() {
  const [session, loading] = useSession();
 const router = useRouter();


  return (
    <div className=" bg-[#f6f8ff] h-screen ">
      <Head>
        <title>Tax Axis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {session ? <Taxreturn/>
      :
       
      <div>
      <Main/>
      <Features/>
      </div>
}

    </div>
  )
}
