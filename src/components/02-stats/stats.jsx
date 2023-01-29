import statsCSS from './stats.module.css';
import randomColor from 'randomcolor';

const Statistics = statsProps => {
  return (
    <section className={statsCSS.statistics}>
      <h2 className={statsCSS.title}>Upload stats</h2>

      <ul className={statsCSS.statList}>
        {statsProps.stats.map(item => (
          <li
            className={statsCSS.item}
            key={item.id}
            style={{ backgroundColor: randomColor(),
              width:`${item.percentage}%`
             }}
          >
            <span className={statsCSS.label}>{item.label}</span>
            <span className={statsCSS.percentage}> {item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
