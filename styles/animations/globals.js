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
          "+=" + document.querySelector(".ercosystemContainer").offsetWidth
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

export const sidebarAnimations = (images, texts, card, counter) => {
  // ScrollTrigger.scrollerProxy(".scroller", {
  //   scrollTop(value) {
  //     if (arguments.length) {
  //       bodyScrollBar.scrollTop = value;
  //     }
  //     return bodyScrollBar.scrollTop;
  //   }
  // });

  // bodyScrollBar.addListener(ScrollTrigger.update);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "section.ecosystemContainer",
        start: () => "top -" + window.innerHeight * 0,
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
      }
    })
    .to(card, { marginTop: 55, ease: "power3.out" });

  // ----------------------------------------------------------------------

  images.forEach((image, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.ecosystemContainer",
        // scroller: ".scroller",
        start: () => "top -" + window.innerHeight * (i + 0.5),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
      }
    });

    tl.to(image, { width: 0 });
  });

  // ----------------------------------------------------------------------

  texts.forEach((text, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.ecosystemContainer",
        // scroller: ".scroller",
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
      }
    });
    if (i === 0) {
      tl.to(text, { duration: 0.2, opacity: 0, x: "-10%" });
    } else if (i === 2) {
      tl.to(text, { duration: 0.2, opacity: 1, x: 0 });
    } else {
      tl.to(text, { duration: 0.2, opacity: 1, x: 0 }).to(
        text,
        { duration: 0.33, opacity: 0, x: "-10%" },
        0.66
      );
    }
  });
  // ----------------------------------------------------------------------

  counter.forEach((count, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.ecosystemContainer",
        // scroller: ".scroller",
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
      }
    });
    if (i === 0) {
      tl.to(count, { duration: 0.2, opacity: 0, y: "5%" });
    } else if (i === 2) {
      tl.to(count, { duration: 0.2, opacity: 1, y: 0 }).to(
        "#progress",
        {
          width: `${(3 / 3) * 100}%`
        },
        0
      );
    } else {
      tl.to(count, { duration: 0.2, opacity: 1, y: 0 })
        .to(count, { duration: 0.33, opacity: 0, y: "5%" }, 0.66)
        .to(
          "#progress",
          {
            width: `${(2 / 3) * 100}%`
          },
          0
        );
    }
  });

  // ----------------------------------------------------------------------

  ScrollTrigger.create({
    trigger: "section.ecosystemContainer",
    // scroller: ".scroller",
    scrub: true,
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + (images.length + 1) * window.innerHeight,
    invalidateOnRefresh: true
  });
};
