

export default function About() {
    return(
        <div className="flex flex-col min-h-[88dvh] font-baloo">
            <div className="flex flex-col p-2 justify-center items-center">
                <p className="text-secondary-color text-2xl">About</p>
                <h1 className="text-5xl font-medium text-logo-font-color">Oh My Snoot!</h1>
            </div>

            <div className="flex justify-center items-center w-full p-4 bg-secondary-color/50">
                <video className="rounded-3xl border-1 h-80 w-full object-cover" autoPlay muted loop >
                    <source src="../../public/images/snoot-video-one.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>

        </div>
    )
}