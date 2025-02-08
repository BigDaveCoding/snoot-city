

export default function PetInfoBreed({breed, className}) {

    console.log(breed)

    return (
        <>
            {breed.mixed && breed.secondary !== null ?
                <p className={className}>Breed: {breed.primary} / {breed.secondary}</p> 
                : 
                <p className={className}>Breed: {breed.primary}</p>
            }
            
        </>
    )

}