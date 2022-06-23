import React from 'react'
import Bookkeeping from './presentation/services/Bookkeeping'
import TaxFiling from './presentation/services/TaxFiling'

function Services() {
    return (
        <div>
            <Bookkeeping />
            <TaxFiling />
            <div className="md:flex w-full my-14 justify-center ">
                <div className="flex align-center items-center gap-10 justify-center mb-8">
                    <img src="https://media.cdn.gradconnection.com/uploads/ef3c2d15-fb28-4c94-98c2-c33317471650-asic-logo_FOvJ2p8.png" className="h-130 w-[100px]" />
                    <img src="https://www.tpb.gov.au/sites/default/files/tpb_registered_symbol20image.jpg" className="h-130 w-[100px]" />
                </div>
                <div className="flex align-center items-center gap-10 justify-center">
                      <img src="https://advantagefinancesa.com.au/wp-content/uploads/2018/11/FBAA-ACCREDITED-MEMBER-LOGO-1.png" className="h-130 w-[120px]" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Intuit_QuickBooks_logo.png" className="h-130 w-[120px]" /></div>
            </div>
        </div>
    )
}

export default Services