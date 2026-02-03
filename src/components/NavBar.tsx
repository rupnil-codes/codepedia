import "../styles/NavBar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="nav">
                    <Link to="/" className="logo-banner"></Link>
                    <div className="nav-content">
                        <li><Link to={"/themes"} className={"link"}>Themes</Link></li>
                        <li><Link to={"/languages"} className={"link"}>Languages</Link></li>
                        <li><Link to={"/about"} className={"link"}>About</Link></li>
                        <li><Link to={"/terms"} className={"link"}>T&C</Link></li>
                        <input
                            type={"text"}
                            placeholder={"Search anything"}
                            className="nav-search"
                        />
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar