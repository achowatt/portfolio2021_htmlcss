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

const sections = document.querySelectorAll("section");

function callBack(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
      // entry.target.classList.add("hide");
      // console.log(entry.target.children[0].children[0].classList);
    }
    entry.target.classList.remove("hide");
    console.log(entry.target.children[0].children[0].classList);
  });
}

const observer = new IntersectionObserver(callBack, { threshold: 0.4 });

sections.forEach((section) => {
  observer.observe(section);
  section.classList.add("hide");
});
