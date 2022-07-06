import Image from "next/image";

import { iconMail, iconPhone } from "../../content/globalData";

const Offices = ({ contactData }) => {
  const { title, contacts, img1, img2 } = contactData;

  return (
    <section className="officesContent">
      <div className="officesCoverImage">
        <Image
          src={img2}
          alt="image"
          layout="fill"
          objectFit="cover"
          priority="true"
        />
      </div>
      <div className="lg:w-full lg:flex lg:flex-col lg:items-end">
        <div className="officesContainer">
          <h4>{title}</h4>
          <div className="officesInfo">
            {contacts.map((contact, i) => {
              const country = contact.country;
              const email = contact.email;
              const phone = contact.phone;
              return (
                <div key={i}>
                  <h5 className="officesInfoTitle">{country}</h5>
                  <div className="officesCenter">
                    <div className="officesIcon">{iconMail}</div>
                    <span>{email}</span>
                  </div>
                  <div className="officesCenter">
                    <div className="officesIcon">{iconPhone}</div>
                    <span>{phone}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="officesContentImgMobile">
        <div className="officesImgMobile">
          <Image
            src={img1}
            alt="image"
            layout="fill"
            objectFit="cover"
            priority="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Offices;
