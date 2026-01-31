import "./NavBar.css"
import logo_text from "../assets/codepedia_logotext.svg"
import toggle_light_mode from "../assets/icons/sun-medium.svg"

function NavBar() {
    return (
        <div className={"nav-bar"}>
            <img src={logo_text} className={"logo_text"} alt={"codepedia"}></img>
            {/*<span className={"logo-text"}>CODEPEDIA</span>*/}
            <input
                type="text"
                className={"nav-search"}
                placeholder={"Search anything"}
            />
            <img src={toggle_light_mode} className={"toggle_light_mode"} alt={"Toggle Light Mode"}></img>
            <span className={"nav-buttons"}>HOME</span>
            <span className={"nav-buttons"}>FRONTEND</span>
            <span className={"nav-buttons"}>BACKEND</span>
            <span className={"nav-buttons"}>ABOUT</span>
        </div>
    )
}

export default NavBar