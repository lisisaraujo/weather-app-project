import "./App.css";
import Form from "./components/Form/Form";
import Entries from "./components/Entries/Entries";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  // weather api fetch
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetchApi();
    const interval = setInterval(fetchApi, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  async function fetchApi() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(name, weather) {
    setActivities([
      ...activities,
      {
        id: uid(),
        name: name,
        goodWeather: weather,
      },
    ]);
  }

  // delete entry function

  function handleDeleteActivity(deletedId) {
    const newActivities = activities.filter(
      (activity) => activity.id !== deletedId
    );
    setActivities(newActivities);
  }

  // from api
  const weatherCondition = weather.isGoodWeather;

  // activity from entries component
  const activitiesWeatherCondition = activities.filter(
    (activity) => activity.goodWeather === weatherCondition
  );

  return (
    <>
      <Header weather={weather}></Header>
      <Entries
        weatherIsGood={activitiesWeatherCondition}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
