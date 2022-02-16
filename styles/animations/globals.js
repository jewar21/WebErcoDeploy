import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// ------------Slider-------------
gsap.registerPlugin(ScrollTrigger);

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

export const accordionBody = {
  displacement: {
    opacity: 0,
    y: "-30"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.1
    }
  }
};

export const sidebarAnimations = (images, phoneImgs, texts, card, counter) => {
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
    .to(card, { duration: 0.33, marginTop: 55, ease: "power3.out" })
    .to("#panel-phone", { duration: 0.6, top: "22%" });

  // ----------------------------------------------------------------------

  images.forEach((image, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.ecosystemContainer",
        start: () => "top -" + window.innerHeight * (i + 0.5),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
      }
    });

    tl.to(image, { opacity: 0 }, 0.1);
  });
  // ----------------------------------------------------------------------

  phoneImgs.forEach((phone, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.ecosystemContainer",
        start: () => "top -" + window.innerHeight * (i + 0.5),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
      }
    });

    tl.to(phone, { opacity: 0, right: 50 }, 0.1);
  });

  // ----------------------------------------------------------------------

  texts.forEach((text, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.ecosystemContainer",
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
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
      }
    });
    if (i === 0) {
      tl.to(count, { duration: 0.33, opacity: 0, y: "1%" }, 0.66);
    } else if (i === 2) {
      tl.to(count, { duration: 0.33, opacity: 1, y: 0 }, 0.66).to(
        "#progress",
        {
          width: `${(3 / 3) * 100}%`
        },
        0.66
      );
    } else {
      tl.to(count, { duration: 0.33, opacity: 1, y: 0 })
        .to(count, { duration: 0.33, opacity: 0, y: "1%" }, 0.66)
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
    scrub: true,
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + (images.length + 1) * window.innerHeight,
    invalidateOnRefresh: true
  });
};
