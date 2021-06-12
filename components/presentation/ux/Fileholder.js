import CloseIcon from '@material-ui/icons/Close';

function Fileholder({name, progress}) {
    return (
        <div className="flex flex-cols space-x-5 rounded-md shadow-lg p-4 sm:max-w-lg sm:mx-auto">
            <div className="h-12 w-12">
                <img src="https://image.apphit.com/image/filetype/jpg/jpg-logo.png"/>
            </div>
            <div className="min-w-[18rem] mr-4 space-y-1">
                <div className="flex max-w-lg justify-between">
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-gray-400 cursor-pointer">{progress}%</p>
                </div>
                {progress ? (
                    <progress id="file" max="100" value={progress}>
                    </progress>
                ): 'Incomplete'}
            </div>
            <div className="bg-blue-200 h-7 w-7 text-gray-600 rounded-full flex items-center justify-center">
                <CloseIcon fontSize="small" /></div>
        </div>
    )
}

export default Fileholder
