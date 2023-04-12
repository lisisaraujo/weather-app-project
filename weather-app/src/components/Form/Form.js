export default function Form({ onAddActivity }) {
  function handleForm(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const weather = event.target.goodweather.checked;
    onAddActivity(name, weather);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form onSubmit={handleForm}>
      <h1>Add New Activity</h1>
      <label className="label" htmlFor="name">
        Name:
      </label>
      <input type="text" name="name" id="name"></input>
      <label className="label" htmlFor="good-weather">
        Good-weather activity
      </label>
      <input type="checkbox" name="goodweather" id="good-weather"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
