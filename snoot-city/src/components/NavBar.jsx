import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <nav className="font-baloo">
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}