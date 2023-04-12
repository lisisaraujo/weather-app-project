import "./Entries.css";

export default function Entries({ weatherIsGood, onDeleteActivity, weather }) {
  return (
    <ul className="weather-list">
      {weatherIsGood.map((activity) => (
        <li
          className={
            weather.isGoodWeather ? "list-item class1" : "list-item class2"
          }
          key={activity.id}
        >
          <p>{activity.name}</p>
          <button
            onClick={() => {
              onDeleteActivity(activity.id);
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
