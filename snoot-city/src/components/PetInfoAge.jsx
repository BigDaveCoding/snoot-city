

export default function PetInfoAge({age, className}){

    return (
        <>
            {age.toLowerCase() === "baby" && <p className={className}>I'm just a Baby Snoot</p>}
            {age.toLowerCase() === "young" && <p className={className}>I'm a Young Teen Snoot</p>}
            {age.toLowerCase() === "adult" && <p className={className}>I'm an Adult Snoot</p>}
            {age.toLowerCase() === "senior" && <p className={className}>I'm a Senior Snoot</p>}
        </>
    )

}