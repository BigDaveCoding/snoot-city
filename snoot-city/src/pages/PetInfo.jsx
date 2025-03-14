import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPaw, faArrowRight, faArrowLeft, faBone, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import GetAuthToken from "../utilities/GetAuthToken"
import PetInfoAge from "../components/PetInfoAge";
import PetInfoBreed from "../components/PetInfoBreed";



export default function PetInfo() {

    const {id} = useParams()

    console.log(id)

    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("")
    const [photos, setPhotos] = useState([])
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    const [age, setAge] = useState("")
    const [breed, setBreed] = useState([])
    const [gender, setGender] = useState([])
    const [attributes, setAttributes] = useState([])
    const [environment, setEnvironment] = useState([])
    const [tags, setTags] = useState([])

    useEffect(() => {

        window.scrollTo(0,0)
        
        async function fetchData(){
            setLoading(true)
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
            setBreed(data.animal.breeds)
            setGender(data.animal.gender)
            setAttributes(data.animal.attributes)
            setEnvironment(data.animal.environment)
            setTags(data.animal.tags)

            setLoading(false)

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
            <div className="bg-background-primary min-h-[88dvh] px-2 font-baloo">

                {loading && <p className="text-xl py-10">Loading Snoot Info! Might take a second...</p>}

                {!loading &&
                    <div className="font-baloo bg-background-primary">

                        <h1 className="text-5xl text-center text-logo-font-color py-4">Hi! I'm {name}</h1>

                        <div className="flex flex-col items-center justify-center">
                
                            <div className="flex justify-center items-center w-full h-[400px] sm:h-[500px] overflow-hidden mb-auto">
                                {photos[0] ? <img className="object-contain w-full h-full sm:w-8/12 lg:max-w-6/12 rounded" src={photos[currentPhotoIndex].full} alt='' /> : <p className="text-red-600 text-2xl">No Image</p>}
                            </div>

                            {photos.length > 1 && <div>
                                <button onClick={handlePrevPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 mt-4 mb-2 cursor-pointer"><FontAwesomeIcon icon={faArrowLeft} /></button>
                                <button onClick={handleNextPhoto} className="bg-logo-font-color text-background-primary text-2xl rounded-[50%] w-14 h-14 mx-6 mt-4 mb-2 cursor-pointer"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>}

                        </div>

                        <div>
                            <PetInfoAge age={age} className="text-3xl text-center text-secondary-color py-2" />
                        </div>

                        <div>
                            <PetInfoBreed breed={breed} className="text-xl py-2" />
                        </div>

                        <div>
                            {gender && <p className="text-xl py-2">Gender: {gender}</p>}
                        </div>

                        <div className="grid grid-cols-1 text-lg gap-2 py-2 md:grid-cols-3 border-y-2 border-secondary-color">
                            {Object.entries(attributes).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <p className="capitalize text-md sm:text-lg">{key.replace("_", " ")}:
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

                        <div className="py-2 ">
                            <p className="text-xl text-logo-font-color pb-2">I can live with...</p>
                            <div className="grid grid-cols-3">
                                {Object.entries(environment).map(([key, value], index) => {
                                    return (
                                        <div key={index}>
                                            <p className="capitalize text-lg">{key}:
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

                        {tags.length >= 1 && <div className="grid grid-cols-2 pb-2 md:grid-cols-1">
                            <p className="text-xl col-span-2 pb-2 text-secondary-color md:col-span-1"><i>'Hoomans'</i> say that I'm...</p>
                            {tags.map((tag, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-4">
                                        {index % 2 === 0 ? 
                                            <FontAwesomeIcon className="text-logo-font-color" icon={faBone} />
                                            :
                                            <FontAwesomeIcon className="text-secondary-color" icon={faBone} />
                                        }
                                        <p className="text-lg"> {tag}</p>
                                    </div>
                                )
                            })}
                        </div>}

                        <div className="py-4">
                            <Link to="/" className="bg-secondary-color p-2 rounded-2xl text-background-primary">Return To Snoots</Link>
                        </div>

                    </div>
                }

            </div>

        </>
        
    )
}