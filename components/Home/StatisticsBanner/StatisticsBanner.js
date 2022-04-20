import { statisticsErco } from "../../../content/data/homeData";

const StatisticsBanner = () => {
  return (
    <section className="statisticsBannerContainer">
      <div className="statisticsBannerContent">
        {statisticsErco.map((statistic, index) => (
          <div className="statistics" key={index}>
            <h3>{statistic.number}</h3>
            <p>{statistic.description}</p>
            <span>{statistic.info}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsBanner;
