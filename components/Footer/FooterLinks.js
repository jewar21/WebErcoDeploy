import Link from "next/link";

import PropTypes from "prop-types";

const FooterLinks = ({ links, contacts, country }) => {
  return (
    <div className="footerLinksContainer">
      <div className="footerlinksContentRight">
        {links.map(({ name, href }, i) => (
          <Link key={i} href={`/${country}${href}`}>
            <a className="footerLink">{name}</a>
          </Link>
        ))}
      </div>
      <div className="footerlinksContentRight mt-4 lg:mt-0">
        {contacts.map(({ country, email, href }, i) => (
          <div key={i}>
            <p className="footerLinkTitle">{country}</p>
            <Link href={href}>
              <a className="footerLink">{email}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

FooterLinks.propTypes = {
  links: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired
};

export default FooterLinks;
