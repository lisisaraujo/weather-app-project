import "./header.css";

export default function Header({ weather }) {
  return (
    <>
      <header
        className={
          weather.isGoodWeather
            ? "weather-description class1"
            : "weather-description class2"
        }
      >
        <h1 className="App-logo">
          {weather.condition}
          {weather.temperature}
        </h1>
        {weather.isGoodWeather === true && (
          <p className="weather-description">
            The weather is awesome!! <br /> Go outise and:
          </p>
        )}
        {weather.isGoodWeather === false && (
          <p className="weather-description">
            Bad weather outside! <br />
            Here's what you can do now:
          </p>
        )}
      </header>
    </>
  );
}
