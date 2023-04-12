import "./Form.css";

export default function Form({ onAddActivity, weather }) {
  function handleForm(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const weather = event.target.goodweather.checked;
    onAddActivity(name, weather);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form
      className={weather.isGoodWeather ? "form class1" : "form class2"}
      onSubmit={handleForm}
    >
      <h2 className="form-header">Add New Activity</h2>
      <div className="weather-activity activity-name">
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input type="text" name="name" id="name"></input>
      </div>

      <div className="weather-activity">
        <label className="label" htmlFor="good-weather">
          Good-weather activity
        </label>
        <input type="checkbox" name="goodweather" id="good-weather"></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
