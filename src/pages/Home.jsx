import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-4"> BeatGuess</h1>
            <p className="text-xl mb-8">Test your music knowledge in the ultimate song guessing game!</p>
            <button 
              onClick={() => navigate('/lobby')}   
              className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition">
                Start Game
            </button>
        </div>
    );
}