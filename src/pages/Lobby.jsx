import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Lobby(){
    const [playerName, setPlayerName] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (playerName.trim()) {
            navigate('/game', { state: {playerName}});
        }else {
            alert('Please enter your name to start!');
        }
    };

    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from indigo-600 to-blue-700 text-white px-4">
            <h2 className="text-4xl font-bold mb-6">Welcome to BeatGuess!</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={e => setPlayerName(e.target.value)}
              className="mb-6 px-4 py-2 rounded text-gray-800 w-full max-w-xs"
            />
            <button
              onClick={handleStart}
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded hover:bg-indigo-100 transition"
            >
                Start Game
            </button>
        </div>
    );
}