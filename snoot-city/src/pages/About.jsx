import gsap from "gsap"
import { useEffect, useRef } from "react"


export default function About() {

    const pawprintDivRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({repeat: -1})
        timeline.fromTo(pawprintDivRef.current, {
            x: "0"
        }, {
            x: "100%",
            duration: 3,
            ease: "linear",
        });
        timeline.fromTo(pawprintDivRef.current, {
            x: "-100%"
        }, {
            x: "0",
            duration: 3,
            ease: "linear",
        });
    }, [])


    return(
        <div className="flex flex-col min-h-[88dvh] font-baloo">
            <div className="flex flex-col p-2 justify-center items-center">
                <h1 className="text-secondary-color text-5xl font-medium">About Us</h1>
            </div>

            <p className="text-xl text-center pb-2">Here at <strong className="text-logo-font-color">Oh My SNOOT</strong>, we are a dedicated platform for sighthound lovers and those looking to adopt these 
                 <strong> elegant</strong>, <strong>affectionate</strong>, and <strong>quirky</strong> companions.
                </p>

            <div className="flex justify-center items-center w-full p-4 bg-secondary-color/50">
                <video className="rounded-3xl border-1 h-80 w-full object-cover" autoPlay muted loop >
                    <source src="../../public/images/snoot-video-one.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>

            <p className="text-xl text-center pt-2"><strong>Our mission</strong> is to connect rescued sighthounds with 
            <strong> loving forever homes</strong> while spreading awareness about their unique needs and lovable personalities.</p>

            <div className="relative">
                <div ref={pawprintDivRef} className="absolute bg-background-primary w-full h-full "></div>
                <img src="../../images/pawprints.png" alt='' />
            </div>

            <div className="bg-logo-font-color/20">
                <h2 className="text-4xl text-center p-2 underline underline-offset-4 text-logo-font-color">Why Sighthounds?!</h2>
                <p className="text-xl p-2">Sighthounds are known for their speed, grace, and gentle demeanor.
                    <br />Many retired racing Greyhounds and rescued sighthounds need a <strong>second chance at life</strong>,
                    and <span className="text-logo-font-color font-medium">Oh My SNOOT</span> is here to help match them with the perfect adopters.</p>
            </div>

        </div>
    )
}