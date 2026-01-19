import React from "react";

const CandidateForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onClose) onClose();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (onClose) onClose();
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
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "440px",
          background: "linear-gradient(160deg, #22c55e, #2563eb)",
          borderRadius: "16px",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)",
          padding: "28px 32px",
          color: "black",
          fontFamily: "Poppins, sans-serif",
          animation: "fadeIn 0.3s ease",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "18px",
            textAlign: "center",
          }}
        >
          Candidate Form
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>FULL NAME</label>
          <input type="text" placeholder="FULL NAME" style={inputStyle} />

          <label style={labelStyle}>Father's/Husband's Name</label>
          <input type="text" placeholder="Father's/Husband's Name" style={inputStyle} />

          <label style={labelStyle}>Aadhaar Card Number</label>
          <input
            type="text"
            placeholder="12-digit Aadhaar"
            maxLength={12}
            style={inputStyle}
          />

          <label style={labelStyle}>PHOTO</label>
          <input
            type="file"
            accept="image/*"
            style={{ ...inputStyle, padding: "5px", color: "#000" }}
          />

          <label style={labelStyle}>Legal Document</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            style={{ ...inputStyle, padding: "5px", color: "#000" }}
          />
          
          <label style={labelStyle}>Party Symbol</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            style={{ ...inputStyle, padding: "5px", color: "#000" }}
          />

          <button type="submit" style={submitBtn} className="form-btn">
            Submit
          </button>
          <button type="button" onClick={handleCancel} style={cancelBtn} className="form-btn">
            Cancel
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .form-btn {
            transition: all 0.3s ease;
          }

          .form-btn:hover {
            transform: scale(1.07) translateY(-2px);
            background: linear-gradient(to right, #22c55e, #2563eb);
            color: white !important;
            border: none !important;
          }
        `}
      </style>
    </div>
  );
};

const labelStyle = { fontWeight: "600", marginBottom: 4 };
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

const submitBtn = {
  width: "100%",
  background: "#000",
  color: "#fff",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
  fontWeight: "600",
  padding: "11px 0",
  marginTop: "8px",
  marginBottom: "12px",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
};

const cancelBtn = {
  width: "100%",
  background: "transparent",
  color: "#fff",
  border: "2px solid #fff",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "600",
  padding: "10px 0",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
};

export default CandidateForm;