
// ============𝗧𝗼𝗴𝗴𝗹𝗲 𝗜𝗰𝗼𝗻 𝗡𝗮𝘃𝗯𝗮𝗿===========//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ============𝗦𝗰𝗿𝗼𝗹𝗹 𝗦𝗲𝗰𝘁𝗶𝗼𝗻 𝗔𝗰𝘁𝗶𝘃𝗲 𝗟𝗶𝗻𝗸===========//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ============ 𝗦𝘁𝗶𝗰𝗸𝘆 𝗡𝗮𝘃𝗯𝗮𝗿===========//
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ============𝗥𝗲𝗺𝗼𝘃𝗲 𝗧𝗼𝗴𝗴𝗹𝗲 𝗜𝗰𝗼𝗻 𝗡𝗮𝘃𝗯𝗮𝗿 𝗪𝗵𝗲𝗻 𝗖𝗹𝗶𝗰𝗸 𝗡𝗮𝘃𝗯𝗮𝗿 𝗟𝗶𝗻𝗸 (𝗦𝗰𝗿𝗼𝗹𝗹)===========//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ============ 𝗦croll Reveal ===========//
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 250
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .items-box, .content form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ============ 𝗧𝘆𝗽𝗲𝗱 𝗝𝗦 ===========//
const typed = new Typed('.multiple-text', {
    strings: ['Lightning', 'Decoration House', 'Celebrate'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1100,
    loop: true
});

// ============Toggle Bulb Switch===========//
let btn = document.querySelector('.btn');
let body = document.querySelector('body');
btn.onclick = function () {
    body.classList.toggle('on');
}
