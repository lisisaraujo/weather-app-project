export default function Entries({ weatherIsGood }) {
  return (
    <ul className="animal-list">
      {weatherIsGood.map((activity) => (
        <li key={activity.id} className="entry-list__item">
          <p>{activity.name}</p>
        </li>
      ))}
    </ul>
  );
}
