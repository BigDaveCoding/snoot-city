import GetAuthToken from "./GetAuthToken";

async function GetSighthounds() { // Default location = UK
    const token = await GetAuthToken()

    const sighthoundBreeds = [
        "Greyhound",
        "Whippet",
        "Saluki",
        "Afghan Hound",
        "Borzoi",
        "Ibizan Hound",
        "Italian Greyhound",
        "Scottish Deerhound",
        "Sloughi",
    ];

    const response = await fetch(
        `https://api.petfinder.com/v2/animals?type=dog&breed=${sighthoundBreeds.join(",")}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    const data = await response.json();
    console.log(data)
    console.log(data.animals)
    return data
}

// GetSighthounds();

export default GetSighthounds
