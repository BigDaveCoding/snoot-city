import { useEffect } from "react"
import GetSighthounds from "../utilities/petfinder-Api"


export default function PaginationInfo({data}) {

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p>Snoots Found: {data.pagination.total_count}</p>
                <div className="flex gap-4">
                    <p>Current Page: {data.pagination.current_page}</p>
                    <p>Total Pages: {data.pagination.total_pages}</p>
                </div>
            </div>
        </>
    )

}