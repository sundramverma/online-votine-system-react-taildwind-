import React, { useState, useEffect } from "react";
import ModalWrapper from "./ModelWrapper";
import CandidateForm from "./CandidateForm";
import RemoveCandidate from "./RemoveCandidate";
import UpdateCandidateForm from "./updateCandidateForm";

const CandidateDepartment = () => {
  const [candidateProfile, setCandidateProfile] = useState({
    name: "Candidate Ka Naam",
    party: "Bharatiya Janata Party",
    photo: "/pics/Admin.jpg",
    partyLogo: "/pics/BJP.jpg",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("candidateProfile"));
    if (savedProfile) {
      setCandidateProfile((prev) => ({
        ...prev,
        name: savedProfile.name || prev.name,
      }));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("candidateProfile");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex bg-black relative font-[Poppins] overflow-hidden">
      <div
        className="fixed left-0 top-0 h-screen w-72 flex flex-col bg-black z-50"
        style={{
          border: "3px solid",
          borderImage: "linear-gradient(to bottom, gray, black) 1",
        }}
      >
        <div className="flex flex-col items-center mt-12">
          <img
            src={candidateProfile.photo}
            alt="Candidate"
            className="h-32 w-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
        </div>

        <div className="flex flex-col items-center text-center mt-4">
          <h2 className="text-[22px] font-semibold text-white tracking-wide mt-2">
            {candidateProfile.name}
          </h2>
          <div className="flex items-center flex-col mt-2">
            <img
              src={candidateProfile.partyLogo}
              alt="Party Logo"
              className="h-20 w-20 object-contain rounded-full border-2 border-white mb-2 mt-[55px]"
            />
            <p className="text-white text-[15px] font-semibold">
              {candidateProfile.party}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-2/3 py-2 mb-8 bg-gradient-to-r from-gray-700 to-black text-white text-lg font-semibold rounded-lg 
             absolute bottom-8 left-1/2 transform -translate-x-1/2 
             hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md"
        >
          Logout
        </button>
      </div>

      <div className="ml-72 flex-1 overflow-hidden text-white relative">
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "340px",
            background:
              "radial-gradient(circle, #55555580 0%, #00000080 60%, transparent 100%)",
            opacity: 0.8,
            filter: "blur(32px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "100px",
            right: "50px",
            bottom: "50px",
            backgroundImage: "url('/pics/powerbi.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "80%",
            opacity: 0.9,
            zIndex: 1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CandidateDepartment;