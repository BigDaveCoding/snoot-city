import { Link } from "react-router-dom";

export default function AboutCard({bgImageSrc = "", title = "", linkText = "", linkRoute = ""}) {

    return (
        <>
            <div className="relative flex flex-col h-[300px] w-full border-6 border-logo-font-color/50">
                <img className="absolute object cover h-full w-full " src={bgImageSrc} alt='' />
                {/* overlay */}
                <div className="absolute bg-black/20 w-full h-full"></div>

                <div className="w-full h-full flex flex-col justify-between items-center py-4 z-10">
                    <h4 className="text-2xl text-center mx-4 text-white bg-logo-font-color/50 rounded-2xl p-2 mb-4">{title}</h4>
                    <Link className="cursor-pointer border-1 text-white bg-secondary-color p-2 rounded-2xl" to={linkRoute} >
                        {linkText}
                    </Link>
                </div>

            </div>
        </>
    )

}