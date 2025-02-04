import GetAuthToken from "../utilities/GetAuthToken"


export default function NextButton({data, onNext, loading}) {

    console.log(data)

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
            <button onClick={handleNext} className="border rounded bg-green-800">Next</button>
            <button onClick={handlePrev} className="border rounded bg-red-950">previous page</button>
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