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

//Change black bg to white -- scrolling between landing and about
const landing = document.querySelector("#landing");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const textBackground = document.querySelectorAll(".home-sections > .content");
const navText = document.querySelectorAll(".nav-buttons li");
const mediaQuery = window.matchMedia("screen and (max-width: 923px)");

function changeBackground(entries, observer) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      main.style.background = "#0a0a0a";
      body.style.color = "white";
      header.style.background = "rgb(10 10 10 / 70%)";
      navText.forEach((nav) => (nav.style.color = "color: #ff0d2e"));

      //mobile
      mobileBackgroundBlack(mediaQuery);
    } else {
      main.style.background = "white";
      body.style.color = "rgb(56, 46, 46)";
      header.style.background = "#ffedf1";
      navText.forEach((nav) => (nav.style.color = "color:#860000;"));

      //mobile
      mobileBackgroundWhite(mediaQuery);
    }
  }
}
const observer2 = new IntersectionObserver(changeBackground, {
  threshold: 0.7,
});

observer2.observe(landing);

//Add background for mobile (for visibility when scrolling down between landing and about)
mediaQuery.addEventListener("change", mobileBackgroundBlack(mediaQuery));
mediaQuery.addEventListener("change", mobileBackgroundWhite(mediaQuery));

function mobileBackgroundBlack(e) {
  if (e.matches) {
    textBackground.forEach((b) => (b.style.background = "#ffffff00"));
  }
}

function mobileBackgroundWhite(e) {
  if (e.matches) {
    textBackground.forEach((b, index) => {
      index === 0
        ? (b.style.background = "#ffffff00")
        : (b.style.background = "#ffffffd6");
    });
  } else {
    textBackground.forEach((b) => (b.style.background = "unset"));
  }
}
