export default function Header({ weather }) {
  return (
    <>
      <header className="header">
        <h1>
          {weather.condition}
          {weather.temperature}
        </h1>
        {weather.isGoodWeather === true && (
          <p>The weather is awesome!! Go outise and:</p>
        )}
        {weather.isGoodWeather === false && (
          <p>Bad weather outside! Here's what you can do now:</p>
        )}
      </header>
    </>
  );
}
