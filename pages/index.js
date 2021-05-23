import Head from 'next/head'
import Main from '../components/Main'
import Features from '../components/Features'
import {signIn, signOut, useSession} from 'next-auth/client'
import { useRouter } from "next/router";
import Dashboard from '../components/Dashboard';


export default function Home() {
  const [session, loading] = useSession();
 const router = useRouter();


  return (
    <div className=" bg-[#f6f8ff] h-screen ">
      <Head>
        <title>Tax Axis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {session ? 
      <Dashboard/>
      :
       
      <div>
      <Main/>
      <Features/>
      </div>
}

    </div>
  )
}
