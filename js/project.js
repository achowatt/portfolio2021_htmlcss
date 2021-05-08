gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline();

timeline
  .to("text", {
    //first scene
    stagger: 0.2,
    y: 100,
    ease: "bounce",
    opacity: 0,
    delay: 1,
    duration: 1,
  })
  .to(
    "#flower",
    {
      rotation: 360,
      scale: 2,
      transformOrigin: "50% 50%",
      duration: 1,
      delay: 1,
    },
    "<"
  )
  .to("#top", {
    //second scene
    y: -200,
    duration: 0.2,
  })
  .to(
    "#right",
    {
      x: 200,
      duration: 0.2,
    },
    "<0.2"
  )
  .to(
    "#bottom",
    {
      y: 200,
      duration: 0.2,
    },
    "<0.2"
  )
  .to(
    "#left",
    {
      x: -200,
      duration: 0.2,
    },
    "<0.2"
  )
  .to("text", {
    stagger: 0.2,
    y: 0,
    rotation: 360,
    opacity: 1,
    duration: 1,
  })
  .to(
    "#center",
    {
      scale: 2,
      transformOrigin: "50% 50%",
    },
    "<"
  )
  .to("#center", {
    //third scene
    duration: 1,
  })
  .to(
    "#top",
    {
      y: 0,
      ease: "bounce",
    },
    "<"
  )
  .to(
    "#right",
    {
      x: 0,
      ease: "bounce",
    },
    "<"
  )
  .to(
    "#bottom",
    {
      y: 0,
      ease: "bounce",
    },
    "<"
  )
  .to(
    "#left",
    {
      x: 0,
      ease: "bounce",
    },
    "<"
  )
  .to(
    "#flower",
    {
      rotation: -360,
      duration: 2,
      opacity: 1,
    },
    "<"
  )
  .to(
    "text",
    {
      stagger: 0.2,
      opacity: 1,
    },
    "<0.2"
  )
  .to(
    "#center",
    {
      duration: 1,
      scale: 1,
    },
    "<"
  )
  .to("#flower", {
    scale: 1,
    duration: 1,
  });

const arrowButton = document.querySelector(".arrow-down");
const bookStore = document.querySelector("#book_store");
function arrowDown(entries, observer) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      arrowButton.style.visibility = "hidden";
    } else {
      arrowButton.style.visibility = "visible";
    }
  }
}

const arrow = new IntersectionObserver(arrowDown, { threshold: 0.2 });
arrow.observe(bookStore);
