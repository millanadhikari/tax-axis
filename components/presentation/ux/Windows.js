import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Windows() {
    return (
        <div className="h-[10rem] w-[10rem] sm:h-[15rem] sm:w-[12rem] rounded-lg shadow-xl bg-white">
            <div className="flex space-x-2 bg-gray-800 py-3 pl-2 rounded-t-lg">
                <div className="rounded-full bg-blue-700 h-2 w-2"></div>
                <div className="rounded-full bg-blue-400 h-2 w-2"></div>
                <d2v className="rounded-full bg-gray-100 h-2 w-2"></d2v>
            </div>
            <div className="flex items-center mx-4 my-4 justify-between">
                <h1 className="text-xl font-bold ">BAS</h1>
                <div className="text-green-600"> <CheckCircleOutlineIcon /></div>

            </div>
            <div className="flex flex-col space-y-3 ml-4 z-10">
                <div className="bg-gray-300 h-3 w-[8rem] rounded-full"></div>
                <div className="bg-gray-300 h-3 w-[6rem] rounded-full"></div>
            </div>

            <div className="hidden sm:flex flex-col space-y-1 ml-4 mt-5">
                <div className="bg-gray-200 h-3 w-[7rem] rounded-full"></div>
                <div className="bg-gray-200 h-3 w-[6rem] rounded-full"></div>
                <div className="bg-gray-200 h-3 w-[4rem] rounded-full"></div>
                <div className="bg-gray-200 h-3 w-[3rem] rounded-full"></div>
                <div className="bg-gray-200 h-3 w-[5rem] rounded-full"></div>
            </div>
        </div>
    )
}

export default Windows
