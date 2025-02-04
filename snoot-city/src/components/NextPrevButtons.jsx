import GetAuthToken from "../utilities/GetAuthToken"


export default function NextButton({data, onNext}) {

    console.log(data)

    const handleNext = async (e) => {
        console.log(data.pagination._links.next.href)
        e.preventDefault()
        const nextPageData = await GetNextPageData(`https://api.petfinder.com${data.pagination._links.next.href}`)
        console.log(nextPageData)
        onNext(nextPageData)
    }

    return (
        <>
            <button onClick={handleNext} className="border rounded bg-green-800">Next</button>
        </>
    ) 

}

async function GetNextPageData(url){
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