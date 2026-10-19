export const initAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#hero-content h1", {
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from("#hero-content p", {
    opacity: 0,
    y: 20,
    delay: 0.5,
    duration: 1,
    ease: "power3.out"
  });

  const reveals = document.querySelectorAll('#services > div, #mission-text, #pricing');
  
  reveals.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  const header = document.querySelector('header');
  ScrollTrigger.create({
    start: "top -80",
    onUpdate: (self) => {
      if (self.direction === 1) {
        header.classList.add('py-4', 'bg-[#0F172A]');
        header.classList.remove('py-5');
      } else {
        header.classList.remove('py-4');
        header.classList.add('py-5');
      }
    }
  });
};