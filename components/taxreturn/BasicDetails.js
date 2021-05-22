import Navbar from '../taxreturn/Header'
import ListBox from '../taxreturn/ui/listBox'
import {useState} from 'react'

import {QuestionMarkCircleIcon} from '@heroicons/react/outline'
import Dialogue from '../taxreturn/ui/Dialog'


const people = [
    { name: 'Day' },
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '10' },
  
  ]

const months = [
    {name:'Month'},
    {name:'January'},
    {name:'February'},
    {name:'March'},
    {name:'April'},
    {name:'May'},
    {name:'June'},
    {name:'July'},
    {name:'August'},
    {name:'September'},
    {name:'October'},
    {name:'November'},

]

const years = [
    {name:'Year'},
    {name:'2005'},
    {name:'2004'},
    {name:'2003'},
    {name:'2002'},
    {name:'2001'},
    {name:'2000'},
    {name:'1999'},
    {name:'1998'},
    {name:'1997'},


]



function BasicDetails() {
    const [day, setDay] = useState(people[0])
    const [month, setMonth] = useState(months[0])
    const [year, setYear] = useState(years[0])



    return (
        <div className="h-screen w-full ">
            <div className="box gap-2 m-5 sm:mx-auto sm:p-8">
            <h1 className="text-left text-2xl">Your Tax Return</h1>
            <h2 className="text-bold">Let's start with the basics details</h2>
            <form>
                <div className="my-5 flex flex-col">
                    <h2>Tax File Number</h2>
                    <span className="flex items-center">
                    <input className="p-2 mt-2 mr-4 rounded-md shadow-lg sm:left-0"></input>
                    
                    {/* <Popover /> */}
                    <div>
                    <Dialogue icon={<QuestionMarkCircleIcon className="h-8 cursor-pointer"/>}/>
                    </div>
                    </span>
                </div>
                <div>
                    <h2>Date of Birth</h2>
                    <span className="flex">
                    <ListBox people={people} selected={day} setSelected={setDay}/>
                    <ListBox className="ml-2" people={months} selected={month} setSelected={setMonth}/>
                    <ListBox className="ml-2" people={years} selected={year} setSelected={setYear}/>

                    </span>
                </div>
            </form>
            <div className="mt-10 flex flex-col space-y-3">
            <h1 className="text-xl font-semibold">Why this info?</h1>
            <h2 className="font-semibold">Your TFN and date of birth are basic requirements for an ATO tax return.</h2>
            <p className="text-sm text-gray-500">This lets Tax-Axis know who you are and match the right tax details for you, in order to finish your tax return. It’s also part of something called “pre-fill” which means, your tax return is partly completed for you, so you have less items to think about. When you continue, you appoint Etax as your tax agent which allows us to give automatic tips about tax deductions that will boost your tax refund, plus do pre-fill right here online, pre-lodgement checking and live support with tax accountants, anytime you need help.</p>
            </div>
            </div>
        </div>
    )
}

export default BasicDetails
