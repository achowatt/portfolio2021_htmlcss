gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline();

timeline
  .to("text", {
    stagger: 0.2,
    y: 100,
    ease: "bounce",
    opacity: 0,
    duration: 2,
  })
  .to(
    "#flower",
    {
      rotation: 360,
      scale: 2,
      transformOrigin: "50% 50%",
      duration: 2,
    },
    "<"
  )
  .to("text", {
    stagger: 0.2,
    y: 0,
    rotation: 360,
    opacity: 1,
    duration: 2,
  })
  .to(
    "#flower",
    {
      rotation: 0,
      scale: 1,
      transformOrigin: "50% 50%",
      duration: 2,
    },
    "<"
  );

ScrollTrigger.create({
  trigger: "main",
  start: "top top",
  end: "bottom bottom",
  animation: timeline,
  scrub: 1,
});
