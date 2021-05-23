import { useEffect, useState } from 'react'
import Welcome from '../components/taxreturn/Welcome'
import Previous from '../components/taxreturn/Previous'
import Menuholder from '../components/taxreturn/ui/menuHolder'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import withAuth from '../HOC/withAuth'
const plans = [
  {
    name: '2019',
    completed: 'Incomplete',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: '2018',
    completed: 'Incomplete',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: '2017',
    completed: 'Incomplete',

    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]


function taxreturn({ }) {
  const [session, loading] = useSession();
  const [selected, setSelected] = useState([])
  console.log(selected)

  const router = useRouter()

  return (
    <div className="h-screen bg-white-400 flex flex-col w-full max-w-lg mx-auto pt-5">
      {/* <Welcome /> */}
      <div className="ml-9">
        <h1 className=" text-xl font-semibold text-gray-700">Greetings, {session.user.name}</h1>
        <p className="text-xs text-gray-500 mt-1">Let's start with the yearly tax return</p>
      </div>
      <Menuholder plans={plans} selected={selected} setSelected={setSelected} />

      {selected == '' ?
        <button disabled onClick={() => router.replace('/starttaxreturn/startnew')}
          className="btn mx-auto px-7 py-2">
          Select a year
                   </button>
        :
        <button onClick={() => router.replace('/starttaxreturn/startnew')}
          className="btn mx-auto px-7 py-2">
          Start Tax Return
                      </button>}



    </div>
  )
}

export default withAuth(taxreturn)
