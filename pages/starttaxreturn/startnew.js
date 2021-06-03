import React, { useEffect } from 'react'
import { useForm, useStep, Controller } from "react-hooks-helper"
import BasicDetails from '../../components/taxreturn/BasicDetails'
import IndividualThree from '../../components/taxreturn/taxform/IndividualThree'
import IndividualTwo from '../../components/taxreturn/taxform/IndividualTwo'
import withAuth from '../../HOC/withAuth'



const defaultData = {
    firstName: "Milan",
    lastName: "dfdf",
    nickName: "dfdf",
    address: 'dfdf d d d ',
    city: 'dfdfd ',
    state: 'nsw',
    post_code: '2121',
    phone: '054545454',
    email: 'dfdfd@yahoo.com',
    serviceChoosed: "End of Lease Clean",
    propertyType: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    totalPrice: 149,
    studyRoom: true,
    laundry: false,
    separateToilet: false,
    balcony: false
}

const steps = [
    { id: 'chooseservice' },
    { id: 'jobdescription' },
    { id: 'names' },
    { id: 'address' },
    { id: 'contact' },
    { id: 'review' },
    { id: 'submit' },

]
function Details() {

    const [formData, setForm] = useForm(defaultData);
    const { register, control } = useForm()
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })

    useEffect(() => {
        console.log(step)
        console.log(formData.firstName)

    }, [formData])

    const props = { formData, setForm, control, register, navigation }
    switch (step.id) {
        case "chooseservice":
            return <><BasicDetails {...props} /> </>;
        case "jobdescription":
            return <><IndividualTwo {...props} /></>
        case "names":
            return <><IndividualThree {...props} /></>


    }
    // <QuoteCreater {...props} />

    return (
        <div className="">
            <div>

            </div>
        </div>
    )
}

export default withAuth(Details)
