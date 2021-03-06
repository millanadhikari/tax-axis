import PriceCard from "./PriceCard"

const data = [
    { 
        name: "Company",
        discounted: 90,
        price: '$450',
        title: "Save 30% for 3 months",
        description1: 'Track income & expenses',
        description2: 'Financial Report',
        description3: 'Snap & Store receipts',
        description4: 'Track kilometres',
        description5: 'Send unilimited invoices & quotes',
        description6: 'Connect your bank',
        description7: 'Insights & reports'
    }, 
    { 
        name: "Trust",
        discounted: 22,
        price: '$450',
        title: "Save 30% for 3 months",
        description1: 'Track income & expenses',
        description2: 'Send unilimited invoices & quotes',
        description3: 'Snap & Store receipts',
        description4: 'Track kilometres',
        description5: 'Send unilimited invoices & quotes',
        description6: 'Connect your bank',
        description7: 'Insights & reports',
        description8: 'Manage suppliers and bills',
        description9: 'Multi-currency',
        description10: 'Set-up recurring transactions',
        description11: 'Manage users (up to 3)'

    }, 
    { 
        name: "Partnership",
        discounted: 22,
        price: '$340',
        title: "Save 30% for 3 months",
        description1: 'Track income & expenses',
        description2: 'Send unilimited invoices & quotes',
        description3: 'Snap & Store receipts',
        description4: 'Track kilometres',
        description5: 'Send unilimited invoices & quotes',
        description6: 'Connect your bank',
        description7: 'Insights & reports'
    }, 
    
]


function SmallBusiness() {

    return (
      
            <div className="flex w-screen overflow-y-auto sm:justify-center">

                {data.map((datas)=>(

                    <PriceCard 
                        key={datas.name} 
                        name={datas.name}
                        price={datas.price}
                        title={datas.title}
                        discounted={datas.discounted}
                        description1={datas.description1}
                        description2={datas.description2}
                        description3={datas.description3}
                        description4={datas.description4}
                        description5={datas.description5}
                        description6={datas.description6}
                        description7={datas.description7}
                        description8={datas.description8}
                        description9={datas.description9}
                        description10={datas.description10}
                        description11={datas.description11} />
                ))}

                                </div>


    )
}

export default SmallBusiness