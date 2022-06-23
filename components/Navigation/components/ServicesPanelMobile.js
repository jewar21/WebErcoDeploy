import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

/* Importing the state of the mobile panel and the type of service. */
import { useRecoilState, useRecoilValue } from "recoil";
import {
  nameCountry,
  mobilePanelServiceState,
  typeServiceState
} from "../../../recoil/atoms";

/* Importing the icon of the arrow. */
import { iconArrowL } from "../../../content/globalData";

const ServicesPanelMobile = ({ data }) => {
  const country = useRecoilValue(nameCountry);
  const [isOpenPanel, setOpenPanel] = useRecoilState(mobilePanelServiceState);
  const [typeService, setTypeService] = useRecoilState(typeServiceState);

  const handleClick = (e, isCompany) => {
    if (isCompany) {
      setTypeService("company");
    } else {
      setTypeService("home");
    }
  };

  return (
    <div className="servicesPanelMobileContent">
      <div className="servicesPanelMobileContainer">
        <button
          className="servicesPanelMobileButton"
          type="button"
          onClick={() => {
            setOpenPanel(false);
          }}
        >
          <div className="iconArrow">{iconArrowL}</div>
          <p className="servicesReturn">{data.name}</p>
        </button>
        <div className="companyContent">
          <div className="companyContainer">
            <h2 className="titleSection">{data.company}</h2>
            {data.info.map((item, i) => (
              <Link key={i} href={`/${country}/services/company${item.link}`}>
                <a
                  onClick={(e) => handleClick(e, true)}
                  className="companyLink"
                >
                  {item.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="homeContainer">
          <h2 className="titleSection">{data.home}</h2>
          {data.info.map((item, i) => (
            <Link key={i} href={`/${country}/services/home${item.link}`}>
              <a
                onClick={(e) => handleClick(e, true)}
                className={i === 2 ? "hidden" : "companyLink"}
              >
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

ServicesPanelMobile.propTypes = { data: PropTypes.object.isRequired };

export default ServicesPanelMobile;
