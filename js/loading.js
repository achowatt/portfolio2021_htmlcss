//loading
let loading = gsap.timeline();

function removeElement(element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  return function () {
    element.parentNode.removeChild(element);
  };
}

loading
  .to(".small-circle", { opacity: 1, stagger: 0.1 })
  .to(".inner-parts", { opacity: 1, stagger: 0.1 }, "-=1")
  .to("#preloader", { opacity: 0, duration: 1 })
  .call(removeElement("#preloader"));
