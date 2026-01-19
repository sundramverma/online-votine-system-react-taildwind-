import React, { useState } from "react";

function Sidebar() {
  const [name, setName] = useState("Admin User");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("Not Available");
  const [photo, setPhoto] = useState("/pics/Admin.jpg");

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "2px 2px 8px gray",
      }}
    >
      <img
        src={photo}
        alt="Admin"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "60px",
          display: "block",
          margin: "auto",
        }}
      />
      <h3 style={{ textAlign: "center", marginTop: "10px" }}>{name}</h3>
      <p style={{ textAlign: "center", color: "gray" }}>{gender}</p>
      <p style={{ textAlign: "center", color: "gray" }}>{phone}</p>
    </div>
  );
}

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      Admin Dashboard
    </div>
  );
}

function AdminLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            backgroundColor: "whitesmoke",
            padding: "20px",
          }}
        >
          <h2 style={{ color: "black" }}>Welcome Admin</h2>
          <p style={{ color: "gray" }}>This is your dashboard area.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
