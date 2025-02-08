import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


export default function NavBar() {

    const [navMenuOpen, setNavMenuOpen] = useState(false)
    const menuRef = useRef(null)

    function handleNavMenuOpenClose(){
        setNavMenuOpen(!navMenuOpen);
    }

    useEffect(() => {
        if (navMenuOpen){
            gsap.to(menuRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to(menuRef.current, {
                y: "-200%",
                opacity: 0,
                duration: 0.5,
                ease: "power3.in"
            });
        };
    }, [navMenuOpen])

    return (
        <>
            <div className="grid grid-cols-2 bg-background-primary border-b-1">
                <img className="px-4 w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12" src="../../images/snoot_logo_small_two.png" alt='' />
                <div className="flex justify-end">
                    {!navMenuOpen && <FontAwesomeIcon onClick={handleNavMenuOpenClose} icon={faBars} className="justify-self-end self-center px-4 text-2xl" />}
                    {navMenuOpen && <FontAwesomeIcon onClick={handleNavMenuOpenClose} icon={faXmark} className="justify-self-end self-center px-4 text-2xl" />}
                </div>
            </div>
            
            
            <div ref={menuRef} className="absolute bg-background-primary w-full opacity-0">
                <div className="flex flex-col">
                    <Link onClick={handleNavMenuOpenClose} className="w-full border-b-2 border-logo-font-color text-right py-2 pr-3 text-2xl" to="/" >Home</Link>
                    <Link onClick={handleNavMenuOpenClose} className="w-full border-b-2 border-secondary-color text-right py-2 pr-3 text-2xl" to="/about" >About</Link>
                </div>
            </div>
            
        </>
    )
}