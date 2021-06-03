import { useState, useEffect } from 'react'
import Dialog from '../ui/Dialog'
import Loading from '../ui/Loading';


function IndividualThree({ navigation }) {
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="h-screen overflow-y-auto">
            {loading ? <Loading /> :
                <div className="box h-screen overflow-y-auto scrollbar-hide">
                    <p onClick={() => navigation.previous()} className="text-gray-500 cursor-pointer">Back</p>
                    <h1 className="text-left text-2xl">Residency Details</h1>
                    <div className="flex flex-col space-y-1 mb-2">
                        <h2>Do you have Australian Citizenship or PR?</h2>
                        <form className="flex space-x-5 mb-3">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" name="male" value="male" />
                                <p>Yes</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" name="male" value="male" />
                                <p>No</p>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col space-y-1 mb-2">
                        <h1 className="text-left text-2xl">Bank Account to Receive Your Tax Refund</h1>
                        <h2>Bank account details are required by the ATO on every tax return</h2>
                        <form className="flex flex-col space-y-3">
                            <div className="flex flex-col space-y-2">
                                <p>BSB number</p>
                                <input placeholder="*" className="input1 w-1/3 placeholder-red-500" />

                            </div>

                            <div className="flex flex-col space-y-2">
                                <p>Account number</p>
                                <input placeholder="*" className="input1 placeholder-red-500" />

                            </div>

                            <div className="flex flex-col space-y-2">
                                <p>Name of Account Holder</p>
                                <input placeholder="*" className="input1 placeholder-red-500" />

                            </div>

                        </form>

                    </div>



                    <div className="box w-full text-sm bg-blue-300 text-gray-600 mt-3">
                        <h1>Your tax refund will be sent to the bank account shown above. Please enter your bank account number
                        above. Please enter ou bank account details carefully.
                            </h1>
                    </div>

                    <div className="flex flex-col space-y-2 mb-2">
                        <h1 className="text-left text-2xl">Current Postal Address</h1>
                        <form className="flex flex-col space-y-3">
                            <div className="flex flex-col space-y-2">
                                <p>Country</p>
                                <input placeholder="*" className="input1 placeholder-red-500" />

                            </div>

                            <div className="flex flex-col space-y-2">
                                <p>Address</p>
                                <input placeholder="*" className="input1 placeholder-red-500" />

                            </div>
                       
                        </form>

                    </div>

                    <div className="flex flex-col space-y-2 mb-2">
                    <h2>Same as current postal address?</h2>
                        <form className="flex space-x-5 mb-3">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" name="male" value="male" />
                                <p>Yes</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" name="male" value="male" />
                                <p>No</p>
                            </div>
                        </form>

                    </div>
                    <button onClick={()=> navigation.next()} className="next_btn">Next</button>
                </div>}

        </div>
    )
}



export default IndividualThree
