import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Entries from "./components/Entries/Entries";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Entries />
      <Form />
    </>
  );
}

export default App;
