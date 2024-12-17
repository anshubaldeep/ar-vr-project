/* eslint-disable react/prop-types */

const EndWorkout = ({ totalSeconds, calories, onClick }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minute${
      minutes !== 1 ? "s" : ""
    } and ${remainingSeconds} second${remainingSeconds !== 1 ? "s" : ""}`;
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Great Job!</h1>
        <p className="text-xl text-gray-700 mb-6">
          Thank you for completing your workout. Keep up the good work!
        </p>
        <div className="mb-6">
          <p className="text-lg text-gray-600">
            Workout Duration: {formatTime(totalSeconds)}
          </p>
          <p className="text-lg text-gray-600">
            Calories Burned: {calories.toFixed(2)}
          </p>
        </div>
        <button className="w-full py-3 text-lg bg-black text-white rounded" onClick={onClick}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default EndWorkout;
