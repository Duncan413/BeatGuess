import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const { playerName, score } = location.state || { playerName: "Player", score: 0 };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white px-4">
      <h2 className="text-4xl font-bold mb-4">Great job, {playerName}!</h2>
      <p className="text-2xl mb-8">Your final score: <span className="font-bold">{score}</span></p>
      <button
        onClick={() => navigate("/")}
        className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition"
      >
        Play Again
      </button>
    </div>
  );
}
