import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Entries from "./components/Entries/Entries";
import Header from "./components/Header/Header";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState({});

  function handleAddActivity(name, weather) {
    setActivities([
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
