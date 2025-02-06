import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <div className="grid grid-cols-2 bg-background-primary border-b-1">
                <img className="px-4 " src="../../images/small_snoot_logo.png" alt='' />
                <FontAwesomeIcon icon={faBars} className="justify-self-end self-center px-4 text-2xl" />
            </div>
            {/* <nav className="font-baloo text-2xl">
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
            </nav> */}
        </>
    )
}