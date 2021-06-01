import PriceCard from "./PriceCard"

const data = [
    { 
        name: "Individual Tax",
        discounted: 20,
        price: '$60',
        title: "2010 to 2021 Financial Year",
        description1: 'Email Support',
        description2: 'Unilimited number of Income (Except for Rental Property Income, Sales and ABN Income)',
        description3: 'Unlimited Number of Deductions',
        description4: 'Unilimited number of Share Sales',
        description5: 'Unilimited number of Investment Income',
        description6: 'Unilimited Number of Centrelink Payment',
        description7: 'Unilimited Number of Tax Offset'
    }, 
    { 
        name: "Sole Trader",
        discounted: 80,
        price: '$150',
        title: "Save 30% for 3 months",
        description1: 'Email Support',
        description2: 'Unilimited number of Income (Except for Rental Property Income, Sales and ABN Income)',
        description3: 'Unlimited Number of Deductions',
        description4: 'Unilimited number of Share Sales',
        description5: 'Unilimited number of Investment Income',
        description6: 'Unilimited Number of Centrelink Payment',
        description7: 'Unilimited Number of Tax Offset'

    }, 
    { 
        name: "Investment",
        discounted: 60,
        price: '$200',
        title: "Save 30% for 3 months",
        description1: 'Email Support',
        description2: 'Unilimited number of Income (Except for Rental Property Income, Sales and ABN Income)',
        description3: 'Unlimited Number of Deductions',
        description4: 'Unilimited number of Share Sales',
        description5: 'Unilimited number of Investment Income',
        description6: 'Unilimited Number of Centrelink Payment',
        description7: 'Unilimited Number of Tax Offset'
    }, 
    
]

function SelfEmployed() {
    return (
        <div className="flex w-screen overflow-y-auto scrollbar-hide sm:justify-center">
            {data.map((datas) => (
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

export default SelfEmployed
