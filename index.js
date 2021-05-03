gsap.registerPlugin(ScrollTrigger);

//For changing home page background
// const landing = document.querySelector(".landing-page");
// const main = document.querySelector("main");
// const nav = document.querySelector("nav ul");
// const image = document.querySelector(".display-image");
// const option = {
//   threshold: 0.51,
// };
// function callBack(entries) {
//   console.log(entries[0]);
//   if (!entries[0].isIntersecting) {
//     main.classList.remove("blackBackground");
//     nav.classList.remove("whiteFont");
//     image.classList.add("border");
//   } else {
//     main.classList.add("blackBackground");
//     nav.classList.add("whiteFont");
//     image.classList.remove("border");
//   }
// }
// const observer = new IntersectionObserver(callBack, option);
// observer.observe(landing);

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
  end: "bottom bottom",
  animation: timeline,
  scrub: 1,
});
