import { useState } from "react"


export default function Filters({onFilterChange}) {

    const [filters, setFilters] = useState({ gender: "any", age: "any" });

    const handleFilterChange = (e) => {
        const { name, value } = e.target; // Get name and value from event
        const newFilters = { ...filters, [name]: value }; // Merge filters
        setFilters(newFilters);
        onFilterChange(newFilters); // Send the updated filters
    };

    
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
                    </select>
                </label>
            </div>
        </>
    )
}