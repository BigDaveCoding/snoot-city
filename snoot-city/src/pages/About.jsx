import gsap from "gsap"
import { useEffect, useRef } from "react"
import AboutCard from "../components/AboutCard"


export default function About() {

    const pawprintDivRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({repeat: -1})
        timeline.fromTo(pawprintDivRef.current, {
            x: "0"
        }, {
            x: "100%",
            duration: 2,
            ease: "linear",
        });
        timeline.fromTo(pawprintDivRef.current, {
            x: "-100%"
        }, {
            x: "0",
            duration: 2,
            ease: "linear",
        });
    }, [])


    return(
        <div className="flex flex-col min-h-[88dvh] font-baloo px-2">
            <div className="flex flex-col p-2 justify-center items-center">
                <h1 className="text-secondary-color text-5xl font-medium">About Us</h1>
            </div>
            

            <p className="text-xl text-center pb-2"><strong className="text-logo-font-color">Oh My SNOOT </strong>
            is a dedicated platform for sighthound lovers and those looking to adopt these 
                 <strong> elegant</strong>, <strong>affectionate</strong>, and <strong>quirky</strong> companions.
            </p>

            <div className="p-2">
                <img src="../../images/stencil-snoot-bowl.png" alt='' />
            </div>

            <div>
                <h2 className="text-5xl text-center pt-2 text-secondary-color">Our Mission</h2>
                <p className="text-xl text-center pt-2"><strong>Our mission</strong> is to connect rescued sighthounds with
                <strong> loving forever homes</strong> while spreading awareness about their unique needs and <strong>lovable personalities</strong>.</p>
            </div>

            <div className="relative">
                <div ref={pawprintDivRef} className="absolute bg-background-primary w-full h-full "></div>
                <img className="px-2" src="../../images/pawprints.png" alt='' />
            </div>

            {/* <div className="bg-logo-font-color/10 border-7 border-secondary-color/20 rounded">
                <h2 className="text-4xl text-center p-2 underline underline-offset-4 text-logo-font-color">Why Sighthounds?!</h2>
                <p className="text-xl p-2 text-center">Sighthounds are known for their speed, grace, and gentle demeanor.
                    <br />Many retired racing Greyhounds and rescued sighthounds need a <strong>second chance at life</strong>,
                    and <span className="text-logo-font-color font-medium">Oh My SNOOT</span> is here to help match them with the perfect adopters.</p>
            </div> */}

            <div className="grid grid-cols-1 gap-4 p-4
             md:grid-cols-2 
             lg:grid-cols-3"
            >
                <AboutCard
                    bgImageSrc="../../images/lurcher_photo_one.jpg"
                    title="Learn About Sighthounds"
                    linkText="Find Out More"
                    linkRoute="/about/learnaboutsighthounds"
                />
                <AboutCard
                    bgImageSrc="../../images/contact-us-paw.jpg"
                    title="Contact Us"
                    linkText="Our Details"
                    linkRoute="/"
                />
                <AboutCard
                    bgImageSrc="../../images/walk-inspire.jpg"
                    title="Stories"
                    linkText="Inspirational Tales"
                    linkRoute="/"
                />
                <AboutCard
                    bgImageSrc="../../images/newsletter-image.jpg"
                    title="Newsletter"
                    linkText="Sign Up Today!"
                    linkRoute="/"
                />
                <AboutCard
                    bgImageSrc="../../images/dogs-playing.jpg"
                    title="In The Community"
                    linkText="What We Do"
                    linkRoute="/"
                />
                <AboutCard
                    bgImageSrc="../../images/team-hands.jpg"
                    title="Meet The Team"
                    linkText="Take A Look"
                    linkRoute="/"
                />
            </div>

            {/* <div className="flex justify-center items-center w-full p-4 bg-secondary-color/30">
                <video className="rounded-3xl border-1 h-80 w-full object-cover" autoPlay muted loop >
                    <source src="../../public/images/snoot-video-one.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div> */}

            

        </div>
    )
}