
function Clips({name, icon, color, bg}) {
    return (
        <div className="flex cursor-pointer space-x-2 max-w-[20rem] bg-white items-center px-2 pr-5 py-2 shadow-xl rounded-full
        sm: transition sm:duration-200 sm:transform sm:ease-in sm:hover:scale-105">
            <div className={`flex items-center justify-center ${bg} ${color} h-8 w-8 rounded-full`}>
                {icon}
            </div>
            <h2 className="font-bold text-sm">{name}</h2>
            
        </div>
    )
}

export default Clips
