import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

export default function Hero(){

    return (
        <>
            <div className="flex justify-center items-center">
                <img src="../../images/snoot_city.png" alt="" />
            </div>
            <div>
                <h2 className="text-center p-2 text-2xl">Find your new best friend here at Snoot City!</h2>
                <p className=" px-6 pb-2">Here at Snoot City, we are passionate about giving sighthounds the love, care, and second chances they deserve.
                     These graceful, loyal companions may be fast on their feet, but they’re even faster at stealing hearts!
                      Whether they’re retired racers or simply in need of a fresh start, we’re dedicated to helping every sighthound find a warm, loving forever home
                       Join us in making a difference—because every long nose deserves a lifetime of love!</p>
            </div>
        </>
    )

}