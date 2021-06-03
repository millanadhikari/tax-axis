import { useRouter } from 'next/router'


function bottomIcon({Icon, title, link}) {
    // const [active, setActive] = useState('dashboard')
    const router = useRouter()


    return (
        <div onClick={(e)=>{e.preventDefault() 
            router.replace(link)} }
            className="flex flex-col space-x-3 px-3 md:flex-row md:items-center hover:bg-blue-200
            md:py-4 md:active:bg-red-700">
            <Icon className="h-6 mb-2 md:mb-0"/>
            <h2 className="text-sm font-medium">{title}</h2>
        </div>
    )
}

export default bottomIcon
