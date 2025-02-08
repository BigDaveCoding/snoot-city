import GetAuthToken from "../utilities/GetAuthToken"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"


export default function NextButton({data, onNext, loading}) {

    // console.log(data)

    const handleNext = async (e) => {
        console.log(data.pagination._links.next.href)

        e.preventDefault()

        if(data.pagination._links.next.href){
            try{
                loading(true)
                const nextPageData = await GetNextPrevPageData(`https://api.petfinder.com${data.pagination._links.next.href}`)
                console.log(nextPageData)
                onNext(nextPageData)
                loading(false)

    
            } catch(err) {
                console.error(err)
            }
        } else {
            console.error("no next page")
        }
    }

    const handlePrev = async (e) => {

        console.log(data.pagination._links.previous)
        e.preventDefault()

        if (data.pagination._links.previous) {
            try{
                loading(true)
                const prevPageData = await GetNextPrevPageData(`https://api.petfinder.com${data.pagination._links.previous.href}`)
                console.log(prevPageData)
                onNext(prevPageData)
                loading(false)


            } catch(err) {
                console.log(err)

            }
        } else {
            console.error("no prevous page")
        }

    }

    return (
        <>
            <div className="grid grid-cols-2 py-2">
                <button onClick={handlePrev} className="justify-self-center text-background-primary uppercase bg-secondary-color font-medium text p-2 ml-2 rounded-3xl w-8/12 md:w-6/12">
                    <FontAwesomeIcon icon={faArrowLeft} className="pr-2" />
                    Previous
                </button>

                <button onClick={handleNext} className="justify-self-center text-background-primary uppercase bg-secondary-color font-medium text p-2 ml-2 rounded-3xl w-8/12 md:w-6/12">
                    Next 
                    <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
                </button>
                
            </div>
        </>
    ) 

}

async function GetNextPrevPageData(url){
    const token = await GetAuthToken()

    const response = await fetch(url,
        {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    })
    const data = await response.json()
    console.log(data)

    return data

}