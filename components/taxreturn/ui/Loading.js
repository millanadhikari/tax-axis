import BounceLoader from "react-spinners/BounceLoader";


function Loading() {


    return (
        <div className="flex justify-center mt-10 mx-auto">
            <BounceLoader size={150} color={'#326abe'} />

        </div>
    )
}

export default Loading
