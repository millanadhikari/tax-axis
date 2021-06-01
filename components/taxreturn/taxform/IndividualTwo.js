import { useState, useEffect } from 'react'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Dialog from '../ui/Dialog'
import Loading from '../ui/Loading';

function IndividualTwo({ navigation }) {
    const [Question, setQuestion] = useState(false)
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        window.scrollTo(0, 0)
    }, [])


    
    return (
        <div className="h-screen ">
            {loading ? <Loading /> :
            <div className="box h-screen overflow-y-auto">
                <p onClick={() => navigation.previous()} className="text-gray-500 cursor-pointer">Back</p>
                <h1 className="text-left text-2xl">My Details</h1>
                <div className="flex flex-col space-y-1">
                    <div className="flex justify-between items-center">
                        <h2>Tax File Number<span className="text-red-600 text-md">*</span> (TFN)</h2>
                        <div className="cursor-pointer text-blue-600">
                            <Dialog icon={<ContactSupportIcon />} />
                            {/* <ContactSupportIcon onClick={()=> setQuestion(!Question)}/>
                    {Question ? <Dialog/>: null} */}
                        </div>
                    </div>
                    <input className="input1"></input>
                    <p className="text-sm text-blue-500">Can't find my TFN?</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <div>
                        <h2>Date of birth</h2>
                        <div className="flex space-x-5 w-full cursor-pointer my-2">
                            <select className="input1 w-1/3 p-1">
                                <option className="bg-white">Day</option>
                                <option className="bg-white">1</option>
                                <option className="bg-white">2</option>
                                <option className="bg-white">3</option>
                                <option className="bg-white">4</option>
                                <option className="bg-white">5</option>
                                <option className="bg-white">6</option>
                                <option className="bg-white">7</option>
                                <option className="bg-white">8</option>
                                <option className="bg-white">9</option>
                                <option className="bg-white">10</option>
                                <option className="bg-white">11</option>
                                <option className="bg-white">12</option>
                                <option className="bg-white">13</option>
                                <option className="bg-white">14</option>
                                <option className="bg-white">15</option>
                                <option className="bg-white">16</option>
                                <option className="bg-white">17</option>
                                <option className="bg-white">18</option>
                                <option className="bg-white">19</option>
                                <option className="bg-white">20</option>
                                <option className="bg-white">23</option>
                                <option className="bg-white">24</option>
                                <option className="bg-white">25</option>
                                <option className="bg-white">26</option>
                                <option className="bg-white">27</option>
                                <option className="bg-white">28</option>
                                <option className="bg-white">29</option>
                                <option className="bg-white">30</option>
                                <option className="bg-white">31</option>


                            </select>
                            <select className="w-1/2 input1 p-1">
                                <option className="bg-white">Month</option>
                                <option className="bg-white">January</option>
                                <option className="bg-white">February</option>
                                <option className="bg-white">March</option>
                                <option className="bg-white">April</option>
                                <option className="bg-white">May</option>
                                <option className="bg-white">June</option>
                                <option className="bg-white">July</option>
                                <option className="bg-white">September</option>
                                <option className="bg-white">October</option>
                                <option className="bg-white">November</option>
                                <option className="bg-white">December</option>

                            </select>
                            <select className="w-1/3 input1 p-1">
                                <option className="bg-white">Year</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-1">
                        <h2>Title</h2>
                        <select className="input1 cursor-pointer">
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                            <option>Doctor</option>


                        </select>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <h2>First Name</h2>
                        <input className="input1" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <h2>Middle Names</h2>
                        <input className="input1" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h2>Family Name</h2>
                        <input className="input1" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h2>Mobile Phone Number</h2>
                        <input className="input1" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h2>Home/Work Phone Number</h2>
                        <input className="input1" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h2>Gender</h2>
                        <form className="flex space-x-5">
                            <div className="flex items-center space-x-2">
                            <input type="checkbox" name="male" value="male"/>
                            <p>Male</p>
                            </div>
                            <div className="flex items-center space-x-2">
                            <input type="checkbox" name="male" value="male"/>
                            <p>Female</p>
                            </div>
                        </form>
                    </div>
                    <button onClick={()=> navigation.next()} className="ring-1 bg-blue-500 text-white py-2 text-lg font-semibold cursor-pointer hover:bg-blue-400">Next</button>

                </div>

            </div> }
        </div>
    )
}

export default IndividualTwo
