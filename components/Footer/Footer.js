import Link from "next/link";
import Image from "next/image";

// local data
import { ercoLogo, iconsSocial } from "../../content/globalData";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { nameCountry, contactUs } from "../../recoil/atoms";

// components
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const data = useRecoilValue(contactUs);
  const country = useRecoilValue(nameCountry);
  const { offices } = data;

  return (
    <footer className="footerContainer">
      {offices && (
        <>
          <div className="footerIconsContent">
            <div className="footerIconsContainer">
              <Link href={`/${country}`}>
                <a className="block lg:hidden">
                  {ercoLogo(144, 38.92, "#fff", true)}
                </a>
              </Link>
              <Link href="/">
                <a className="hidden lg:block">
                  {ercoLogo(185, 50, "#fff", true)}
                </a>
              </Link>
              <div className="footerSocialNetworks">
                {offices.socialNetworks.map((href, i) => (
                  <Link href={href} key={i}>
                    <a target="_blank">{iconsSocial[i]}</a>
                  </Link>
                ))}
              </div>
            </div>
            <FooterLinks
              links={offices.links}
              contacts={offices.contacts}
              country={country}
            />
          </div>
          <div className="footerbutton">
            <div className="footerbuttonContainer">
              <div>
                <p className="footerInfoLeft">
                  {offices.address}
                  <span className="block lg:ml-1 lg:inline">
                    {offices.location}
                  </span>
                </p>
              </div>
              <div className="footerInfoRight">
                <p className="mb-1 uppercase">{offices.partner}</p>
                <div className="nuestroSocioImg">
                  <Image
                    src={offices.imgPartner}
                    alt={offices.partner}
                    layout="responsive"
                    width={159}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
