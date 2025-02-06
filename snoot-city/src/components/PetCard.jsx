import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPaw, faArrowRight, faArrowLeft, faBone } from "@fortawesome/free-solid-svg-icons"

export default function PetCard({data}) {

    // console.log(data)

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    // console.log(currentPhoto)
    const photo_array = data.photos || []
    // console.log(photo_array)

    const handleNextPhoto = (e) => {
        e.preventDefault()
        if(currentPhotoIndex + 1 === photo_array.length) {
            setCurrentPhotoIndex(0)
        } else {
            setCurrentPhotoIndex(currentPhotoIndex + 1)
        }
    }

    const handlePrevPhoto = (e) => {
        e.preventDefault()
        if(currentPhotoIndex - 1 < 0) {
            setCurrentPhotoIndex(photo_array.length - 1)
        } else {
            setCurrentPhotoIndex(currentPhotoIndex - 1)
        }

    }



    return (
        <>
            
            <div className="flex flex-col rounded-lg p-4 bg-secondary-color/30 lg:pt-8 h-full">

                <div className="flex flex-col items-center justify-center flex-grow">
                    
                    <div className="flex justify-center items-center w-full h-[400px] overflow-hidden mb-auto">
                        {data.photos[0] ? <img className="object-cover w-full h-full" src={photo_array[currentPhotoIndex].full} alt='' /> : <p className="text-red-600 text-2xl">No Image</p>}
                    </div>

                    {photo_array.length > 1 && <div>
                        <button onClick={handlePrevPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 my-2"><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button onClick={handleNextPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 my-2"><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>}

                </div>


                <div className="mt-auto">
                    <p className = "text-3xl py-2"><FontAwesomeIcon icon={faPaw} className="text-xl" /> {data.name} </p>
                    {data.breeds.mixed && data.breeds.secondary !== null ?
                    <p className="pb-2">I am a {data.breeds.primary} / {data.breeds.secondary} </p>
                    : <p className="pb-2">I am a {data.breeds.primary} </p>
                    }
                    {data.photos.length === 0 && <p>{data.description}</p>}
                    <div className="flex pb-2">
                        <a href={data.url} target="_blank" className="underline underline-offset-2 text-logo-font-color">
                            Find Out More
                        </a>
                    </div>
                </div>

            </div>
            

        </>
    )

}