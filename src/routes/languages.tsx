import "../styles/routes/languages.css"

function Languages() {
    return (
        <div className="languages">
            <h1>LANGUAGES</h1>
            <p>Find a range of programming languages to learn.</p>

            <div className={"cards"}>
                <div className={"card"}>
                    <div className={"card-cont"}>
                        <div className={"header"}>
                            <img src={"https://docs.python.org/3/_static/py.svg"} alt={"python"}/>
                            <h2>Python</h2>
                        </div>
                        <p className={"desc"}>a small description about the language lol. Idk what to write here but i need to write something to make more text.</p>
                        <div className={"buttons"}>
                            <a href={"#"}>
                                <div className={"button"}>Docs </div>
                            </a>
                            <a href={"#"}>
                                <div className={"button"}>Tutorial</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"card"}>

                </div>
                <div className={"card"}>

                </div>
                <div className={"card"}>

                </div>
                <div className={"card"}>

                </div>
                <div className={"card"}>

                </div>
                <div className={"card"}>

                </div>
                <div className={"card"}>

                </div>
            </div>
        </div>
    )
}

export default Languages