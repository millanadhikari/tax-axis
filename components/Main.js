import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Typewriter from 'typewriter-effect';
import Link from 'next/link'

function Main() {
    return (
        <div className="z-1 pt-12 pb-8 flex flex-col gap-3 text-center ">
            <h2 className="font-semibold tracking-widest text-[#2c6ac7] lg:text-lg">TAX RETURN HELP THAT WORKS</h2>
            <h1 className="mt-2 font-bold text-3xl tracking-wide text-gray-800 lg:text-4xl">WE CAN HELP YOU IN</h1>

            <Typewriter
                options={{
                strings: ['maximising your tax return.', 'Direct electronic ATO lodgement'],
                autoStart: true,
                wrapperClassName:"text-2xl lg:text-4xl",
                loop: true,
            }}
            />

            <div className="grid mt-10 sm:flex gap-8 align-center justify-center">
                 <button className="btn ring-white px-10 py-4 rounded-r-3xl rounded-l-3xl text-sm font-medium tracking-widest animate-bounce
                    bg-[#2c6ac7] text-white ring-transparent shadow-m focus:ring-white
                    sm:hover:bg-white sm:hover:ring-2 sm:hover:ring-blue-300 sm:hover:text-blue-500">
                        <Link href='/taxreturn'>
                    GET STARTED  > </Link>
                </button> 
                <div className="flex items-center justify-center gap-2 cursor-pointer lg:text-xl">
                <PlayCircleFilledIcon fontSize="large" className="text-gray-600 hover:text-[#2c6ac7] cursor-pointer"/>
                <p className="font-semibold tracking-widest text-gray-600">See How it works?</p>
                </div>
            </div>
            
        </div>
    )
}

export default Main
