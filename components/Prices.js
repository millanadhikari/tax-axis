import {useState} from 'react'
import SmallBusiness from './presentation/SmallBusiness'

const type = [
    {name:'Small'},
    {name:'Self'}
]

function Prices({datas}) {
   const [selected, setSelected] = useState('Small')

   const handleChange = (e) => {
       e.preventDefault()
       setSelected('Small')
       console.log(selected)

   }
    return (
        <div className="my-10 mx-1">
            <h1 className="text-2xl font-extrabold text-center">Build the right plan for your business</h1>
            <div className="flex justify-center space-x-7 my-5">
                <p>Free unilimited support</p>
                <p>Cancel anytime</p>
            </div>
            <div className="flex space-x-3 w-full">
                <div onClick={()=>setSelected('Small')} 
                className={`border-2 p-4 w-1/2 rounded-md rounded-b-none cursor-pointer ${selected === 'Small' ? 'border-0 border-t-4 border-blue-500 bg-gray-100 ' : 'text-black'}`} >
                    <h2 className="font-bold ">Small Business</h2>
                    <p className="hidden sm:inline">For invoicing, BAS, Payroll & more.</p>
                </div>
                <div 
                className={`border-2 p-4 w-1/2 rounded-md rounded-b-none cursor-pointer ${selected === 'Self' ? 'border-0 border-t-4 border-blue-500 bg-gray-100 ' : 'text-black'}`} 
                onClick={() => setSelected('Self')}>
                    <h2 className="font-bold">Self-employed Business</h2>
                    <p className="hidden sm:inline">For invoicing, BAS, Payroll & more.</p>
                </div>
            </div>
            <div>
                {selected === 'Small' ? <SmallBusiness/>: <p>Rajesh</p>}
            </div>
            
        </div>
    )
}

export default Prices
