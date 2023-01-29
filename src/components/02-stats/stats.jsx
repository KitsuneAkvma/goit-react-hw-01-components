const Statistics = statsProps => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statsProps.stats.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage"> {item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
