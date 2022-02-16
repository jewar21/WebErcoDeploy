import Link from "next/link";
import Image from "next/image";

import FooterLinks from "./FooterLinks";

import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../../utils/handlers/handlers";
import {
  iconTwitter,
  iconInstagram,
  iconFacebook,
  iconLinkedIn,
  iconYoutube,
  nuestroSocioImg,
  ercoLogo,
  iconErco
} from "../../content/data/homeData";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <footer className="footerContainer">
      <div className="footerIconsContent">
        <div className="footerIconsContainer">
          <Link href="/">
            <a className="block lg:hidden">
              {ercoLogo(144, 38.92, "#fff", true)}
            </a>
          </Link>
          <Link href="/">
            <a className="hidden lg:block">{ercoLogo(185, 50, "#fff", true)}</a>
          </Link>
          <div className="footerSocialNetworks">
            <Link href="/">
              <a>{iconTwitter}</a>
            </Link>
            <Link href="/">
              <a>{iconInstagram}</a>
            </Link>
            <Link href="/">
              <a>{iconFacebook}</a>
            </Link>
            <Link href="/">
              <a>{iconLinkedIn}</a>
            </Link>
            <Link href="/">
              <a>{iconYoutube}</a>
            </Link>
          </div>
        </div>
        <FooterLinks />
      </div>
      <div className="footerbutton">
        <div className="footerbuttonContainer">
          <div>
            <p className="footerInfoLeft">
              Cra 49 # 61 Sur 540 Bodega 106
              <spam className="block lg:ml-1 lg:inline">
                Medellín, Antioquia.
              </spam>
            </p>
          </div>
          <div className="footerInfoRight">
            <p className="mb-1">NUESTRO SOCIO</p>
            <div className="nuestroSocioImg">
              <Image
                src={nuestroSocioImg}
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
