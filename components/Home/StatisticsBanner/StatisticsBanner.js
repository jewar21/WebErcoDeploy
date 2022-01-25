import { statisticsErco } from "../../../content/data/homeData";

const StatisticsBanner = () => {
  return (
    <div className="statisticsBannerContainer">
      <div className="statisticsBannerContent">
        {statisticsErco.map((statistic, index) => (
          <div className="statistics" key={index}>
            <h3>{statistic.number}</h3>
            <p>{statistic.description}</p>
            <spam>{statistic.info}</spam>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsBanner;
