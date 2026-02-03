import {Routes, Route} from "react-router";

import './styles/App.css'
import Navbar from './components/Navbar.tsx'

import Home from "./routes/home.tsx";
import Themes from "./routes/themes.tsx";
import Languages from "./routes/languages.tsx";
import Terms from "./routes/terms.tsx";
import About from "./routes/about.tsx";

function App() {
  return (
    <>
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/themes" Component={Themes}/>
                <Route path="/languages" Component={Languages}/>
                <Route path="/terms" Component={Terms}/>
                <Route path="/about" Component={About}/>
            </Routes>
        </div>
    </>
  )
}

export default App
