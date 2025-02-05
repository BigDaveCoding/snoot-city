import GetAuthToken from "./GetAuthToken";

async function GetSighthounds(filters) {
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

    let base_url = `https://api.petfinder.com/v2/animals?type=dog&breed=${sighthoundBreeds.join(",")}`

    if(filters.gender !== "any") {
        base_url = base_url + `&gender=${filters.gender}`
    }
    if (filters.age!== "any") {
        base_url = base_url + `&age=${filters.age}`
    }

    const response = await fetch(base_url,
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
