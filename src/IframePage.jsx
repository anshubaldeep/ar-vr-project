/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const IframePage = ({ iframeUrl, onClick }) => {
  const [, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEndWorkout = () => {
    const totalSeconds = elapsedTime;
    const caloriesBurned = (totalSeconds / 60) * 20;
    console.log('OOOOOO', totalSeconds, caloriesBurned)
    onClick(totalSeconds, caloriesBurned);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="relative w-full h-screen px-2">
      <iframe
        src={iframeUrl}
        style={{
          width: "100%",
          height: "90vh",
          touchAction: "auto",
        }}
        id="the_iframe"
        allowvr="yes"
        allow="camera; vr; xr; accelerometer; magnetometer; gyroscope; webvr;webxr;"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        frameborder="0"
      />
      <div className="absolute top-4 left-4 bg-white bg-opacity-75 p-2 rounded-lg">
        <p className="text-lg font-semibold">Time: {formatTime(elapsedTime)}</p>
      </div>
      <div className="bottom-10 left-0 right-0 flex justify-center z-99">
        <button
          onClick={handleEndWorkout}
          className="bg-red-500 hover:bg-red-600 text-white text-xl py-2 px-4 rounded-full shadow-lg"
        >
          End Workout
        </button>
      </div>
    </div>
  );
};

export default IframePage;
