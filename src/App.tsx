import './styles/App.css'
import Navbar from './components/Navbar.tsx'
import Sidebar from "./components/Sidebar.tsx";

function App() {
  return (
    <>
        <div className="app">
            <Navbar/>
            <div className="app-body">
                <Sidebar/>
            </div>
        </div>
    </>
  )
}

export default App
