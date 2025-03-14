
import { useEffect, useState } from "react";
import GetSighthounds from "../utilities/petfinder-Api";
import PetCard from "./PetCard";

export default function PetList({data}) {

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 p-2 px-6 lg:grid-cols-2 lg:gap-2 lg:px-2 xl:grid-cols-3 xl:gap-2">
            {data.length > 0 ? (
                data.map((pet) => <PetCard key={pet.id} data={pet} />)
            ) : (
                <p>Loading Snoots...</p>
            )}
        </div>
    )
}