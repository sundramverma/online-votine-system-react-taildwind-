import React, { useState } from "react";

function AdministratorForm(props) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");

  function saveData(e) {
    e.preventDefault();
    alert("Admin info saved");
    props.onSubmit({ name: name, mobile: mobile });
    props.onClose();
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "25%",
        left: "35%",
        backgroundColor: "white",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "8px",
        width: "320px",
        boxShadow: "2px 2px 10px gray",
        zIndex: "1000"
      }}
    >
      <h3 style={{ textAlign: "center" }}>Admin Form</h3>

      <form onSubmit={saveData}>
        <p>Name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />

        <p>Unique Id:</p>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />

        <p>Password:</p>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />

        <p>Mobile No:</p>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "6px 15px",
              borderRadius: "5px",
              marginRight: "10px"
            }}
          >
            Submit
          </button>

          <button
            type="button"
            onClick={props.onClose}
            style={{
              backgroundColor: "gray",
              color: "white",
              border: "none",
              padding: "6px 15px",
              borderRadius: "5px"
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdministratorForm;
