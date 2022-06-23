import PropTypes from "prop-types";

/* Importing the svg icons. */
import {
  iconHandler,
  iconComputer,
  iconLeaf
} from "../../../../content/globalData";

// data
import { coverInfo } from "../../../../content/data/homeData";

const CardsCover = ({ data }) => {
  return (
    <div className="cardCoverContainer">
      {data.map((e, i) => (
        <div
          key={i}
          className={
            i === 0 ? "coverContentInfo" : "coverContentInfo mt-14 lg:mt-0"
          }
        >
          <div className="coverContentIcon">
            {i === 0 ? iconHandler : i === 1 ? iconComputer : iconLeaf}
          </div>
          <div className="coverContentText">
            <h5>{e.title}</h5>
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

CardsCover.propTypes = { data: PropTypes.array.isRequired };

export default CardsCover;
