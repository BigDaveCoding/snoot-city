import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

export default function Hero(){

    return (
        <>
            
            <div className="flex justify-center items-center">
                <img className="" src="../../images/oh_my_snoot_logo.png" alt="" />
            </div>

            <div>
                <h2 className="text-center p-2 text-4xl">FIND YOUR NEW BEST FRIEND</h2>

                <img className="p-2" src="../../images/snoot_banner_frames.png" alt='' />

                <p className="px-6 py-4 text-2xl">Here at <strong className="text-logo-font-color">Oh My Snoot</strong>, we are passionate about giving sighthounds the love, care, and second chances they deserve.
                     </p>
            </div>
        </>
    )

}