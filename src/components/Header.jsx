import { useState } from "react";

export default function Header() {
  const [isButtonOn, setIsButtonOn] = useState(false);

  const btnState = isButtonOn ? "on" : "off";
  const btnStyle = isButtonOn
    ? "absolute top-10 left-5 w-19 h-17"
    : "absolute top-11 left-5 w-19 h-15";

  function toggleBUtton() {
    setIsButtonOn((prev) => !prev);
  }

  return (
    <header>
      <div className="relative z-0 h-[25vh] w-full">
        <img src="/images/header-background.webp" alt="background" className="object-cover" />
        <button onClick={toggleBUtton}>
          <img
            src={`/images/button-${btnState}.webp`}
            alt={`button ${btnState}`}
            className={btnStyle}
          />
        </button>
        <img
          src="/images/google-play.webp"
          alt="google play"
          className="absolute top-10 right-1 h-20 w-44"
        />
      </div>
    </header>
  );
}
