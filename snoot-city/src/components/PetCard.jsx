import { useState } from "react"

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
            
            <div className="border-1 rounded-lg p-2">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center max-w-[400px] max-h-[400px] overflow-hidden">
                        {data.photos[0] ? <img className="object-contain w-full h-full min-h-[400px]" src={photo_array[currentPhotoIndex].full} alt='' /> : <p className="text-red-600 text-2xl">No Image</p>}
                    </div>
                    {photo_array.length > 1 && <div>
                        <button onClick={handleNextPhoto} className="border-1 p-2 mx-2 my-2">next</button>
                        <button onClick={handlePrevPhoto} className="border-1 p-2 mx-2 my-2">prev</button>
                    </div>}
                </div>
                <p className = "text-3xl">{data.name}</p>
                <p>My Age: {data.age}</p>

                {data.breeds.mixed && data.breeds.secondary !== null ? <p>I am a {data.breeds.primary} / {data.breeds.secondary}</p> : <p>I am a {data.breeds.primary}</p>}

                {data.photos.length === 0 && <p>{data.description}</p>}

                <p>{data.status}</p>
                
                


                <div className="border-y-1">
                    <h2>Want to meet me?!</h2>
                    {data.contact.address.city && <p>City: {data.contact.address.city}</p>}
                    {data.contact.address.state && <p>State: {data.contact.address.state}</p>}
                    {data.contact.address.postcode && <p>Postcode: {data.contact.address.postcode}</p>}

                </div>

                <a href={data.url} target="_blank" className="underline underline-offset-2 text-blue-800">Find Out More</a>

            </div>
            

        </>
    )

}