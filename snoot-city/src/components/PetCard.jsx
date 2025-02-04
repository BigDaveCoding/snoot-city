

export default function PetCard({data}) {

    console.log(data)

    return (
        <>
            {data.photos[0] && <img src={data.photos[0].full} alt='' />}
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.description}</p>
            <p>{data.status}</p>
            <p>{data.coat}</p>
            <a href={data.url} target="_blank">Link</a>

        </>
    )

}