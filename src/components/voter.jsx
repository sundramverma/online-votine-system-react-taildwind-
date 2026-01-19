import React, { useState } from "react";

const VoterLoginForm = ({ onLogin, error, setError }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!userName.trim()) {
      setError("Please enter your username");
      return;
    }
    
    if (!userPassword) {
      setError("Please enter your password");
      return;
    }
    
    setError("");
    onLogin({ username: userName, password: userPassword });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black"
          placeholder="Enter your password"
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default VoterLoginForm;