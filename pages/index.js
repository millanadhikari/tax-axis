import Head from 'next/head'
import Main from '../components/Main'
import Features from '../components/Features'
import {signIn, signOut, useSession} from 'next-auth/client'
import { useRouter } from "next/router";
import Dashboard from '../components/Dashboard';
import Prices from '../components/Prices';
import Footer from '../components/Footer';
import Banner from '../components/Banner';


export default function Home() {
  const [session, loading] = useSession();
  console.log(loading)
 const router = useRouter();
 if(!session) {
   return(
     <>
    <Main/>
    {/* <Features/> */}
    {/* <Banner/> */}
    <Prices/>
    <Footer/>
  </>
)
 }
 

  return (
    <div className=" bg-[#f6f8ff] h-screen ">
      <Head>
        <title>Tax Axis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Dashboard/>

    </div>
  )
}
