import Image from 'next/image'
import Clips from './presentation/ux/Clips'
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Windows from './presentation/ux/Windows';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

function Banner() {
    return (
        <div className="relative my-6 text-center sm:min-w-[32rem] sm:my-3">
            <div className="absolute top-0 right-1 z-10">
            <Windows/>
            </div>
            <Image
                src="https://us.123rf.com/450wm/ariwasabi/ariwasabi1005/ariwasabi100500017/6959510-woman-student-sitting-with-laptop-isolated-on-white-background-young-multiracial-chinese-asian-cauca.jpg?ver=6"
                alt=""
                height={400}
                width={300}/>
                <div className="absolute top-5 left-5 ">
            <Clips name="Taxes" icon={<AssignmentIcon fontSize="small"/>}  color={'text-green-700'} bg={'bg-green-200'}/>
            </div>

            <div className="absolute bottom-20 right-5">
            <Clips name="Bookkeeping" icon={<ImportContactsIcon fontSize="small" />} color={'text-blue-600'} bg={'bg-blue-200'}/>
            </div>

            
            <div className="absolute bottom-20 left-5">
            <Clips name="Payroll" icon={<LocalAtmIcon fontSize="small"/>} color={'text-red-600'} bg={'bg-red-200'}/>
            </div>

            <div className="absolute bottom-40 left-5">
            <Clips name="Accounting" icon={<VerticalSplitIcon fontSize="small"/>} color={'text-blue-600'} bg={'bg-blue-200'}/>
            </div>
            
        </div>
    )
}

export default Banner
