import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";

import { testimonials } from "../../../content/data/homeData.js";
import { companyLogos } from "../../../content/data/homeData.js";

const Customers = () => {
  return (
    <section className="customers-container">
      <h3>{testimonials.title}</h3>
      <Testimonials testimonials={testimonials} />
      <Brands companyLogos={companyLogos} />
    </section>
  );
};

export default Customers;
