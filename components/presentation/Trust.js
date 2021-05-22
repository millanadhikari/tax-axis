function Trust({icon, title, description}) {
    return (
        <div className="box mx-10 flex-nowrap flex flex-col items-center gap-5 
            sm:mx-auto sm:grid grid-flow-col  sm:sm:text-left sm:items-start ">
            {icon}
               <div className="flex flex-col gap-4 flex-nowrap" >
                    <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">{title}</h2>
                    <p className="text-md text-gray-500 px-5 sm:px-0 ">{description}</p>
                    </div>
            </div>
    )
}

export default Trust
