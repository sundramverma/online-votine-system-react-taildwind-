import React, { useState } from "react";

const UpdateVoter = ({ onClose }) => {
  const [voterData, setVoterData] = useState({
    name: "",
    aadharNumber: "",
    otp: "",
    updatedName: "",
    updatedAddress: "",
    updatedAge: "",
    updatedPhoto: null,
    legalDocument: null,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setVoterData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSendOtp = () => {
    if (voterData.aadharNumber.length === 12) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp);
      setOtpSent(true);
      alert(`OTP sent successfully! Your OTP is: ${otp}`);
    } else {
      alert("Please enter a valid 12-digit Aadhaar number");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otpSent) {
      alert("Please verify OTP before submitting!");
      return;
    }

    if (voterData.otp !== generatedOtp) {
      alert("Invalid OTP! Please try again.");
      return;
    }

    if (!voterData.legalDocument) {
      alert("Please upload a legal document proof!");
      return;
    }

    console.log("Updated Voter Data:", voterData);
    alert("Voter details updated successfully!");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "450px",
          background: "linear-gradient(160deg, #22c55e, #2563eb)",
          borderRadius: "16px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
          padding: "30px",
          color: "black",
          fontFamily: "Poppins, sans-serif",
          animation: "fadeIn 0.3s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Update Voter Details
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label style={labelStyle}>Voter Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter current voter name"
            value={voterData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Aadhaar Card Number</label>
          <input
            type="text"
            name="aadharNumber"
            placeholder="Enter 12-digit Aadhaar"
            maxLength={12}
            value={voterData.aadharNumber}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>OTP Verification</label>
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
              type="text"
              name="otp"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              value={voterData.otp}
              onChange={handleChange}
              style={{ ...inputStyle, flex: 1 }}
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="otp-btn"
              disabled={otpSent}
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </div>

          <label style={labelStyle}>Legal Document Proof</label>
          <input
            type="file"
            name="legalDocument"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            style={{ ...inputStyle, padding: "6px", color: "#000" }}
            required
          />

          <h3
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "18px",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Enter Updated Information
          </h3>

          <label style={labelStyle}>New Name</label>
          <input
            type="text"
            name="updatedName"
            placeholder="Enter new name (if changed)"
            value={voterData.updatedName}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>New Address</label>
          <textarea
            name="updatedAddress"
            placeholder="Enter updated address"
            value={voterData.updatedAddress}
            onChange={handleChange}
            rows="3"
            style={{ ...inputStyle, resize: "none" }}
          />

          <label style={labelStyle}>New Age</label>
          <input
            type="number"
            name="updatedAge"
            placeholder="Enter new age"
            value={voterData.updatedAge}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>New Photo</label>
          <input
            type="file"
            name="updatedPhoto"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            style={{ ...inputStyle, padding: "6px", color: "#000" }}
          />

          <button type="submit" className="submit-btn">
            Update Voter
          </button>
          <button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </form>

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }

            .otp-btn {
              background: #000;
              color: #fff;
              border: none;
              border-radius: 8px;
              padding: 10px 16px;
              cursor: pointer;
              font-weight: 600;
              font-size: 15px;
              transition: all 0.3s ease;
            }

            .otp-btn:hover {
              background: linear-gradient(to right, #22c55e, #2563eb);
              transform: scale(1.08);
            }

            .submit-btn {
              width: 100%;
              background: transparent;
              color: black;
              border: 2px solid #fff;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 600;
              padding: 10px 0;
              cursor: pointer;
              transition: all 0.3s ease;
              margin-top: 10px;
            }

            .submit-btn:hover {
              background: linear-gradient(to right, #22c55e, #2563eb);
              transform: scale(1.08);
            }

            .cancel-btn {
              width: 100%;
              background: transparent;
              color: black;
              border: 2px solid #fff;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 600;
              padding: 10px 0;
              cursor: pointer;
              transition: all 0.3s ease;
              margin-top: 10px;
            }

            .cancel-btn:hover {
              background: linear-gradient(to right, #22c55e, #2563eb);
              transform: scale(1.08);
            }
          `}
        </style>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  borderRadius: "8px",
  border: "none",
  fontSize: "15px",
  color: "#000",
  outline: "none",
};

const labelStyle = {
  fontWeight: "600",
  marginBottom: "4px",
  color: "black",
};

export default UpdateVoter;