import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThoughtBar from "./components/ThoughtBar";
import Footer from "./components/footer";
import AdminDashboard from "./components/administrator";
import VoterDepartment from "./components/voterDepartment";
import CandidateDepartment from "./components/CandidateDepartment";

// Login Popup Component - Alag banao
function LoginPopup({ showLoginPopup, loginRole, onClose, onLoginSubmit, loginData, updateLoginField, otpSent, handleOtpSend, loginError }) {
  if (!showLoginPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="rounded-xl p-6 w-96 shadow-lg bg-orange-500 text-black">
        <h2 className="text-xl font-bold mb-4">
          {loginRole === "admin" && "Administrator Login"}
          {loginRole === "voter" && "Voter Login"}
          {loginRole === "candidate" && "Candidate Login"}
        </h2>
        <form className="space-y-4" onSubmit={onLoginSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              value={loginData.username}
              onChange={(e) => updateLoginField("username", e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-1 bg-white border-gray-300"
              placeholder="Enter username"
            />
          </div>

          {/* Phone + OTP (Only for Admin) */}
          {loginRole === "admin" && !otpSent && (
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                value={loginData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value))
                    updateLoginField("phone", value);
                }}
                className="w-full border rounded-lg px-3 py-2 mt-1 bg-white border-gray-300"
                placeholder="Enter 10-digit phone number"
              />
              <button
                type="button"
                onClick={handleOtpSend}
                className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Send OTP
              </button>
            </div>
          )}

          {loginRole === "admin" && otpSent && (
            <div>
              <label className="block text-sm font-medium">Enter OTP</label>
              <input
                type="text"
                value={loginData.otp}
                onChange={(e) => updateLoginField("otp", e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-1 bg-white border-gray-300"
                placeholder="Enter OTP"
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => updateLoginField("password", e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-1 bg-white border-gray-300"
              placeholder="Enter password"
            />
          </div>

          {/* Errors */}
          {loginError && (
            <p className="text-red-500 text-sm">{loginError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-black transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// Home Component
function Home() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginRole, setLoginRole] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    phone: "",
    otp: "",
    password: "",
  });
  const [otpGenerated, setOtpGenerated] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleOtpSend = () => {
    if (!/^\d{10}$/.test(loginData.phone)) {
      setLoginError("Please enter a valid 10-digit phone number.");
      return;
    }
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpGenerated(newOtp);
    alert(`OTP sent: ${newOtp}`);
    setOtpSent(true);
    setLoginError("");
  };

  const validateLogin = () => {
    if (!loginData.username.trim()) {
      setLoginError("Username is required.");
      return false;
    }
    if (loginRole === "admin") {
      if (!otpSent) {
        setLoginError("Send OTP to verify your phone.");
        return false;
      }
      if (loginData.otp !== otpGenerated) {
        setLoginError("Invalid OTP.");
        return false;
      }
      if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(loginData.password)) {
        setLoginError(
          "Password must be at least 8 characters including numbers and symbols."
        );
        return false;
      }
    } else {
      if (!loginData.password) {
        setLoginError("Password is required.");
        return false;
      }
    }
    setLoginError("");
    return true;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateLogin()) return;
    proceedToDashboard();
  };

  const proceedToDashboard = () => {
    if (loginRole === "admin") {
      localStorage.setItem(
        "adminProfile",
        JSON.stringify({ name: loginData.username, phone: loginData.phone })
      );
      navigate("/admin");
    } else if (loginRole === "voter") {
      localStorage.setItem(
        "voterProfile",
        JSON.stringify({ name: loginData.username, photo: "/pics/voter.jpg" })
      );
      navigate("/voter");
    } else if (loginRole === "candidate") {
      localStorage.setItem(
        "candidateProfile",
        JSON.stringify({ name: loginData.username, photo: "/pics/candidate.jpg" })
      );
      navigate("/candidate");
    }
    resetLoginForm();
  };

  const updateLoginField = (field, value) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const resetLoginForm = () => {
    setShowLoginPopup(false);
    setLoginRole("");
    setLoginData({ username: "", phone: "", otp: "", password: "" });
    setOtpGenerated("");
    setOtpSent(false);
    setLoginError("");
  };

  return (
    <>
      {/* Main Content with Blur Effect */}
      <div className={`min-h-screen bg-black text-white flex flex-col ${showLoginPopup ? 'blur-sm' : ''}`}>
        {/* NAVBAR */}
        <Navbar />

        {/* AQUA + TEAL GLOW */}
        <div
          className="absolute top-[13%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[180px] opacity-40 bg-gradient-to-r from-[#B8E3E9] to-[#93B1B5]"
        />

        {/* SCROLLABLE CONTENT AREA */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Content */}
          <div className="pt-16 pb-8">
            {/* Content with Ashoka Images on Both Sides */}
            <div className="flex items-start gap-8 px-4 mb-8 mt-4">
              
              {/* Left Side - Ashoka Image */}
              <div className="flex-shrink-0 ml-7 mt-4">
                <img 
                  src="/pics/BlackAshoka.jpg" 
                  alt="Ashoka" 
                  className="w-80 h-[500px] object-contain rounded-lg shadow-2xl"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                  }}
                />
              </div>

              {/* Middle - Text Content */}
              <div className="flex-1">
                <div className="flex flex-col">
                  <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent text-left leading-tight">
                    No Voter To Be<br />Left Behind
                  </h1>
                  <p 
                    className="text-2xl mt-8 max-w-4xl leading-relaxed font-black tracking-wide"
                    style={{ 
                      fontFamily: "'Playfair Display', 'Georgia', serif",
                      background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 2px 10px rgba(199, 210, 254, 0.3)",
                      lineHeight: "1.8",
                      letterSpacing: "0.5px"
                    }}
                  >
                    ECI's ETPBMS has empowered and ensured all eligible service electors with their constitutional power to vote while performing their duty for the nation. This system ensures that the postal ballot should be transmitted to the service voter with complete documents (form 13A, 13B, 13C, and postal ballot) in a secured way.
                  </p>
                </div>
              </div>

              {/* Right Side - Ashoka Image (Same as Left) */}
              <div className="flex-shrink-0 mr-7 mt-4">
                <img 
                  src="/pics/BlackAshoka.jpg" 
                  alt="Ashoka" 
                  className="w-80 h-[500px] object-contain rounded-lg shadow-2xl"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                  }}
                />
              </div>

            </div>

            {/* Three Boxes Section */}
            <div className="flex justify-center items-stretch gap-8 mb-16 mx-4 mt-8">
              
              {/* Administrator Box */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-800 p-10 rounded-2xl shadow-2xl border border-black-900 flex-1 text-center min-h-[400px] flex flex-col">
                <div className="flex justify-center mb-8 flex-1 items-center">
                  <img 
                    src="/pics/newofficer.jpg" 
                    alt="Administrator"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <h3 className="text-3xl font-bold mb-4 text-black font-bold">Administrator</h3>
                  <p className="text-black font-bold mb-6 text-lg">
                    Manage election processes, verify documents, and oversee operations seamlessly.
                  </p>
                  <button 
                    onClick={() => {
                      setLoginRole("admin");
                      setShowLoginPopup(true);
                    }}
                    className="bg-black text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-orange-500 hover:to-black text-lg font-semibold"
                  >
                    Login as Admin
                  </button>
                </div>
              </div>

              {/* Voter Box */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-400 p-10 rounded-2xl shadow-2xl border border-gray-700 hover:border-black-500 transition-all duration-300 flex-1 text-center min-h-[400px] flex flex-col">
                <div className="flex justify-center mb-8 flex-1 items-center">
                  <img 
                    src="/pics/newvoter.jpg" 
                    alt="Voter" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <h3 className="text-3xl font-bold mb-4 text-black font-bold">Voter</h3>
                  <p className="text-black font-bold mb-6 text-lg">
                    Register to vote, check your eligibility, and participate in elections to shape the nation's future.
                  </p>
                  <button 
                    onClick={() => {
                      setLoginRole("voter");
                      setShowLoginPopup(true);
                    }}
                    className="bg-black text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green text-lg font-semibold"
                  >
                    Login as Voter
                  </button>
                </div>
              </div>

              {/* Candidate Box */}
              <div className="bg-gradient-to-br from-green-500 to-green-900 p-10 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 flex-1 text-center min-h-[400px] flex flex-col">
                <div className="flex justify-center mb-8 flex-1 items-center">
                  <img 
                    src="/pics/newcandidate.jpg" 
                    alt="Candidate"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <h3 className="text-3xl font-bold mb-4 text-black font-bold">Candidate</h3>
                  <p className="text-black font-bold mb-6 text-lg">
                    File nominations, track applications, and manage your campaign with our dedicated portal.
                  </p>
                  <button 
                    onClick={() => {
                      setLoginRole("candidate");
                      setShowLoginPopup(true);
                    }}
                    className="bg-black text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-black-500 hover:to-green text-lg font-semibold"
                  >
                    Login as Candidate
                  </button>
                </div>
              </div>
            </div>

            {/* THOUGHT BAR */}
            <div className="mt-16 mb-4 mx-4" style={{ height: "250px" }}>
              <ThoughtBar />
            </div>

            {/* FOOTER */}
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup - Alag component, Home ke bahar */}
      <LoginPopup 
        showLoginPopup={showLoginPopup}
        loginRole={loginRole}
        onClose={resetLoginForm}
        onLoginSubmit={handleLoginSubmit}
        loginData={loginData}
        updateLoginField={updateLoginField}
        otpSent={otpSent}
        handleOtpSend={handleOtpSend}
        loginError={loginError}
      />
    </>
  );
}

// Main App Component with Routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/voter" element={<VoterDepartment />} />
      <Route path="/candidate" element={<CandidateDepartment />} />
    </Routes>
  );
}

export default App;