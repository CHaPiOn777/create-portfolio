gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true,
  smoothTouch: 0.1,
});

gsap.fromTo('.header-section', { opacity: 1, transition: 'opacity 1s' }, {
  opacity: 0,
  transition: 'opacity .5s',
  scrollTrigger: {
    trigger: '.header-section',
    start: 'center',
    end: '70vh',

    scrub: true,
  }
})

let itemsL = gsap.utils.toArray('.left-column .gallery__item');

itemsL.forEach(item => {
  gsap.fromTo(item, { x: -150, opacity: 0 }, {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-1000',
      end: '-100',
      scrub: true
    }
  })
})

let itemsR = gsap.utils.toArray('.right-column .gallery__item');

itemsR.forEach(item => {
  gsap.fromTo(item, { x: 100, opacity: 0 }, {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-1000',
      end: '-100',
      scrub: true
    }
  })
})