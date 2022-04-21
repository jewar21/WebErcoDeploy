import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Steps = ({ dataSteps }) => {
  const title = dataSteps.title;
  const content = dataSteps.steps;
  return (
    <section className="stepsContainer">
      <div className="stepsContent globalContent">
        <h3>{title}</h3>
        <div className="steps">
          {content.map((step, index) => (
            <div className="stepInfo" key={index}>
              <h3>{step.number}</h3>
              <p>{step.description}</p>
              <span>{step.info}</span>
            </div>
          ))}
        </div>
        <div className="stepsSwiper">
          <Swiper
            // effect={"coverflow"}
            slidesPerView={2}
            spaceBetween={70}
            centeredSlides={true}
            loop={false}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            className="mySwiper"
          >
            {content.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="stepInfo">
                  <h3>{step.number}</h3>
                  <p>{step.description}</p>
                  <span>{step.info}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Steps;
