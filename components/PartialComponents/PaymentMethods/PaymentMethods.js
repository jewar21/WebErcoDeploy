// data
import { paymentMethods as dataPayment } from "../../../content/data/servicesData";

import QuoteButton from "../../PartialComponents/QuoteButton";

const PaymentMethods = () => {
  return (
    <section>
      <div>
        <h3>{dataPayment.title}</h3>
        <small>{dataPayment.description}</small>
        <small>{dataPayment.methods}</small>
      </div>
      <div>
        <QuoteButton
          buttonParameters={
            "w-10.5rem h-12 lg:w-48 lg:h-14 font-semibold bg-primary-500 text-darkGrey-900 mr-6"
          }
          buttonText={"Conoce más"}
          isIcon={false}
        />
      </div>
    </section>
  );
};

export default PaymentMethods;
