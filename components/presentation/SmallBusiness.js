import PriceCard from "./PriceCard"

const data = [
    { 
        name: "Simple Start",
        discounted: 22,
        price: 15,
        title: "Save 30% for 3 months",
        description1: 'Track income & expenses',
        description2: 'Send unilimited invoices & quotes',
        description3: 'Snap & Store receipts',
        description4: 'Track kilometres',
        description5: 'Send unilimited invoices & quotes',
        description6: 'Connect your bank',
        description7: 'Insights & reports'
    }, 
    { 
        name: "Essentials",
        discounted: 22,
        price: 85,
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
        name: "Premium",
        discounted: 22,
        price: 45,
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
        <div className="bg-gray-100 py-6 w-screen">
            <div className="flex justify-center space-x-4 text-gray-500 text-sm">
                <h1 className="text-center">Swipe to see plans</h1>
                <p className="animate-ping">>></p>
            </div>
            <div className="flex w-screen overflow-y-auto scrollbar-hide">

                {data.map((datas)=>(

                    <PriceCard 
                        key={datas.name} 
                        name={datas.name}
                        price={datas.price}
                        title={datas.title}
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


            <h2>All Prices incl. GST</h2>
        </div>
    )
}

export default SmallBusiness