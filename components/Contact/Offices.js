import Image from "next/image";

const Offices = ({ contactData }) => {
  const title = contactData.title;
  const contacts = contactData.contacts;
  const img1 = contactData.img1.src;
  const img2 = contactData.img2.src;
  return (
    <section className="w-screen">
      <div className="px-6 lg:px-5.25rem lg:py-32">
        <h4 className="text-H4 font-bold text-darkGrey-900 py-12 lg:py-0">{title}</h4>
        {contacts.map((contact, i) => {
          const country = contact.country;
          const email = contact.email;
          const phone = contact.phone;
          const iconMail = contact.iconMail;
          const iconPhone = contact.iconPhone;
          return (
            <div key={i} className="">
              <h5 className="text-Subtitle font-Regular text-darkGrey-900">
                {country}
              </h5>
              <div className="flex items-center">
                <div>{iconMail}</div>
                <span>{email}</span>
              </div>
              <div className="flex items-center">
                <div className="">{iconPhone}</div>
                <span>{phone}</span>
              </div>
            </div>
          );
        })}
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
