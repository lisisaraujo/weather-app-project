export default function Entries() {
  const activities = JSON.parse(localStorage.getItem("activities") || "[]");

  return (
    <ul className="animal-list">
      {activities.map((activity) => (
        <li key={activity.id} className="entry-list__item">
          <p>{activity.name}</p>
        </li>
      ))}
    </ul>
  );
}
