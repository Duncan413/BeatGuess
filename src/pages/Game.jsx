import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const location = useLocation();
  const playerName = location.state?.playerName || "Player";
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(10); // 10-second timer
  const [selectedOption, setSelectedOption] = useState(null);
  const [question, setQuestion] = useState({
    type: "song", // could be "artist"???
    audio: "🎵", // could be real clip
    options: ["Song A", "Song B", "Song C", "Song D"],
    correct: "Song B",
  });

  // Countdown timer
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Handle answer selection
  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === question.correct) {
      alert("✅ Correct!");
    } else {
      alert(`❌ Incorrect! Correct answer: ${question.correct}`);
    }
    
    setTimeout(() => {
        navigate("/results", { state: {playerName, score: option === question.correct ? 10 : 0}});
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-700 to-blue-800 text-white px-4">
      <h2 className="text-3xl font-bold mb-4">Good luck, {playerName}!</h2>
      <p className="mb-2 text-lg">Guess the song from the sound clip:</p>
      <div className="text-6xl mb-6">{question.audio}</div>

      <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={`px-4 py-3 rounded font-semibold ${
              selectedOption === option
                ? option === question.correct
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-white text-indigo-700 hover:bg-indigo-100"
            }`}
            disabled={!!selectedOption || timeLeft === 0}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="text-sm opacity-75">Time left: {timeLeft} seconds</p>
    </div>
  );
}
