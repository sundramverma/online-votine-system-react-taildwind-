import React, { useState, useEffect } from "react";
import CandidateForm from "./CandidateForm";
import VoterForm from "./VoterForm";
import RemoveCandidate from "./RemoveCandidate";
import UpdateCandidateForm from "./updateCandidateForm";
import ModalWrapper from "./ModelWrapper";
import RemoveVoter from "./RemoveVoter";
import UpdateVoter from "./updateVoter";

const AdminDashboard = () => {
  const [adminProfile, setAdminProfile] = useState({
    name: "Unknown",
    gender: "Male",
    phone: "9876543210",
    photo: "/pics/Admin.jpg",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("adminProfile"));
    if (savedProfile) {
      setAdminProfile((prev) => ({
        ...prev,
        name: savedProfile.name || prev.name,
        phone: savedProfile.phone || prev.phone,
      }));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminProfile");
    window.location.href = "/";
  };

  const [activeForm, setActiveForm] = useState(null);

  const defaultCandidateImage = "/pics/candidate.jpg";
  const defaultVoterImage = "/pics/voter.jpg";

  const handleCandidateAdd = () => setActiveForm("candidate");
  const handleCandidateRemove = () => setActiveForm("removeCandidate");
  const handleCandidateUpdate = () => setActiveForm("updateCandidate");
  const handleVoterAdd = () => setActiveForm("voter");
  const handleVoterRemove = () => setActiveForm("removeVoter");
  const handleVoterUpdate = () => setActiveForm("updateVoter");
  const closeForm = () => setActiveForm(null);

  return (
    <div className="min-h-screen flex bg-black relative font-[Poppins] overflow-hidden">
      <div
        className="fixed left-0 top-0 h-screen w-72 flex flex-col bg-black z-50"
        style={{
          border: "3px solid",
          borderImage: "linear-gradient(to bottom, #22c55e, #2563eb) 1",
        }}
      >
        <div className="flex flex-col items-center mt-12">
          <img
            src={adminProfile.photo}
            alt="Admin"
            className="h-32 w-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
        </div>

        <div className="flex flex-col items-center text-center mt-4">
          <h2 className="text-[22px] font-semibold text-white tracking-wide mt-2">
            {adminProfile.name}
          </h2>
          <p className="text-white text-[15px] mt-1">{adminProfile.gender}</p>
          <p className="text-white text-[14px] opacity-90">
            {adminProfile.phone}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-2/3 py-2 mb-8 bg-white text-black text-lg font-semibold rounded-lg absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:scale-110 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-md"
        >
          Logout
        </button>
      </div>

      <div
        className="ml-72 flex-1 overflow-y-auto"
        style={{
          height: "100vh",
          scrollBehavior: "smooth",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "340px",
            background: "radial-gradient(circle, #16946880 0%, #1cb5e080 60%, transparent 100%)",
            opacity: 0.8,
            filter: "blur(32px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="flex flex-row justify-around items-start pt-10 pb-[550px] relative z-10">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl mb-3 text-gray-100 tracking-wider mt-[55px]">
              FOR CANDIDATE
            </span>
            <img
              src={defaultCandidateImage}
              alt="Candidate"
              className="h-36 w-36 cursor-pointer rounded-full border-4 border-black object-cover mb-2 hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col items-center space-y-4 w-full mt-10">
              <button
                onClick={handleCandidateAdd}
                className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                Add Candidate
              </button>

              <button
                onClick={handleCandidateRemove}
                className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                Remove Candidate
              </button>

              <button
                onClick={handleCandidateUpdate}
                className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                Update Candidate
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl mb-3 text-gray-100 tracking-wider mt-[55px]">
              FOR VOTER
            </span>
            <img
              src={defaultVoterImage}
              alt="Voter"
              className="h-36 w-36 cursor-pointer rounded-full border-4 border-black object-cover mb-2 hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col items-center space-y-4 w-full mt-10">
              <button
                onClick={handleVoterAdd}
                className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                Add Voter
              </button>

              <button
                onClick={handleVoterRemove}
                className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                Remove Voter
              </button>

              <button
                onClick={handleVoterUpdate}
                className="bg-white text-black font-semibold px-6 py-2 rounded-3xl w-60 shadow-md hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                Update Voter Details
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "-350px",
            marginLeft: "40px",
            width: "calc(100% - 100px)",
            height: "1000px",
            backgroundImage: "url('/pics/powerbi.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "contain",
            zIndex: 1,
            opacity: 0.98,
          }}
        ></div>
      </div>

      {activeForm === "candidate" && (
        <ModalWrapper onClose={closeForm}>
          <CandidateForm onClose={closeForm} />
        </ModalWrapper>
      )}

      {activeForm === "voter" && (
        <ModalWrapper onClose={closeForm}>
          <VoterForm onClose={closeForm} />
        </ModalWrapper>
      )}

      {activeForm === "removeCandidate" && (
        <ModalWrapper onClose={closeForm}>
          <RemoveCandidate onClose={closeForm} />
        </ModalWrapper>
      )}

      {activeForm === "updateCandidate" && (
        <ModalWrapper onClose={closeForm}>
          <UpdateCandidateForm onClose={closeForm} />
        </ModalWrapper>
      )}

      {activeForm === "removeVoter" && (
        <ModalWrapper onClose={closeForm}>
          <RemoveVoter onClose={closeForm} />
        </ModalWrapper>
      )}

      {activeForm === "updateVoter" && (
        <ModalWrapper onClose={closeForm}>
          <UpdateVoter onClose={closeForm} />
        </ModalWrapper>
      )}
    </div>
  );
};

export default AdminDashboard;