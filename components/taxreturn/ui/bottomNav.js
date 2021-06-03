import React from 'react'
import withAuth from '../../../HOC/withAuth'
import { Provider, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import BottomIcon from './bottomIcon'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon,
    DocumentDuplicateIcon,
    DocumentAddIcon,
} from "@heroicons/react/solid"



function bottomNav() {
    const [session] = useSession()
    const router = useRouter()
    return (
        <>
            {session && <div className="w-full sticky bottom-0 flex 
            justify-center gap-8 items-left bg-white border-2 border-gray-300 text-blue-900  
            cursor-pointer font-bold md:absolute md:left-0 top-20 md:bottom-80 md:h-40 md:flex-col
           md:w-40 md:h-screen md:items-left md:justify-start
            md:border-t-0 md:gap-0 md:pt-5">
                <BottomIcon  Icon={DocumentDuplicateIcon} title="Dashboard" link="/" />
                <BottomIcon  Icon={DocumentDuplicateIcon} title="Tax Return" link="/taxreturn" />
                <BottomIcon Icon={DocumentAddIcon} link="/uploadDocuments" title="Uploads" />
                <BottomIcon Icon={UserIcon} link="/profile" title="My Profile" />
            </div>}
        </>
    )
}

export default bottomNav;
