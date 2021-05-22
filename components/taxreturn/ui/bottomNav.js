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
            {session && <div className="sticky bottom-0 flex justify-center text-left
            gap-8 items-center bg-white ring-1 ring-gray-600 text-blue-900  
            cursor-pointer font-bold md:absolute md:top-40 md:left-10 md:bottom-80 md:h-40 md:flex-col
            md:bg-transparent">
                <BottomIcon  Icon={DocumentDuplicateIcon} title="Tax Return" link="/taxreturn" />
                <BottomIcon Icon={DocumentAddIcon} link="/uploadDocuments" title="Uploads" />
                <BottomIcon Icon={UserIcon} link="/profile" title="My Profile" />
            </div>}
        </>
    )
}

export default bottomNav;
