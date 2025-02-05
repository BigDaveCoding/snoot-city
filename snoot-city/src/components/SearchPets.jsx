

export default function SearchPets({onSearch}) {

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch()
    }

    return (
        <>
            {/* <input onClick={handleSearch} type="submit" value="search" className="border-2 p-2" /> */}
            <button onClick={handleSearch} className="border-1 p-2 ml-2 rounded">Search Snoots!</button>
        </>
    ) 

}