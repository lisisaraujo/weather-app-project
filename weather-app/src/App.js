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

  async function fetchApi() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApi();
    const interval = setInterval(fetchApi, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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

  // set background image by adding css class
  weather.isGoodWeather
    ? document.body.classList.add("good-weather")
    : document.body.classList.remove("good-weather");

  return (
    <>
      <Header weather={weather}></Header>
      <Entries
        weatherIsGood={activitiesWeatherCondition}
        onDeleteActivity={handleDeleteActivity}
        weather={weather}
      />
      <Form weather={weather} onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
