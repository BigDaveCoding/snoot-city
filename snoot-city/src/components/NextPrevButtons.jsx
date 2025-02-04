import GetAuthToken from "../utilities/GetAuthToken"


export default function NextButton({data, onNext, loading}) {

    console.log(data)

    const handleNext = async (e) => {
        console.log(data.pagination._links.next.href)

        loading(true)
        
        e.preventDefault()

        if(data.pagination._links.next.href){
            try{
                const nextPageData = await GetNextPageData(`https://api.petfinder.com${data.pagination._links.next.href}`)
                console.log(nextPageData)
                onNext(nextPageData)
    
            } catch(err) {
                console.error("next page link doesnt exist")
            }
        } else {
            console.error("no next page")
        }
        
        loading(false)
        
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