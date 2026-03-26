import "../styles/routes/home.css";

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>Learn to Code <span className="highlight">for Free.</span></h1>
                <p className="subtitle">
                    Learn the world's most popular or fastest languages, or maybe something tailored to you for FREE!
                </p>
                <a href={"/#/languages"} className="cta-button">
                    Start Learning Now
                </a>
            </section>

            <section className="features">
                <div className="feature-card">
                    <h3>30 Languages</h3>
                    <p>A vast collection of languages from Bash to Zig.</p>
                </div>
                <div className="feature-card">
                    <h3>Curated Links</h3>
                    <p>Don't waste time searching. We link directly to the best docs.</p>
                </div>
                <div className="feature-card">
                    <h3>100% Free</h3>
                    <p>Get started for absolutely free! No hidden payments (this is open-source bro).</p>
                </div>
            </section>
        </div>
    );
}

export default Home;