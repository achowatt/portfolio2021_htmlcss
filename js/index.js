gsap.registerPlugin(ScrollTrigger);

//For changing images
let timeline = gsap.timeline();

timeline
  .fromTo(
    ".landing-img",
    {
      opacity: 1,
    },
    {
      duration: 1,
      opacity: 0,
      scale: 2,
    }
  )
  .fromTo(
    ".anna-img",
    { opacity: 0, scale: 2 },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
    }
  )
  .to(".anna-img", {
    duration: 1,
    opacity: 0,
  })
  .to(".skills-img", {
    duration: 1,
    opacity: 1,
  })
  .to(".skills-img", {
    duration: 1,
    opacity: 0,
  })
  .to(".contact-img", {
    duration: 1,
    opacity: 1,
  });

ScrollTrigger.create({
  trigger: "main",
  start: "top top",
  end: "75% top",
  animation: timeline,
  scrub: 1,
});

const greeting = document.querySelector(".greeting");

function callBack(entry, observer) {
  if (entry[0].isIntersecting) {
    entry[0].target.classList.add("bounce");
  } else {
    entry[0].target.classList.remove("bounce");
  }
}

const observer = new IntersectionObserver(callBack, { threshold: 0.5 });

observer.observe(greeting);
