


function Header() {
    return (
        <div className="flex items-center justify-between p-4 bg-[#464775] ">
            <div className="flex text-white">
            <h2>Logo</h2>
            <h2>TAX-AXIS</h2>
            </div>
            <input className="hidden h-9 ml-10 mr-10 pl-3 flex-grow rounded-md focus:outline-none sm:block" placeholder="Search"></input>
            <div className=" h-10 w-10 rounded-full bg-pink-200 ">
                
            </div>
            
        </div>
    )
}

export default Header
