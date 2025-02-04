import { useState } from "react"


export default function Filters({onFilterChange}) {

    const [gender, setGender] = useState("any")

    const handleGenderChange = (e) => {
        const selectedGender = e.target.value;
        setGender(selectedGender);
        onFilterChange({ gender: selectedGender });
    };

    
    return (
        <>
            <button className="border-2 p-2">Filters</button>
            <div className="p-2">
                <label> Gender:
                    <select className="border-1 p-2 rounded" name="pet_gender" id="pet_gender" onChange={handleGenderChange} >
                        <option value="any" defaultValue>Any</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
            </div>
        </>
    )
}