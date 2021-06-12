import React, { useState } from 'react'
import withAuth from '../HOC/withAuth'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Fileholder from '../components/presentation/ux/Fileholder';
import { db, storage } from '../firebase'
import firebase from 'firebase'
import path from 'path'

function uploadDocuments() {
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [image, setImage] = useState(null)
    const [notification, setNotification] = useState(false)
    const [isImage, setIsImage] = useState(false)

    const handleChange = (e) => {


        // handle file change

        if (path.extname(e.target.files[0].name) === ".png" || ".jpg") {
            setIsImage(true)
            setImage(URL.createObjectURL(e.target.files[0]))


            const reader = new FileReader();
            reader.addEventListener('load',
                () => {
                    //convert image file to base 64 string
                    if (isImage) {
                        setImage(reader.result)
                    }
                },
                false);

            if (file) {
                reader.readAsDataURL(file)
            }
        } 
        else {
            setImage(null)
            setIsImage(false)
        }



        setFile(e.target.files[0]);

        console.log(URL.createObjectURL(e.target.files[0]))



    }
    console.log(isImage)
    const handleClick = (e) => {
        const uploadTask = storage.ref(`/documents/${file.name}`).put(file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                //when any progress is made... 
                let percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log(percent + "% done");
                setProgress(percent)
            },
            console.error,
            () => {
                //when upload is complete... do this...
                storage.ref(`/documents/${file.name}`)
                    .getDownloadURL()
                    .then((url) => {
                        setFile(null);
                        setImage(null)

                        setIsImage(false)
                        setProgress(null)
                        console.log("Uploaded url: ", url)
                    })
            });

    }
    return (
        <div className="h-screen text-center sm:max-w-lg sm:mx-auto">
            <div className="my-5 flex flex-col space-y-2">
                <h1 className="text-2xl font-semibold text-gray-500">UPLOAD FILES</h1>
                <p className="text-gray-500 text-md">Upload documents you want to share with us.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 inset-2 shadow-lg bg-blue-50 border-2
             border-dashed border-blue-400 rounded-xl mx-5 p-5
             max-w-lg sm:mx-auto">

                <CloudUploadIcon fontSize="large" className="text-blue-400" />
                <h2 className="text-lg font-semibold text-blue-400">Drag & Drop your files here</h2>
                <p className="text-lg font-semibold text-blue-300">OR</p>

                <div className="relative w-full flex items-center justify-center cursor-pointer">
                    <div className="absolute flex flex-col items-center"> <i className="text-blue-700"></i> <span className="btn text-gray-700 font-sm">Choose you files here</span> </div>
                    <input onChange={handleChange} className="h-full pl-20 mx-auto opacity-0" type="file" />

                </div>


                {image ? <img src={image} width="200" height="250" className="object-cover" />
                : null}
                <div className="my-3">
                    {!isImage && (<>{file?.name}</>)}
                </div>
                <button disabled={!file} onClick={handleClick} className="btn">Upload</button>
            </div>
            <div className="text-left m-5 mt-8 space-y-3">
                <h2 className="font-semibold text-gray-600">Uploaded files</h2>
                {file?.name ? <Fileholder name={file?.name} progress={progress} /> : null}

            </div>
        </div>
    )
}

export default withAuth(uploadDocuments)
