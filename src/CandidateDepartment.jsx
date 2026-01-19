import React, { useState, useEffect } from "react";
import ModalWrapper from "./ModelWrapper";
import CandidateForm from "./CandidateForm";
import RemoveCandidate from "./RemoveCandidate";
import UpdateCandidateForm from "./updateCandidateForm";

const CandidateDepartment = () => {
  const [candidateProfile, setCandidateProfile] = useState({
    name: "Unknown Candidate",
    party: "Bharatiya Janata Party",
    photo: "/pics/Admin.jpg",
    partyLogo: "/pics/BJP.jpg",
  });

  const [activeForm, setActiveForm] = useState(null);

  // ✅ Load Candidate data from localStorage (from login)
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

  const handleAdd = () => setActiveForm("add");
  const handleUpdate = () => setActiveForm("update");
  const handleRemove = () => setActiveForm("remove");
  const closeForm = () => setActiveForm(null);

  return (
    <div className="min-h-screen flex bg-black relative font-[Poppins] overflow-hidden">
      {/* ✅ Sidebar */}
      <div
        className="fixed left-0 top-0 h-screen w-72 flex flex-col bg-black z-50"
        style={{
          border: "3px solid",
          borderImage: "linear-gradient(to bottom, #22c55e, #2563eb) 1",
        }}
      >
        {/* Candidate Image */}
        <div className="flex flex-col items-center mt-12">
          <img
            src={candidateProfile.photo}
            alt="Candidate"
            className="h-32 w-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
        </div>

        {/* Candidate Info */}
        <div className="flex flex-col items-center text-center mt-4">
          <h2 className="text-[22px] font-semibold text-white tracking-wide mt-2">
            {candidateProfile.name}
          </h2>
          <div className="flex items-center flex-col mt-2">
            <img
              src={candidateProfile.partyLogo}
              alt="Party Logo"
              className="h-14 w-14 object-contain rounded-full border-2 border-white mb-2"
            />
            <p className="text-white text-[15px] font-semibold">
              {candidateProfile.party}
            </p>
          </div>
        </div>

        {/* ✅ Logout Button */}
        <button
          onClick={handleLogout}
          className="w-2/3 py-2 mb-8 bg-gradient-to-r from-gray-700 to-black text-white text-lg font-semibold rounded-lg 
             absolute bottom-8 left-1/2 transform -translate-x-1/2 
             hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md"
        >
          Logout
        </button>
      </div>

      {/* ✅ Main Section */}
      <div className="ml-72 flex-1 overflow-y-auto text-white relative">
        {/* Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "340px",
            background:
              "radial-gradient(circle, #16946880 0%, #1cb5e080 60%, transparent 100%)",
            opacity: 0.8,
            filter: "blur(32px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center pt-20 relative z-10">
          <h1 className="text-3xl font-bold mb-6">Welcome, Candidate 🗳️</h1>
          <p className="text-lg text-gray-200 mb-10">
            Manage your candidate details here.
          </p>

          <div className="flex flex-col items-center space-y-5">
            <button
              onClick={handleAdd}
              className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md 
              hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r 
              hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
            >
              Add Candidate Details
            </button>

            <button
              onClick={handleUpdate}
              className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md 
              hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r 
              hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
            >
              Update Profile
            </button>

            <button
              onClick={handleRemove}
              className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md 
              hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r 
              hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
            >
              Remove Profile
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modals */}
      {activeForm === "add" && (
        <ModalWrapper onClose={closeForm}>
          <CandidateForm onClose={closeForm} />
        </ModalWrapper>
      )}

      {activeForm === "update" && (
        <ModalWrapper onClose={closeForm}>
          <UpdateCandidateForm onClose={closeForm} />
        </ModalWrapper>
      )}

      {activeForm === "remove" && (
        <ModalWrapper onClose={closeForm}>
          <RemoveCandidate onClose={closeForm} />
        </ModalWrapper>
      )}
    </div>
  );
};

export default CandidateDepartment;
