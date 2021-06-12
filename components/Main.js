import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Typewriter from 'typewriter-effect';
import Link from 'next/link'
import Banner from './Banner';

function Main() {
    return (
        <div className="mt-7 sm:flex sm:justify-center max-w-full sm:max-w-full">
        <div className="z-1 mx-3 pt-5 pb-8 flex flex-col gap-3 text-left max-w-md ">
            <h1 className="font-bold text-2xl tracking-wide text-gray-700 lg:text-4xl">We Help Businesses Get Tax Faster And Make Accounting Easier</h1>

            <Typewriter
                options={{
                strings: ['maximising your tax return.', 'Direct electronic ATO lodgement'],
                autoStart: true,
                wrapperClassName:"text-xl lg:text-2xl",
                loop: true,
            }}
            />

            <div className="grid mt-10 sm:flex gap-8 align-left justify-center">
                 <button className="bg-blue-500 rounded-full text-gray-100 py-3 font-semibold
                 min-w-[13rem] cursor-pointer">
                        <Link href='/taxreturn'>
                    GET STARTED</Link>
                </button> 
                <div className="flex items-center justify-center gap-2 cursor-pointer lg:text-xl">
                <PlayCircleFilledIcon fontSize="large" className="text-gray-600 hover:text-[#2c6ac7] cursor-pointer"/>
                <p className="font-semibold tracking-widest text-gray-600 text-sm">See How it works?</p>
                </div>
            </div>
            
        </div>
        <Banner/>
        </div>
    )
}

export default Main
