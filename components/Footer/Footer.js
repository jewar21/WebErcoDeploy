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

// components
import FooterLinks from "./FooterLinks";

const Footer = () => {
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
              <span className="block lg:ml-1 lg:inline">
                Medellín, Antioquia.
              </span>
            </p>
          </div>
          <div className="footerInfoRight">
            <p className="mb-1">NUESTRO SOCIO</p>
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
