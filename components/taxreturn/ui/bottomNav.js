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
            justify-center items-center bg-white ring-1 ring-gray-600 text-blue-900  
            cursor-pointer font-bold">
                <BottomIcon  Icon={DocumentDuplicateIcon} title="Dashboard" link="/" />
                <BottomIcon  Icon={DocumentDuplicateIcon} title="Tax Return" link="/taxreturn" />
                <BottomIcon Icon={DocumentAddIcon} link="/uploadDocuments" title="Uploads" />
                <BottomIcon Icon={UserIcon} link="/profile" title="My Profile" />
            </div>}
        </>
    )
}

export default bottomNav;
