import statsCSS from './stats.module.css';
import randomColor from 'randomcolor';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={statsCSS.statistics}>
      <h2 className={statsCSS.title}>{title}</h2>

      <ul className={statsCSS.statList}>
        {stats.map(item => (
          <li
            className={statsCSS.item}
            key={item.id}
            style={{
              backgroundColor: randomColor(),
              width: `${item.percentage}%`,
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
