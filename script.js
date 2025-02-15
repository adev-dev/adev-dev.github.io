// Scroll animations with GSAP
document.addEventListener("DOMContentLoaded", () => {
    gsap.utils.toArray(".section").forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: section }
        );
    });

    // Hover effect on projects
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseenter", () => {
            gsap.to(project, { scale: 1.1, duration: 0.3 });
        });
        project.addEventListener("mouseleave", () => {
            gsap.to(project, { scale: 1, duration: 0.3 });
        });
    });
});
