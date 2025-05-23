const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* scroll sections active link */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__list a[href*="' + sectionId + '"]'); // pridanie správnych úvodzoviek

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
/* scroll sections active link */

/* Scroll animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, // Animations repeat
})

sr.reveal('.perfil')
sr.reveal('.info', {origin: 'left', delay: 800})
sr.reveal('.skills', {origin: 'left', delay: 1000})
sr.reveal('.about', {origin: 'right', delay:1200})
sr.reveal('.projects__card, .services__card, .experience__card', {interval: 100})

/* Email js */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sedEmail = (e) =>{
    e.prevedtDefault()

    emailjs.sedForm('','','','')
}
contactForm.addEventListener('submit', sedEmail)

/* tento kód je na ochranu form pred botmi */
document.addEventListener("DOMContentLoaded", function () {
    const formLoadField = document.getElementById("form_load_time");
    if (formLoadField) {
      const now = Date.now();
      formLoadField.value = now;
    }
  });

  console.log("🕒 Ochrana formulára aktivovaná");