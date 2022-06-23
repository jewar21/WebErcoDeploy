/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { bannersData } from "../../../recoil/atoms";

const StatisticsBanner = () => {
  const { statisticsErco } = useRecoilValue(bannersData);

  return (
    <section className="statisticsBannerContainer">
      <div className="statisticsBannerContent">
        {statisticsErco.map(({ number, description, info }, index) => (
          <div className="statistics" key={index}>
            <h3>{number}</h3>
            <p>{description}</p>
            <span>{info}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsBanner;
