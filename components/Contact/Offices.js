import Image from "next/image";

const Offices = ({ contactData }) => {
  console.log("esteeee", contactData);
  const title = contactData.title;
  const contacts = contactData.contacts;
  const img1 = contactData.img1.src;
  const img2 = contactData.img2.src;

  const iconMail = contactData.iconMail;
  const iconPhone = contactData.iconPhone;

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
              console.log(contact);
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
      <div className="relative w-screen h-[19.5rem] lg:hidden">
        <div className="absolute w-full h-full top-0 left-0">
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
