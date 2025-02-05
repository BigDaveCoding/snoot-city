

export default function SearchPets({onSearch}) {

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch()
    }

    return (
        <>
            {/* <input onClick={handleSearch} type="submit" value="search" className="border-2 p-2" /> */}
            <div className="flex justify-center items-center">
                <button onClick={handleSearch} className=" text-background-primary uppercase bg-logo-font-color font-medium text-xl p-2 ml-2 rounded-3xl w-8/12">Search Snoots!</button>
            </div>
        </>
    ) 

}