import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

export default function Hero(){

    return (
        <>
            
            <div className="flex justify-center items-center">
                <img className="" src="../../images/oh_my_snoot_logo.png" alt="" />
            </div>

            <div>
                <h2 className="text-center p-2 text-4xl text-secondary-color font-bold">FIND YOUR NEW BEST FRIEND</h2>

                <div className="flex justify-center items-center px-2">
                    <img className="p-2 hidden md:block w-full" src="../../images/snoot_banner_frames.png" alt='' />
                    <img className="w-full md:hidden" src="../../images/snoot_banner_425px.png" alt="" />
                </div>

                <p className="text-center px-4 py-4 text-2xl">Here at <strong className="text-logo-font-color">Oh My Snoot</strong>, we are passionate about giving sighthounds the love, care, and second chances they deserve.
                     </p>
            </div>
        </>
    )

}