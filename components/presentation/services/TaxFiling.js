import React from 'react'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';

const TaxFiling = () => {
    return (
        <div className="mx-4 max-w-[85rem] md:mx-4 xl:mx-auto my-8 md:flex ">
            <img src="/taxFiling1.PNG" className="hidden md:inline w-100 h-100" />

            <div className="">
                <div className="flex flex-col items-center bg-blue-100 align-center w-[40px] text-md font-semibold text-blue-500 rounded-md ">
                    <div className="mb-[-10px]">- =</div>
                    <div>+ x</div>

                </div>
                <h1 className=" mt-3 mb-4 text-2xl font-bold text-blue-900">Get Ready for Tax Filing</h1>
                <p className="mb-6 text-gray-500 text-[15px]  max-w-80">Heading to your accountant now?</p>
                <p className="text-gray-500 text-[15px] max-w-[30rem]">Your Balance Sheet is ready in just two clicks away.</p>
                <p className="mt-2 text-gray-500 text-[15px] max-w-[30rem]">Plus, you can share any reports, or your entire account for that matter, with ATO in seconds.</p>
                <p className="mt-6 text-gray-500 text-[15px] mb-4  max-w-80">Now you're collaborating. That was easy.</p>
                <h2 className="hidden md:inline font-semibold font-sm text-red-600">Learn More</h2>

            </div>
            <div>
                <div className="relative">
                    <img src="/taxfiling1.PNG" className="relative md:hidden w-100 h-100" />
                   
                </div>
                <h2 className=" md:hidden mt-5 font-semibold font-sm text-red-600">Learn More</h2>

            </div>
        </div>
    )
}

export default TaxFiling