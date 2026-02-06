import "../styles/components/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="nav">
                    <Link to="/" className="logo-banner"></Link>
                    <div className="nav-content">
                        <li><Link to={"/languages"} className={"link"}>Languages</Link></li>
                        <li><Link to={"/about"} className={"link"}>About</Link></li>
                        <li><a
                            href={"https://hackclub.enterprise.slack.com/archives/C0ACRABD8P5"}
                            className={"link"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >Community</a></li>
                        <li><a href="https://hackclub.com/">
                            <img
                            className="hackclub"
                            src="https://assets.hackclub.com/flag-orpheus-left.svg"
                            alt="Hack Club"/>
                        </a></li>
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