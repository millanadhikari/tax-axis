import { useRouter } from 'next/router'


function bottomIcon({Icon, title, link}) {
    const router = useRouter()


    return (
        <div onClick={(e)=>{e.preventDefault() 
            router.replace(link)} }
            className="flex flex-col p-3 ">
            <Icon className="h-8 mb-2"/>
            <h2 className="text-sm">{title}</h2>
        </div>
    )
}

export default bottomIcon
