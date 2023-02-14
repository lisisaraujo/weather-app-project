import "./App.css";
import Form from "./components/Form/Form";
import Entries from "./components/Entries/Entries";
import Header from "./components/Header/Header";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
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
  console.log(activities);

  return (
    <>
      <Header />
      <Entries />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
