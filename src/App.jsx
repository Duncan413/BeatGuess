import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Lobby from './pages/Lobby'
import Game from "./pages/Game";
import Results from "./pages/Results";
import './App.css'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/lobby" element={<Lobby/>} />
      <Route path="/game" element={<Game />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
