import React, { useState } from "react";

const VoterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherOrHusbandName: "",
    aadhaarNumber: "",
    photo: null,
    legalDocument: null,
    permanentAddress: "",
    addressProof: "",
    addressProofFile: null,
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Voter Added Successfully!");
    console.log("Voter Data:", formData);
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
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)",
          padding: "30px",
          color: "black",
          fontFamily: "Poppins, sans-serif",
          animation: "fadeIn 0.3s ease",
          overflowY: "auto",
          maxHeight: "90vh",
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
          Add New Voter
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter voter's full name"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Father's / Husband's Name</label>
          <input
            type="text"
            name="fatherOrHusbandName"
            placeholder="Enter Father's or Husband's name"
            value={formData.fatherOrHusbandName}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Aadhaar Card Number</label>
          <input
            type="text"
            name="aadhaarNumber"
            placeholder="Enter 12-digit Aadhaar Number"
            maxLength={12}
            value={formData.aadhaarNumber}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Passport Size Photo</label>
          <input
            type="file"
            name="photo"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            style={{ ...inputStyle, padding: "6px", color: "#000" }}
            required
          />

          <label style={labelStyle}>Legal Document (Proof of Citizenship)</label>
          <input
            type="file"
            name="legalDocument"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            style={{ ...inputStyle, padding: "6px", color: "#000" }}
            required
          />

          <label style={labelStyle}>Permanent Address</label>
          <textarea
            name="permanentAddress"
            placeholder="Enter full address"
            value={formData.permanentAddress}
            onChange={handleChange}
            rows="3"
            style={{
              ...inputStyle,
              resize: "none",
              padding: "10px",
              height: "80px",
            }}
            required
          />

          <label style={labelStyle}>Address Proof Type</label>
          <select
            name="addressProof"
            value={formData.addressProof}
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="">Select Address Proof</option>
            <option value="Aadhaar Card">Aadhaar Card</option>
            <option value="Electricity Bill">Electricity Bill</option>
            <option value="Ration Card">Ration Card</option>
            <option value="Passport">Passport</option>
          </select>

          {formData.addressProof && (
            <>
              <label style={labelStyle}>
                Upload {formData.addressProof} Photo
              </label>
              <input
                type="file"
                name="addressProofFile"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                style={{ ...inputStyle, padding: "6px", color: "#000" }}
                required
              />
            </>
          )}

          <label style={labelStyle}>State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter state"
            value={formData.state}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <button type="submit" className="submit-btn">
            Add Voter
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

export default VoterForm;