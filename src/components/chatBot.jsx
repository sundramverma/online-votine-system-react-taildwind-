import React, { useState } from "react";

const faqData = [
  { question: "hello", answer: "नमस्ते! कैसे मदद कर सकता हूँ?" },
  { question: "vote kaise kare", answer: "वोट डालने के लिए पहले आपको पंजीकरण करना होगा और फिर लॉगिन कर मतदान प्रक्रिया पूरी करनी होगी।" },
  { question: "admin kaun hai", answer: "इस प्रणाली का निरीक्षण करने वाला व्यक्ति एडमिन कहलाता है।" },
  { question: "your name", answer: "I am your Voting Assistant Bot." },
  { question: "help", answer: "मतदान, एप्लिकेशन या सिस्टम सम्बंधित कोई भी प्रश्न पूछें।" },
];

function findAnswer(userQuery) {
  const matched = faqData.find(item => 
    item.question.toLowerCase() === userQuery.toLowerCase()
  );
  if (matched) {
    return matched.answer;
  }
  return "माफ़ करें, मैं आपका सवाल समझ नहीं पाया। कृपया पुनः पूछें।";
}

export default function SimpleChatbot({ isOpen, onClose }) {
  const [chatMessages, setChatMessages] = useState([
    { text: "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim() === "") return;
    const userMsg = { text: userInput, sender: "user" };
    setChatMessages(prev => [...prev, userMsg]);
    setTimeout(() => {
      const botResponse = findAnswer(userInput);
      const botMsg = { text: botResponse, sender: "bot" };
      setChatMessages(prev => [...prev, botMsg]);
    }, 400);
    setUserInput("");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "390px",
        bottom: "40px",
        zIndex: 1050
      }}
      onClick={onClose}
    >
      <div
        className="bg-black rounded-lg shadow-lg w-80 max-w-full flex flex-col"
        onClick={e => e.stopPropagation()}
        style={{ maxHeight: "70vh" }}
      >
        <div className="bg-orange-600 text-black p-4 font-semibold flex justify-between items-center rounded-t-lg">
          मतदान सहायक चैटबोट
          <button 
            onClick={onClose}
            className="font-bold text-lg hover:text--200"
          >
            ×
          </button>
        </div>
        <div className="p-4 overflow-auto flex-grow space-y-3">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md max-w-[75%] ${
                msg.sender === "bot"
                  ? "bg-gray-200 text-black"
                  : "bg-orange-500 text-black ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex border-t p-3 gap-2">
          <input
            className="flex-grow border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="यहाँ लिखें..."
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button
            onClick={handleSend}
            className="bg-orange-600 text-black px-4 rounded hover:bg-black-700 transition-colors"
          >
            भेजें
          </button>
        </div>
      </div>
    </div>
  );
}