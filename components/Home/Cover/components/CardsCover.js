import PropTypes from "prop-types";

/* Importing the svg icons. */
import { iconsCardsCover } from "../../../../content/globalData";

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
          <div className="coverContentIcon">{iconsCardsCover[i]}</div>
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
