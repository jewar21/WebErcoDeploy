// data
import { coverInfo } from "../../../../content/data/homeData";

const CardsCover = () => {
  return (
    <div className="cardCoverContainer">
      {coverInfo.map((element, index) => (
        <div
          key={index}
          className={
            index === 0 ? "coverContentInfo" : "coverContentInfo mt-14 lg:mt-0"
          }
        >
          <div className="coverContentIcon">{element.icon}</div>
          <div className="coverContentText">
            <h5>{element.title}</h5>
            <p>{element.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsCover;
