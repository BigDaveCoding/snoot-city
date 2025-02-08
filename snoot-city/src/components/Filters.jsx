import { useState } from "react"
import SearchPets from "./SearchPets";


export default function Filters({onFilterChange, onSearch}) {

    const defaultFilters = {
        gender: "any",
        age: "any",
        house_trained : false,
        good_with_dogs : false,
        good_with_cats : false,
        good_with_children : false,
        name : "",
        limit : 20
    }

    const [filters, setFilters] = useState(defaultFilters);

    // console.log(filters)
    // console.log(typeof(filters.limit))
    
    const handleFilterChange = (e) => {
        const { name, value } = e.target; // Get name and value from event
        const newFilters = { ...filters, [name]: value }; // Merge filters
        setFilters(newFilters);
        onFilterChange(newFilters); // Send the updated filters
    };

    const handleCheckbox = (e) => {
        const name = e.target.name
        const boolean = e.target.checked
        const newFilters = {...filters, [name] : boolean };
        setFilters(newFilters)
        onFilterChange(newFilters)
    }

    const handleIntergerValue = (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        const newFilters = {...filters, [name] : value}
        setFilters(newFilters)
        onFilterChange(newFilters)

    }

    const handleResetFilters = () => {

        console.log("resetting filters")

        setFilters(defaultFilters)
        onFilterChange(filters)

    }
    
    return (
        <>
            {/* <button className="border-2 p-2">Filters</button> */}

            <div className="flex flex-col p-2 gap-4 bg-gray-100">

                <div className="flex items-center">
                    <label className="pr-2" htmlFor="name">Name: </label>
                    <input onChange={handleFilterChange} className="p-2 border-1 rounded w-full" type="text" name="name" value={filters.name} placeholder="Search by name..." />
                </div>

                <div className="grid grid-cols-2">

                    <div className="flex flex-row justify-evenly items-center">
                        <label className="mr-2" htmlFor="gender"> Gender:</label>
                        <select className="border-1 p-2 rounded flex-grow max-w-[50%]" name="gender" value={filters.gender} onChange={handleFilterChange} >
                            <option value="any" defaultValue>Any</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-row justify-evenly items-center">
                        <label className="mr-2" htmlFor="age"> Age: </label>
                        <select className="border-1 p-2 rounded flex-grow max-w-[50%]" name="age" value={filters.age} onChange={handleFilterChange} >
                            <option value="any" defaultValue>Any</option>
                            <option value="baby">Baby</option>
                            <option value="young">Young</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </select>
                    </div>
                    
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <label htmlFor="house_trained">House Trained:</label>
                    <div className="flex justify-center">
                        <input className="accent-secondary-color cursor-pointer w-6 h-6" type="checkbox" name="house_trained" checked={filters.house_trained} onChange={handleCheckbox} />
                    </div>

                    <label htmlFor="good_with_dogs">Good With Dogs:</label>
                    <div className="flex justify-center">
                        <input className="accent-secondary-color cursor-pointer w-6 h-6" type="checkbox" name="good_with_dogs" checked={filters.good_with_dogs} onChange={handleCheckbox} />
                    </div>

                    <label htmlFor="good_with_cats">Good With Cats:</label>
                    <div className="flex justify-center">
                        <input className="accent-secondary-color cursor-pointer w-6 h-6" type="checkbox" name="good_with_cats" checked={filters.good_with_cats} onChange={handleCheckbox} />
                    </div>

                    <label htmlFor="good_with_children">Good With Children:</label>
                    <div className="flex justify-center">
                        <input className="accent-secondary-color cursor-pointer w-6 h-6" type="checkbox" name="good_with_children" checked={filters.good_with_children} onChange={handleCheckbox} />
                    </div>

                </div>

                <div>
                    <label>Results Per Page: </label>
                    <select className="border-1 p-2 rounded" name="limit" onChange={handleIntergerValue}>
                        <option value="20" defaultValue>20</option>
                        <option value="50">50</option>
                        {/* <option value="100">100</option> */}
                    </select>
                </div>

                <div className="grid grid-cols-[2fr_1fr] bg-background-primary">
                    <SearchPets onSearch={onSearch} className="text-background-primary uppercase bg-logo-font-color p-2 ml-2 rounded-3xl w-8/12 cursor-pointer" />
                    <button onClick={handleResetFilters} className="justify-self-end border-1 p-2 rounded-3xl text-sm bg-secondary-color text-background-primary w-10/12 cursor-pointer">Reset</button>
                    
                </div>

                

            </div>
        </>
    )
}