import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="footerLinksContainer">
      <div className="footerlinksContentRight">
        <Link href="/">
          <a className="footerLinkTitle">Erco</a>
        </Link>
        <Link href="/">
          <a className="footerLink">Blog</a>
        </Link>
        <Link href="/">
          <a className="footerLink">FAQ</a>
        </Link>
        <Link href="/">
          <a className="footerLink">Contáctanos</a>
        </Link>
        <Link href="/">
          <a className="footerLink">Trabaja con nosotros</a>
        </Link>
        <Link href="/">
          <a className="footerLink">Políticas de privacidad</a>
        </Link>
      </div>
      <div className="footerlinksContentRight mt-4 lg:mt-0">
        <p className="footerLinkTitle">Colombia</p>
        <Link href="mailto:comercial@ercoenergia.com.co?subject=Questions">
          <a className="footerLink">comercial@ercoenergia.com.co</a>
        </Link>
        <p className="footerLinkTitle">Panamá</p>
        <Link href="mailto:cramirez@ercoenergia.com.pa?subject=Questions">
          <a className="footerLink">cramirez@ercoenergia.com.pa</a>
        </Link>
        <p className="footerLinkTitle">San Antonio - Texas</p>
        <Link href="mailto:info@ercoenergy.us?subject=Questions">
          <a className="footerLink">info@ercoenergy.us</a>
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
