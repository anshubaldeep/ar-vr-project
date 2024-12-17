import { useState } from "react";
import "./App.css";
import FitnessApp from "./TitlePage";
import IframePage from "./IframePage";
import EndWorkout from "./EndWorkout";
import UrlPage from "./UrlPage";

function App() {
  const [page, setPage] = useState("UrlPage");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [iframeUrl, setIframeUrl] = useState("");
  const renderComp = (comp) => {
    switch (comp) {
      case "UrlPage":
        return (
          <UrlPage
            setUrl={setIframeUrl}
            onClick={() => setPage("FitnessApp")}
          />
        );
      case "FitnessApp":
        return <FitnessApp onClick={() => setPage("IframePage")} />;
      case "IframePage":
        return (
          <IframePage
            iframeUrl={iframeUrl}
            onClick={(totalSecondsVal, caloriesBurnedVal) => {
              setCaloriesBurned(caloriesBurnedVal);
              setTotalSeconds(totalSecondsVal);
              setPage("EndWorkout");
            }}
          />
        );
      case "EndWorkout":
        return (
          <EndWorkout
            totalSeconds={totalSeconds}
            calories={caloriesBurned}
            onClick={() => setPage("FitnessApp")}
          />
        );
      default:
        return <div>Default</div>;
    }
  };
  return <div className="h-100 w-100">{renderComp(page)}</div>;
}

export default App;
