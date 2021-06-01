import { useState } from 'react'
import SelfEmployed from './presentation/SelfEmployed'
import SmallBusiness from './presentation/SmallBusiness'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const type = [
    { name: 'Small' },
    { name: 'Self' }
]

function Prices({ datas }) {
    const [selected, setSelected] = useState('Small')

    const handleChange = (e) => {
        e.preventDefault()
        setSelected('Small')
        console.log(selected)

    }
    return (
        <div className="my-10 mx-1">
            <h1 className="text-2xl font-extrabold text-center">Build the right plan for your business</h1>
            <div className="flex justify-center space-x-7 my-9">
                <div className="flex space-x-2">
                    <CheckCircleIcon style={{color:'#3882f6'}} color="bg-blue-500"/>
                    <p>Free unilimited support</p>
                </div>
                <div className="flex space-x-2">
                    <CheckCircleIcon style={{color:'#3882f6'}}/>
                <p>Cancel anytime</p>
                </div>
            </div>
            <div className="flex space-x-3 w-full sm:justify-center">
                <div onClick={() => setSelected('Small')}
                    className={`border-2 max-w-sm p-4 w-1/2 rounded-md rounded-b-none cursor-pointer ${selected === 'Small' ? 'border-0 border-t-4 border-blue-500 bg-gray-100 ' : 'text-black'}`} >
                    <h2 className="font-bold ">Small Business</h2>
                    <p className="hidden sm:inline text-gray-600 text-sm">For invoicing, BAS, Payroll & more.</p>
                </div>
                <div
                    className={`border-2  max-w-sm p-4 w-1/2 rounded-md rounded-b-none cursor-pointer ${selected === 'Self' ? 'border-0 border-t-4 border-blue-500 bg-gray-100 ' : 'text-black'}`}
                    onClick={() => setSelected('Self')}>
                    <h2 className="font-bold">Self-employed Business</h2>
                    <p className="hidden sm:inline text-gray-600 text-sm">For invoicing, BAS, Payroll & more.</p>
                </div>
            </div>

                <div className="flex flex-col w-screen justify-center sm:mx-auto text-gray-500 text-sm bg-gray-100">
                    <div className="flex justify-center w-full space-x-5 my-7">
                        <h1 className="text-center">Swipe to see plans</h1>
                        <p className="animate-ping">>></p>
                    </div>
                    <div className="">
                    {selected === 'Small' ? <SmallBusiness /> : <SelfEmployed />}
                    <h2 className="text-center">All Prices incl. GST</h2>

                    </div>

                </div>

        </div>
    )
}

export default Prices
