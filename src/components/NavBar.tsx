import "../styles/NavBar.css"

function Navbar() {
    return (
        <nav className="nav-bar">
            <ul className="nav">
                <a href="/" className="logo-banner"></a>
                <div className="nav-content">
                    <li><a href={"/"}>Themes</a></li>
                    <li><a href={"/"}>Languages</a></li>
                    <li><a href={"/"}>About</a></li>
                    <li><a href={"/"}>T&C</a></li>
                    <input
                        type={"text"}
                        placeholder={"Search anything"}
                        className="nav-search"
                    />
                </div>
            </ul>
        </nav>
    )
}

export default Navbar