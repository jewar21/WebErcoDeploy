// data
import { paymentMethods as dataPayment } from "../../../content/data/servicesData";

import QuoteButton from "../../PartialComponents/QuoteButton";

const PaymentMethods = ({ colorPrimary }) => {
  return (
    <section
      className={colorPrimary ? "w-screen bg-primary-500" : "paymentContainer"}
    >
      <div className="paymentContent globalContent">
        <div
          className={
            colorPrimary
              ? "text-darkGrey-900 paymentText"
              : "text-lightGrey-100 paymentText"
          }
        >
          <h3>{dataPayment.title}</h3>
          <p>{dataPayment.description}</p>
          <span>{dataPayment.methods}</span>
        </div>
        <div className="paymentButton">
          <QuoteButton
            buttonParameters={
              colorPrimary
                ? "w-[8.75rem] h-12 lg:w-44 lg:h-14 font-semibold bg-darkGrey-700 text-lightGrey-100 mr-6"
                : "w-[8.75rem] h-12 lg:w-44 lg:h-14 font-semibold bg-primary-500 text-darkGrey-900 mr-6"
            }
            buttonText={"Conoce más"}
            isIcon={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
