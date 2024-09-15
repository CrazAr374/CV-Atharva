// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animate the name
    gsap.from('.name', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Animate the avatar
    gsap.from('.avatar', {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Animate the contact information
    gsap.from('.contact ul li', {
        duration: 0.5,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 1
    });

    // Animate the social media icons
    gsap.from('.contact .link li', {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 1.5
    });

    // Animate the work experience and education items
    gsap.from('.list .item', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 2
    });

    // Animate the skill circles
    gsap.from('.skill li', {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
        delay: 2.5
    });
});