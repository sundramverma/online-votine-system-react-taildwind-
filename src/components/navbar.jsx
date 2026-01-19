import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="
        w-full flex items-center justify-between 
        px-6 py-3 shadow-md 
        bg-gradient-to-r from-[#ee6f07] to-[#f77b07]
        text-white
      "
      style={{ height: "64px" }}
    >
      <div className="flex items-center">
       <img
  src={`${import.meta.env.BASE_URL}pics/orglogo.jpg`}
  alt="Logo"
  className="h-12 w-12 rounded-full object-contain"
/>

      </div>
      
      <div className="text-xl font-bold tracking-wide">
        Smart Voting System
      </div>
      
      <div className="flex items-center">
      <img
  src={`${import.meta.env.BASE_URL}pics/orglogo.jpg`}
  alt="Logo"
  className="h-12 w-12 rounded-full object-contain"
/>

      </div>
    </nav>
  );
}