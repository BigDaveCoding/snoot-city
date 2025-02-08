import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


export default function NavBar({setManualNavigation}) {

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
            <div className="grid grid-cols-2 bg-background-primary border-b-1 max-h-[8dvh] min-h-[8dvh] items-center z-50">
                <div>
                    <Link onClick={() => {setManualNavigation(true), navMenuOpen && handleNavMenuOpenClose()}} to="/">
                        <img className="px-4 w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12" src="../../images/snoot_logo_small_two.png" alt='' />
                    </Link>
                </div>
                <div className="flex justify-end">
                    {!navMenuOpen && <FontAwesomeIcon onClick={handleNavMenuOpenClose} icon={faBars} className="justify-self-end self-center px-4 text-2xl cursor-pointer" />}
                    {navMenuOpen && <FontAwesomeIcon onClick={handleNavMenuOpenClose} icon={faXmark} className="justify-self-end self-center px-4 text-2xl cursor-pointer" />}
                </div>
            </div>
            
            
            <div ref={menuRef} className="absolute mt-[8dvh] max-w-[1280px] bg-background-primary w-full opacity-0">
                <div className="flex flex-col">
                    <Link onClick={() => {handleNavMenuOpenClose(), setManualNavigation(true)}} className="w-full border-b-2 border-logo-font-color text-right py-2 pr-3 text-2xl" to="/" >Home</Link>
                    <Link onClick={handleNavMenuOpenClose} className="w-full border-b-2 border-secondary-color text-right py-2 pr-3 text-2xl" to="/about" >About</Link>
                    <Link onClick={handleNavMenuOpenClose} className="w-full border-b-2 border-logo-font-color text-right py-2 pr-3 text-2xl" to="/contact" >Contact</Link>

                </div>
            </div>
            
        </>
    )
}