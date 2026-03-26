import "../styles/routes/languages.css"
import { LANGUAGES_DATA } from "../data/data.ts";

function Languages() {
    const sortedLanguages = [...LANGUAGES_DATA].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <div className="languages">
            <h1>LANGUAGES</h1>
            <p>Find a range of programming languages to learn.</p>

            <div className={"cards"}>
                {sortedLanguages.map((lang) => (
                    <div className="card" key={lang.id}>
                        <div className="card-cont">
                            <div className="header">
                                <img src={lang.icon} alt={lang.name} />
                                <h2>{lang.name}</h2>
                            </div>

                            <p className="desc">{lang.description}</p>

                            <div className="buttons">
                                <a href={lang.docsLink} target="_blank" rel="noreferrer">
                                    <div className="button">Docs</div>
                                </a>
                                <a href={lang.tutorialLink} target="_blank" rel="noreferrer">
                                    <div className="button">Tutorial</div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Languages