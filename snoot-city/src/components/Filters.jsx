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
            <button className="border-2 p-2">Filters</button>
            <div className="p-2">
                <label> Gender:
                    <select className="border-1 p-2 rounded" name="gender" value={filters.gender} onChange={handleFilterChange} >
                        <option value="any" defaultValue>Any</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>

                <label> Age:
                    <select className="border-1 p-2 rounded" name="age" value={filters.age} onChange={handleFilterChange} >
                        <option value="any" defaultValue>Any</option>
                        <option value="baby">Baby</option>
                        <option value="young">Young</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </select>
                </label>

                <label>House Trained:
                    <input type="checkbox" name="house_trained" onChange={handleCheckbox} />
                </label>

                <label>Good With Dogs:
                    <input type="checkbox" name="good_with_dogs" onChange={handleCheckbox} />
                </label>

                <label>Good With Cats:
                    <input type="checkbox" name="good_with_cats" onChange={handleCheckbox} />
                </label>

                <label>Good With Children:
                    <input type="checkbox" name="good_with_children" onChange={handleCheckbox} />
                </label>

            </div>
        </>
    )
}