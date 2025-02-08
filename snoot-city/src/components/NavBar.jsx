import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <div className="grid grid-cols-2 bg-background-primary border-b-1">
                <img className="px-4 w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12" src="../../images/snoot_logo_small_two.png" alt='' />
                <FontAwesomeIcon icon={faBars} className="justify-self-end self-center px-4 text-2xl" />
            </div>
            
            <div className="fixed h-dvh border-1 bg-background-primary w-full">
                <Link className="w-full border-b-1 absolute text-right py-2 pr-3 text-2xl" to="/about" >About</Link>
            </div>
        </>
    )
}