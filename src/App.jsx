import React, { useState, useEffect } from "react";
import Pattern from "./assets/images/pattern-hills.svg";
import Bgstars from "./assets/images/bg-stars.svg";
import Footer from "./Components/Footer";

const App = () => {
  // Set the launch date and time
  const launchDate = new Date("2023-12-01T00:00:00Z").getTime();

  // Initialize the state for the countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = launchDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="Container flex flex-col items-center justify-center min-h-[70vh]">
      <div className="stars absolute">
        <img src={Bgstars} alt="" />
      </div>
      <h1 className="text-white text-[24px] uppercase tracking-widest mb-14">
        We're launching soon
      </h1>
      <div className="countdown flex items-center justify-around text-center">
        <div>
          <p>{countdown.days}</p>
          <h3>Days</h3>
        </div>
        <div>
          <p>{countdown.hours}</p>
          <h3>Hours</h3>
        </div>
        <div>
          <p>{countdown.minutes}</p>
          <h3>Minutes</h3>
        </div>
        <div>
          <p>{countdown.seconds}</p>
          <h3>Seconds</h3>
        </div>
      </div>
      <Footer />
      <div className="hills absolute bottom-0">
        <img src={Pattern} alt="" />
      </div>
    </div>
  );
};

export default App;
