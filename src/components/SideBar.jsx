import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function SideBar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menus = [
    {
      heading: "VOTERS",
      items: [
        { name: "Register in Electoral Roll", link: "#" },
        { name: "Track Application Status", link: "#" },
        { name: "Download E-EPIC", link: "#" },
        { name: "Search Electoral Roll", link: "#" },
      ],
    },
    {
      heading: "POLITICAL PARTIES / CANDIDATES",
      items: [
        { name: "Political Parties Registration", link: "#" },
        { name: "Election Symbol", link: "#" },
        { name: "Candidate Nomination", link: "#" },
      ],
    },
    {
      heading: "ECI OFFICIALS",
      items: [
        { name: "Quick Links for ECI Officials", link: "#" },
        { name: "ECI Instructions", link: "#" },
        { name: "Observer Portal", link: "#" },
      ],
    },
    {
      heading: "ELECTION MANAGEMENT",
      items: [
        { name: "Current Elections", link: "#" },
        { name: "Past Elections", link: "#" },
        { name: "Election Results", link: "#" },
      ],
    },
    {
      heading: "MEDIA AND PUBLICATIONS",
      items: [
        { name: "ECI Publications", link: "#" },
        { name: "Compendium of Instructions", link: "#" },
        { name: "Election Results & Statistics", link: "#" },
      ],
    },
  ];

  function toggleMenu(name) {
    if (openMenu === name) {
      setOpenMenu(null);
    } else {
      setOpenMenu(name);
    }
  }

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "black",
        color: "white",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          padding: "16px",
          borderBottom: "1px solid gray",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Menu
      </div>

      <div style={{ padding: "16px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menus.map((menu) => (
            <li key={menu.heading} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => toggleMenu(menu.heading)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "15px",
                  textAlign: "left",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "lightgreen";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "white";
                }}
              >
                {menu.heading}
                <ChevronDown
                  size={18}
                  style={{
                    transform:
                      openMenu === menu.heading ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: openMenu === menu.heading ? "300px" : "0px",
                  transition: "max-height 0.4s ease",
                }}
              >
                <ul style={{ paddingLeft: "15px", marginTop: "10px" }}>
                  {menu.items.map((item) => (
                    <li key={item.name} style={{ marginBottom: "8px" }}>
                      <a
                        href={item.link}
                        style={{
                          display: "block",
                          padding: "8px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          color: "lightgray",
                          fontWeight: "500",
                        }}
                        onMouseOver={(e) => {
                          e.target.style.color = "lightgreen";
                          e.target.style.backgroundColor = "gray";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.color = "lightgray";
                          e.target.style.backgroundColor = "transparent";
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
