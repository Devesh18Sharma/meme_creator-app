import {Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from "./pages/home";
import Editpage from "./pages/Edit";

function App() {
  return (
    <div className="Container">
      <h1>Meme Creater</h1>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/edit" element={<Editpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
