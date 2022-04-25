import Image from "next/image";

import { useRecoilValue } from "recoil";
import { typeServiceState } from "../../../recoil/atoms";

const MobilityComponent = ({ dataMobility }) => {
  const section = useRecoilValue(typeServiceState);
  const itemsHome = dataMobility.itemsHome;
  const itemsCompany = dataMobility.itemsCompany;
  const iconBattery = dataMobility.iconBattery;
  const iconBatteryL = dataMobility.iconBatteryL;
  const var1 = dataMobility.var1;
  const var2 = dataMobility.var2;
  return (
    <section className="mobilityContent">
      <div className="mobilityContainer">
        {section === "home" ? (
          <div className="mobilityCard">
            {itemsHome.map((item, i) => {
              const img = item.img.src;
              const title = item.title;
              const content = item.content;
              const fastCharge = item.fastCharge;
              const standarLoad = item.standarLoad;
              return (
                <div key={i} className={i === 0 ? "" : "mobilityCardContent"}>
                  <div className="mobilityItemImgR">
                    <div className="mobilityItemImgA">
                      <Image
                        src={img}
                        alt="image"
                        layout="fill"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                  <div className="mobilityTitle">
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </div>
                  <div className="infoChargeContainer">
                    <div className="battery">{iconBattery}</div>
                    <div className="infoCharge">
                      <span>{var1}</span>
                      <span>{fastCharge}</span>
                    </div>
                  </div>
                  <div className="infoChargeContainer">
                    <div className="battery">{iconBatteryL}</div>
                    <div className="infoCharge">
                      <span>{var2}</span>
                      <span>{standarLoad}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mobilityCard">
            {itemsCompany.map((item, i) => {
              const img = item.img.src;
              const title = item.title;
              const content = item.content;
              const fastCharge = item.fastCharge;
              const standarLoad = item.standarLoad;
              return (
                <div key={i} className={i === 0 ? "" : "mobilityCardContent"}>
                  <div className="mobilityItemImgR">
                    <div className="mobilityItemImgA">
                      <Image
                        src={img}
                        alt="image"
                        layout="fill"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                  <div className="mobilityTitle">
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </div>
                  <div className="infoChargeContainer">
                    <div className="battery">{iconBattery}</div>
                    <div className="infoCharge">
                      <span>{var1}</span>
                      <span>{fastCharge}</span>
                    </div>
                  </div>
                  <div className="infoChargeContainer">
                    <div className="battery">{iconBatteryL}</div>
                    <div className="infoCharge">
                      <span>{var2}</span>
                      <span>{standarLoad}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default MobilityComponent;
