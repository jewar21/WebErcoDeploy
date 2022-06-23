import Link from "next/link";
import Image from "next/image";

// local data
import {
  iconTwitter,
  iconInstagram,
  iconFacebook,
  iconLinkedIn,
  iconYoutube,
  nuestroSocioImg,
  ercoLogo
} from "../../content/globalData";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { nameCountry, contactUs } from "../../recoil/atoms";

// components
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const data = useRecoilValue(contactUs);
  const country = useRecoilValue(nameCountry);
  const { address, location, partner, links, socialNetworks, contacts } =
    data.offices;

  return (
    <footer className="footerContainer">
      <div className="footerIconsContent">
        <div className="footerIconsContainer">
          <Link href={`/${country}`}>
            <a className="block lg:hidden">
              {ercoLogo(144, 38.92, "#fff", true)}
            </a>
          </Link>
          <Link href="/">
            <a className="hidden lg:block">{ercoLogo(185, 50, "#fff", true)}</a>
          </Link>
          <div className="footerSocialNetworks">
            {socialNetworks.map((href, i) => (
              <Link href={href} key={i}>
                <a target="_blank">
                  {i === 0
                    ? iconTwitter
                    : i === 1
                    ? iconInstagram
                    : i === 2
                    ? iconFacebook
                    : i === 3
                    ? iconLinkedIn
                    : iconYoutube}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <FooterLinks links={links} contacts={contacts} country={country} />
      </div>
      <div className="footerbutton">
        <div className="footerbuttonContainer">
          <div>
            <p className="footerInfoLeft">
              {address}
              <span className="block lg:ml-1 lg:inline">{location}</span>
            </p>
          </div>
          <div className="footerInfoRight">
            <p className="mb-1 uppercase">{partner}</p>
            <div className="nuestroSocioImg">
              <Image
                src={nuestroSocioImg.src}
                alt="Nuestro Socio"
                layout="responsive"
                width={159}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
