import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { homeTestimonials, brands } from "../../../recoil/atoms";

const Customers = () => {
  const { title, cardContent } = useRecoilValue(homeTestimonials);
  const companyLogos = useRecoilValue(brands);

  return (
    <section className="customersContent">
      <h3>{title}</h3>
      <Testimonials cardContent={cardContent} />
      <Brands companyLogos={companyLogos} />
    </section>
  );
};

export default Customers;
