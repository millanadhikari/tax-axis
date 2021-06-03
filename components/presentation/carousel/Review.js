import Image from 'next/image'


function Review({src, name, company, review}) {
    return (
        <div className="m-5 mb-10 flex max-w-lg min-h-[20rem] items-center rounded-md shadow-md
        py-5 px-4 sm:max-w-2xl sm:mx-auto">
            <div className="w-[22rem] mr-8">
                <Image src={src}
                className="rounded-full"
                alt=""
                height={70}
                width={70}
                objectPosition="contain"
                />
                <h2 className="font-semibold mt-5">{name}</h2>
                <p className="text-sm text-gray-600">{company}</p>
            </div>
            <div className="text-sm text-left flex flex-col space-y-8 align-top">
                <div className="flex justify-between">
                    <div className="flex sm:space-x-3">
                    <p>Overall rating</p>
                    <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <span className="font-bold text-3xl">”</span>
                </div>
                <div>
                <h2 className="font-semibold">Review</h2>
                <p className="text-gray-500">{review}</p>
                </div>
            </div>
        </div>
    )
}

export default Review
