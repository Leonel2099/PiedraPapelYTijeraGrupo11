import './components/Styles/Game.css';
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import Play from "./pages/Play";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Game() {
  return (
    <div className='background'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/PlayGame' element={<Play />} />
          <Route path='/AboutPage' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
