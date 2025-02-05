import { useState } from "react"


export default function Filters({onFilterChange}) {

    const [filters, setFilters] = useState({ 
        gender: "any",
        age: "any",
        house_trained : false,
        good_with_dogs : false,
        good_with_cats : false,
        good_with_children : false 
    });

    // console.log(filters)
    

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
    
    return (
        <>
            {/* <button className="border-2 p-2">Filters</button> */}

            <div className="flex flex-col p-2 gap-4 bg-gray-100">

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
                        <input className="accent-green-600 cursor-pointer w-6 h-6" type="checkbox" name="house_trained" onChange={handleCheckbox} />
                    </div>

                    <label htmlFor="good_with_dogs">Good With Dogs:</label>
                    <div className="flex justify-center">
                        <input className="accent-green-600 cursor-pointer w-6 h-6" type="checkbox" name="good_with_dogs" onChange={handleCheckbox} />
                    </div>

                    <label htmlFor="good_with_cats">Good With Cats:</label>
                    <div className="flex justify-center">
                        <input className="accent-green-600 cursor-pointer w-6 h-6" type="checkbox" name="good_with_cats" onChange={handleCheckbox} />
                    </div>

                    <label htmlFor="good_with_children">Good With Children:</label>
                    <div className="flex justify-center">
                        <input className="accent-green-600 cursor-pointer w-6 h-6" type="checkbox" name="good_with_children" onChange={handleCheckbox} />
                    </div>

                </div>

            </div>
        </>
    )
}