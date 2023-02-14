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
    async function fetchApi() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, []);

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(name, weather) {
    console.log(name, weather);
    setActivities([
      ...activities,
      {
        id: uid(),
        name: name,
        goodWeather: weather,
      },
    ]);
  }
  console.log("all activities:", activities);

  // delete entry function

  function handleDeleteActivity(deletedId) {
    const newActivities = activities.filter(
      (activity) => activity.id !== deletedId
    );
  }

  // from api
  const isGoodWeather = weather.isGoodWeather;

  // activity from entries component
  const activitiesIsGoodWeather = activities.filter(
    (activity) => activity.goodWeather === isGoodWeather
  );
  console.log("good weather activitz", activitiesIsGoodWeather);

  // const [filter, setFilter] = useState("");

  return (
    <>
      <Header weather={weather}></Header>
      <Entries
        weatherIsGood={activitiesIsGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
