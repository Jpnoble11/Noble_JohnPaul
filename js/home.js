const sr = ScrollReveal({
  distance: '40px',
  duration: 2000,
  reset: true,
})

sr.reveal('header', { delay: 600, origin: 'top' })
sr.reveal('.home-text span', { delay: 600, origin: 'top' })
sr.reveal('.home-text h1', { delay: 680, origin: 'left' })
sr.reveal('.home-text p', { delay: 750, origin: 'right' })
sr.reveal('.main-btn', { delay: 860, origin: 'left' })
sr.reveal('.home-img', { delay: 950, origin: 'right' })
sr.reveal('.social', { delay: 950, origin: 'bottom' })
sr.reveal('section', { delay: 600, origin: 'bottom' })
sr.reveal('section h2', { delay: 700, origin: 'top' })
sr.reveal('.about-img, .contact-img', { delay: 800, origin: 'left' })
