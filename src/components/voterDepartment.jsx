import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function VoterDepartment() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [confirmVote, setConfirmVote] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [voterProfile, setVoterProfile] = useState({
    name: "Voter",
  photo: `${import.meta.env.BASE_URL}pics/Admin.jpg`,


  });

  const [timeLeft, setTimeLeft] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("voterProfile"));
    if (savedProfile) setVoterProfile(savedProfile);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

 const candidates = [
  { id: 1, name: "Bharatiya Janata Party", symbol: `${import.meta.env.BASE_URL}pics/BJP.jpg` },
  { id: 2, name: "Indian National Congress", symbol: `${import.meta.env.BASE_URL}pics/CONG.jpg` },
  { id: 3, name: "Bahujan Samaj Party", symbol: `${import.meta.env.BASE_URL}pics/BSP.jpg` },
  { id: 4, name: "Samajwadi Party", symbol: `${import.meta.env.BASE_URL}pics/SP.jpg` },
  { id: 5, name: "NOTA", symbol: `${import.meta.env.BASE_URL}pics/NOTA.jpg` },
];


  const handleVote = (id) => {
    setSelectedCandidate(id);
    setConfirmVote(true);
  };

  const handleConfirmVote = () => {
    setIsVoted(true);
    setConfirmVote(false);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
      navigate("/");
    }, 10000);
  };

  const selectedParty = candidates.find((c) => c.id === selectedCandidate);

  return (
    <div
      className="min-h-screen flex flex-col bg-gray-900 text-white overflow-hidden"
      style={{ fontFamily: "Poppins, Arial, sans-serif" }}
    >
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="flex items-center justify-between bg-black px-7 py-4 shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src={voterProfile.photo}
            alt="Voter"
            className="w-14 h-14 rounded-full border-2 border-white object-cover"
          />
          <h2 className="text-xl font-semibold text-white">{voterProfile.name}</h2>
        </div>

        <div className="text-right">
          <h3 className="text-lg font-bold text-yellow-400">Time Remaining</h3>
          <p
            className={`text-2xl font-extrabold ${
              timeLeft <= 10 ? "text-red-500 animate-pulse" : "text-green-400"
            }`}
          >
            {formatTime(timeLeft)}
          </p>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-[50%] bg-gray-800 flex flex-col items-center justify-center border-r-4 border-gray-700">
          <h2 className="text-4xl font-bold mb-10 text-green-400 flex items-center gap-3 mt-[15px]">
            EVM MACHINE
          </h2>

          <div className="w-[700px] h-[680px] bg-gray-700 rounded-3xl shadow-2xl p-10 flex flex-col justify-evenly">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className={`group flex items-center justify-between px-6 py-5 rounded-2xl transition-all duration-300 transform ${
                  selectedCandidate === candidate.id
                    ? "bg-black scale-[1.02]"
                    : "bg-gray-800 hover:bg-black hover:scale-105"
                }`}
              >
                <div className="flex items-center space-x-6 cursor-pointer">
                  <img
                    src={candidate.symbol}
                    alt={candidate.name}
                    className="w-20 h-20 object-contain rounded-xl bg-white p-2 shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="font-semibold text-white text-lg leading-tight tracking-wide group-hover:text-green-400 transition-colors duration-300">
                    {candidate.name}
                  </p>
                </div>

                <button
                  onClick={() => handleVote(candidate.id)}
                  disabled={isVoted}
                  className={`ml-6 px-8 py-4 w-32 rounded-lg font-semibold text-base text-white bg-black 
                    hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500
                    transition-all duration-300 shadow-md ${
                      selectedCandidate === candidate.id
                        ? "text-green-400 border border-green-400"
                        : ""
                    }`}
                >
                  {selectedCandidate === candidate.id ? "✓" : "VOTE"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative px-6 text-center">
          {!confirmVote && !isVoted && (
            <h1 className="text-4xl font-bold text-white">
              <span className="text-yellow-400 text-2xl font-semibold">
                कृपया वोट डालने के लिए मशीन का उपयोग करें →
              </span>
            </h1>
          )}

          {confirmVote && selectedParty && (
            <div className="text-center">
              <img
                src={selectedParty.symbol}
                alt={selectedParty.name}
                className="w-40 h-40 mx-auto mb-5 rounded-full border-4 border-white p-3 bg-white object-contain"
              />
              <h1 className="text-3xl font-bold text-green-400 mb-3">
                {voterProfile.name} जी,
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                क्या आप अपना वोट <br />
                <span className="text-yellow-400 font-bold">
                  {selectedParty.name}
                </span>{" "}
                को देना चाहते हैं?
              </p>
              <button
                onClick={handleConfirmVote}
                className="px-10 py-4 rounded-xl font-bold text-lg text-white bg-black 
                  hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 
                  transition-all duration-300 shadow-md"
              >
                पुष्टि करें (Confirm)
              </button>
            </div>
          )}

          {isVoted && selectedParty && (
            <div className="text-center">
              <img
                src={selectedParty.symbol}
                alt={selectedParty.name}
                className="w-36 h-36 mx-auto mb-4 rounded-full border-4 border-green-400 p-3 bg-white object-contain"
              />
              <h1 className="text-4xl font-bold text-green-400 mb-3">
                धन्यवाद! 🙏
              </h1>
              <p className="text-xl text-gray-200">
                {voterProfile.name} जी, आपका वोट{" "}
                <span className="text-yellow-400 font-bold">
                  {selectedParty.name}
                </span>{" "}
                को दिया गया है।
              </p>
            </div>
          )}

          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/10 to-blue-600/10 blur-2xl" />
        </div>
      </div>
    </div>
  );
}

export default VoterDepartment;