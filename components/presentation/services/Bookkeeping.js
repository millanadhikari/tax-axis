import React from 'react'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';

const Bookkeeping = () => {
    return (
        <div className="mx-4 max-w-[85rem] md:mx-4 xl:mx-auto my-8 md:flex ">
            <div className="">
                <div className="flex bg-red-100 py-2
             align-center w-14 text-red-500 px-2 rounded-md  ">
                    <MonetizationOnOutlinedIcon fontSize="small" />
                    <AlignVerticalBottomOutlinedIcon fontSize="small" />

                </div>
                <h1 className=" mt-3 mb-4 text-2xl font-bold text-blue-900">Bookkeeping</h1>
                <p className="mb-6 text-gray-500 text-[15px]  max-w-80">More accurate, up-to-date books, without all the stress and frustration.</p>
                <p className="text-gray-500 text-[15px] mb-6  max-w-[30rem]">Let our dedicated, certified bookkeepers take care of your books while you focus on what you do best. We've got the perfect monthly package just for you.</p>
                <h2 className="hidden md:inline font-semibold font-sm text-red-600">Learn More</h2>

            </div>
            <div>
                <img src="/bookkeeping.PNG" className="w-100 h-100"/>
                <h2 className=" md:hidden mt-5 font-semibold font-sm text-red-600">Learn More</h2>

            </div>
        </div>
    )
}

export default Bookkeeping