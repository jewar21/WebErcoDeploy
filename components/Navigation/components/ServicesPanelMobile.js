import Link from "next/link";

// recoil

import { useRecoilState } from "recoil";
import {
  mobilePanelServiceState,
  typeServiceState
} from "../../../recoil/atoms";

import { iconArrowL } from "../../../content/globalData";

const ServicesPanelMobile = () => {
  const [isOpenPenal, setOpenPanel] = useRecoilState(mobilePanelServiceState);
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
          <p className="servicesReturn">Servicios</p>
        </button>
        <div className="companyContent">
          <div className="companyContainer">
            <h2 className="titleSection">EMPRESA</h2>
            <Link href="/services/company/solarEnergy">
              <a onClick={(e) => handleClick(e, true)} className="companyLink">
                Ecosistema de energía
              </a>
            </Link>
            <Link href="/services/company/electricMobility">
              <a onClick={(e) => handleClick(e, true)} className="companyLink">
                Movilidad eléctrica
              </a>
            </Link>
            <Link href="/services/company/energyStorage">
              <a onClick={(e) => handleClick(e, true)} className="companyLink">
                Almacenamiento de energía
              </a>
            </Link>
          </div>
        </div>
        <div className="homeContainer">
          <h2 className="titleSection">HOGAR</h2>
          <Link href="/services/home/solarEnergy">
            <a onClick={(e) => handleClick(e, false)} className="companyLink">
              Ecosistema de energía
            </a>
          </Link>
          <Link href="/services/home/electricMobility">
            <a onClick={(e) => handleClick(e, false)} className="companyLink">
              Movilidad eléctrica
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPanelMobile;
