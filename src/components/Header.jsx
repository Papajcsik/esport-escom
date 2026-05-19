import { useState } from "react";

export default function Header() {
  const [isButtonOn, setIsButtonOn] = useState(false);

  const btnState = isButtonOn ? "on" : "off";
  const btnStyle = isButtonOn
    ? "absolute top-7 left-4 w-18 h-16"
    : "absolute top-8 left-4 w-18 h-14";

  function toggleBUtton() {
    setIsButtonOn((prev) => !prev);
  }

  return (
    <header>
      <div className="relative h-screen w-full">
        <img src="/images/header-background.png" alt="background" className="object-cover" />
        <button onClick={toggleBUtton}>
          <img
            src={`/images/button-${btnState}.png`}
            alt={`button ${btnState}`}
            className={btnStyle}
          />
        </button>
        <img
          src="/images/google-play.png"
          alt="google play"
          className="absolute top-8 right-1 h-20 w-34"
        />
      </div>
    </header>
  );
}
