import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function NavBar() {

    const [navMenuOpen, setNavMenuOpen] = useState(false)

    function handleNavMenuOpenClose(){
        setNavMenuOpen(!navMenuOpen)
    }

    return (
        <>
            <div className="grid grid-cols-2 bg-background-primary border-b-1">
                <img className="px-4 w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12" src="../../images/snoot_logo_small_two.png" alt='' />
                <FontAwesomeIcon onClick={handleNavMenuOpenClose} icon={faBars} className="justify-self-end self-center px-4 text-2xl" />
            </div>
            
            {navMenuOpen && 
            <div className="fixed bg-background-primary w-full ">
                <div className="flex flex-col">
                    <Link onClick={handleNavMenuOpenClose} className="w-full border-b-2 border-logo-font-color text-right py-2 pr-3 text-2xl" to="/" >Home</Link>
                    <Link onClick={handleNavMenuOpenClose} className="w-full border-b-2 border-secondary-color text-right py-2 pr-3 text-2xl" to="/about" >About</Link>
                </div>
            </div>
            }
        </>
    )
}