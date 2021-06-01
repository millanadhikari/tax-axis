function PriceCard({
    name,
    description,
    price,
    discounted,
    title,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
    description9,
    description10,
    description11, }) {
    return (
        <div className="h-[45rem] border-1 shadow-md bg-white min-w-[14rem] max-w-[14rem] py-7 px-3 m-5
        sm: transition sm:duration-200 sm:transform sm:ease-in sm:hover:scale-105">
            <h1 className="mb-2 text-2xl font-semibold">{name}</h1>
            <span className="border-t-2 border-blue-500 text-transparent h-2">dfdfdf</span>
            <h2 className="line-through text-gray-500 text-xl">{discounted}</h2>
            <div className="flex text-gray-800">
                <h1 className="text-4xl font-extrabold ">{price}</h1>
                <p>.00</p>
            </div>
            <p className="my-4">{title}</p>
            <button className="rounded-3xl bg-blue-500 px-9 py-2 text-white font-semibold
             focus:outline-none transition">Select</button>

            <div className="my-5 py-4 border-t-2">
                <ul className="flex flex-col space-y-2 cursor-pointer">
                    <li className="hover:underline text-sm text-gray-500">{description1}</li>
                    <li className="hover:underline text-sm text-gray-500">{description2}</li>
                    <li className="hover:underline text-sm text-gray-500">{description3}</li>
                    <li className="hover:underline text-sm text-gray-500">{description4}</li>
                    <li className="hover:underline text-sm text-gray-500">{description5}</li>
                    <li className="hover:underline text-sm text-gray-500">{description6}</li>
                    <li className="hover:underline text-sm text-gray-500">{description7}</li>
                    <li className="hover:underline text-sm text-gray-500">{description8}</li>
                    <li className="hover:underline text-sm text-gray-500">{description9}</li>
                    <li className="hover:underline text-sm text-gray-500">{description10}</li>
                    <li className="hover:underline text-sm text-gray-500">{description11}</li>
                    

                </ul>
            </div>
        </div>
    )
}

export default PriceCard
