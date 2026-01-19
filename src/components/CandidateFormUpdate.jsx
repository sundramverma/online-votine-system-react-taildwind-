import React, { useState } from "react";

const UpdateCandidateForm = ({ onClose }) => {
  const [candidateData, setCandidateData] = useState({
    name: "",
    aadharNumber: "",
    otp: "",
    newPartyName: "",
    newSeatName: "",
    newPartySymbol: null,
    legalDocument: null,
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCandidateData({
      ...candidateData,
      [name]: files ? files[0] : value,
    });
  };

  const sendOtp = () => {
    if (candidateData.aadharNumber.length === 12) {
      setOtpSent(true);
      alert("OTP Sent Successfully!");
    } else {
      alert("Enter Valid Aadhar Number");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Candidate Update Request Submitted!");
    onClose();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Update Candidate Details
      </h2>

      <input
        name="name"
        placeholder="Enter Candidate Name"
        className="border p-2 w-full rounded mb-3"
        value={candidateData.name}
        onChange={handleChange}
      />

      <input
        name="aadharNumber"
        placeholder="Enter Aadhar Number"
        className="border p-2 w-full rounded mb-3"
        value={candidateData.aadharNumber}
        onChange={handleChange}
      />

      {!otpSent ? (
        <button
          onClick={sendOtp}
          className="bg-blue-600 text-white p-2 rounded w-full mb-3"
        >
          Send OTP
        </button>
      ) : (
        <input
          name="otp"
          placeholder="Enter OTP"
          className="border p-2 w-full rounded mb-3"
          value={candidateData.otp}
          onChange={handleChange}
        />
      )}

      <input
        name="newPartyName"
        placeholder="Enter New Party Name"
        className="border p-2 w-full rounded mb-3"
        value={candidateData.newPartyName}
        onChange={handleChange}
      />

      <input
        name="newSeatName"
        placeholder="Enter New Seat Name"
        className="border p-2 w-full rounded mb-3"
        value={candidateData.newSeatName}
        onChange={handleChange}
      />

      <input
        type="file"
        name="newPartySymbol"
        className="border p-2 w-full rounded mb-3"
        onChange={handleChange}
      />

      <input
        type="file"
        name="legalDocument"
        className="border p-2 w-full rounded mb-3"
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white p-2 rounded w-full mb-3"
      >
        Submit Update Request
      </button>

      <button
        onClick={onClose}
        className="bg-gray-400 p-2 rounded w-full text-white"
      >
        Close
      </button>
    </div>
  );
};

export default UpdateCandidateForm;