export default function Entries({ weatherIsGood, onDeleteActivity }) {
  return (
    <ul className="weather-list">
      {weatherIsGood.map((activity) => (
        <li key={activity.id} className="entry-list__item">
          <p>{activity.name}</p>
          <button onClick={onDeleteActivity(activity.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
