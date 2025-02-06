import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPaw, faArrowRight, faArrowLeft, faBone, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import GetAuthToken from "../utilities/GetAuthToken"
import PetInfoAge from "../components/PetInfoAge";



export default function PetInfo() {

    const {id} = useParams()

    console.log(id)

    const [name, setName] = useState("")
    const [photos, setPhotos] = useState([])
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    const [age, setAge] = useState("")
    const [attributes, setAttributes] = useState([])
    const [environment, setEnvironment] = useState([])
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchData(){
            const token = await GetAuthToken()
            const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json()
            console.log(data)

            // console.log(data.animal.attributes)

            setName(data.animal.name)
            setPhotos(data.animal.photos)
            setAge(data.animal.age)
            setAttributes(data.animal.attributes)
            setEnvironment(data.animal.environment)
            setTags(data.animal.tags)

        }
        fetchData()
        
    }, [id])

    const handleNextPhoto = (e) => {
        e.preventDefault()
        if(currentPhotoIndex + 1 === photos.length) {
            setCurrentPhotoIndex(0)
        } else {
            setCurrentPhotoIndex(currentPhotoIndex + 1)
        }
    }

    const handlePrevPhoto = (e) => {
        e.preventDefault()
        if(currentPhotoIndex - 1 < 0) {
            setCurrentPhotoIndex(photos.length - 1)
        } else {
            setCurrentPhotoIndex(currentPhotoIndex - 1)
        }

    }

    

    return (
        <>
            {/* <p>Pet info page</p> */}
            <div className="font-baloo bg-background-primary">
                <h1 className="text-5xl text-center text-logo-font-color py-4">Hi! I'm {name}</h1>

                <div className="flex flex-col items-center justify-center">
                
                    <div className="flex justify-center items-center w-full h-[400px] overflow-hidden mb-auto">
                        {photos[0] ? <img className="object-cover w-full h-full" src={photos[currentPhotoIndex].full} alt='' /> : <p className="text-red-600 text-2xl">No Image</p>}
                    </div>

                    {photos.length > 1 && <div>
                        <button onClick={handlePrevPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 my-2"><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button onClick={handleNextPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 my-2"><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>}
                </div>

                <div>
                    <PetInfoAge age={age} className="text-3xl text-center text-secondary-color" />
                </div>

                <div className="grid grid-cols-2">

                    {Object.entries(attributes).map(([key, value]) => {
                        return (

                            <div key={key}>
                                <p className="capitalize">{key.replace("_", " ")}:
                                    {value === true ? 
                                        <FontAwesomeIcon icon={faCheck} className="text-secondary-color text-xl pl-2" /> 
                                        : 
                                        <FontAwesomeIcon icon={faXmark} className="text-logo-font-color text-xl pl-2" />
                                    }
                                </p>  
                            </div>
                        )
                    })}
                    
                </div>


            </div>

        </>
        
    )
}