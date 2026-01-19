import React, { useState, useEffect } from "react";

const thoughtsData = [
  {
    text: "Be the change you wish to see in the world.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEfa-3tnQSXgKL7yYRfuPz8268_Y0Q1tJjw&s",
  },
  {
    text: "A champion is someone who gets up when he can't.",
    img: "https://staticimg.amarujala.com/assets/images/2016/10/03/amitabh-bachchan_1475471919.jpeg?w=414&dpr=1.0&q=80",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    img: "https://www.businessoutreach.in/wp-content/uploads/2024/07/Sachin-Tendulkars-Biography.jpg",
  },
];

export default function ThoughtBar() {
  const [index, setIndex] = useState(0);
  const maxIndex = thoughtsData.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex === maxIndex ? 0 : currentIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{
        background: "linear-gradient(90deg, #36373aff 20%, #2a3144ff 100%)",
        color: "white",
        boxShadow: "0 2px 20px 0 #22388555",
        borderRadius: "15px",
        height: "250px",
        padding: "0 2rem"
      }}
    >
      <div 
        className="text-center font-bold tracking-wide px-6"
        style={{
          flex: 1,
          fontSize: "2.2rem",
          lineHeight: "1.3",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          fontFamily: "'Playfair Display', 'Georgia', serif"
        }}
      >
        {thoughtsData[index].text}
      </div>

      <div className="flex flex-col items-center">
        <img
          src={thoughtsData[index].img}
          alt="person"
          className="rounded-xl object-cover"
          style={{
            width: "180px",
            height: "180px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
            border: "5px solid #ffffff",
          }}
        />
      </div>
    </div>
  );
}