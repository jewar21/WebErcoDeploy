import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// ------------Slider-------------
gsap.registerPlugin(ScrollTrigger);

export const sliderAnimation = (e) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".ecosystemContainer",
        pin: true,
        scrub: 0.01,
        toggleActions: "restart pause reverse pause",
        markers: true,
        snap: 1 / (e.length - 1),
        //     // base vertical scrolling on how wide the container is so it feels more natural.
        end: () =>
          "+=" + document.querySelector(".ecosystemContainer").offsetWidth
      }
      // duration: 3,
    })
    .to(e, {
      xPercent: -100 * (e.length - 1),
      ease: "none"
    });
};

export const containerInfo = {
  displacement: {
    opacity: 0,
    x: "-100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5
    }
  }
};
