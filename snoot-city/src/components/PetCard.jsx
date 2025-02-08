import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPaw, faArrowRight, faArrowLeft, faBone } from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from "react-router-dom";

export default function PetCard({data}) {

    const id = data.id

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
            
            <div className="flex flex-col w-full rounded-lg p-4 bg-secondary-color/20 lg:pt-8 h-full sm:w-8/12 lg:w-11/12 justify-self-center xl:w-full">

                <div className="flex flex-col items-center justify-center flex-grow">
                    
                    <div className="flex justify-center items-center w-full h-[400px] md:h-[500px] overflow-hidden mb-auto">
                        {data.photos[0] ? <img className="object-cover w-full h-full rounded" src={photo_array[currentPhotoIndex].full} alt='' /> : <p className="text-red-600 text-2xl">No Image</p>}
                    </div>

                    {photo_array.length > 1 && <div>
                        <button onClick={handlePrevPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 mt-4 cursor-pointer"><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button onClick={handleNextPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 mt-4 cursor-pointer"><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>}

                </div>


                <div className="mt-auto">
                    <p className = "text-3xl py-2"><FontAwesomeIcon icon={faPaw} className="text-xl" /> {data.name} </p>
                    {data.breeds.mixed && data.breeds.secondary !== null ?
                    <p className="pb-2 text-xl">I am a {data.breeds.primary} / {data.breeds.secondary} </p>
                    : <p className="pb-2 text-xl">I am a {data.breeds.primary} </p>
                    }
                    {data.photos.length === 0 && <p>{data.description}</p>}
                    <div className="flex pb-2">
                        {/* <a href={data.url} target="_blank" className="underline underline-offset-2 text-logo-font-color">
                            Find Out More
                        </a> */}
                        <Link to={`/petinfo/${id}`} className="underline underline-offset-4 text-logo-font-color" >Find Out More</Link>
                    </div>
                </div>

            </div>
            

        </>
    )

}