

export default function SearchPets({onSearch, className}) {

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch()
    }

    return (
        <>
            {/* <input onClick={handleSearch} type="submit" value="search" className="border-2 p-2" /> */}
            <div className="flex justify-center items-center">
                <button onClick={handleSearch} className={className}>Search Snoots!</button>
            </div>
        </>
    ) 

}