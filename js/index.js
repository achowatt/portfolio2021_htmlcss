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
      duration: 1.5,
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

// sections:
const h1 = document.querySelectorAll("h1");
const landing = document.querySelector("#landing");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");

h1.forEach((h) => {
  h.style.opacity = 0;
});

function callBack(entries, observer) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "scale(1)";
      // entry.target.style.transform = "translate(0,0)";
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = "scale(0.5)";
      // entry.target.style.transform = "translate(200px)";
    }
  }
}

const observer = new IntersectionObserver(callBack, { threshold: 0 });

observer.observe(landing);
observer.observe(about);
observer.observe(skills);
observer.observe(contact);
