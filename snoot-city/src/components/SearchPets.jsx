

export default function SearchPets({onSearch}) {

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch()
    }

    return (
        <>
            <input onClick={handleSearch} type="submit" value="search" className="border-2 p-2" />
        </>
    ) 

}