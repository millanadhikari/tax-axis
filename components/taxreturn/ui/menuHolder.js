import Menu from '../ui/menu'


function menuHolder({plans, selected, setSelected}) {
    return (
        <div className="flex flex-col mb-5">
            {plans.map((plan) => (
                <Menu selected={selected} setSelected={setSelected} plan={plan}/>
            ))}
        </div>
    )
}

export default menuHolder
