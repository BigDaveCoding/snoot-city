
import { useEffect, useState } from "react";
import GetSighthounds from "../utilities/petfinder-Api";
import PetCard from "./PetCard";

export default function PetList({data}) {

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-2">
            {data.length > 0 ? (
                data.map((pet) => <PetCard key={pet.id} data={pet} />)
            ) : (
                <p>Loading Snoots...</p>
            )}
        </div>
    )
}