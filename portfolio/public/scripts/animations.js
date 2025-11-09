(function () {
  function safeRegister() {
    if (window.gsap && window.gsap.registerPlugin && window.ScrollTrigger) {
      try {
        window.gsap.registerPlugin(window.ScrollTrigger);
      } catch (e) {}
    }
  }

  function initAnimations() {
    if (typeof window === "undefined") return;
    if (!window.gsap) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (ScrollTrigger && gsap.registerPlugin)
      gsap.registerPlugin(ScrollTrigger);

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    (function headerScroll() {
      const header = document.querySelector(".header");
      if (!header) return;
      let ticking = false;
      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            header.classList.toggle("scrolling", window.scrollY > 20);
            ticking = false;
          });
          ticking = true;
        }
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    })();

    (function hero() {
      const heroContent = document.querySelector(".hero__content");
      if (!heroContent) return;
      const timeline = gsap.timeline({
        defaults: { duration: 0.9, ease: "power3.out" },
      });
      timeline.from(".hero__content h1", { y: 40, opacity: 0 });
      timeline.from(
        [".hero__content p", ".hero__content .btn", ".hero__content a"],
        { y: 18, opacity: 0, stagger: 0.12 },
        "-=0.45"
      );
    })();

    (function projects() {
      const grids = gsap.utils.toArray(".grid");
      grids.forEach((grid) => {
        const projects = grid.querySelectorAll(".project");
        if (!projects.length) return;

        gsap.from(projects, {
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        });

        if (window.matchMedia && !window.matchMedia("(hover: none)").matches) {
          projects.forEach((card) => {
            const img = card.querySelector("img");
            let enterAnim, leaveAnim;
            card.addEventListener("mouseenter", () => {
              if (enterAnim) enterAnim.kill();
              if (leaveAnim) leaveAnim.kill();
              enterAnim = gsap.timeline();
              enterAnim.to(card, {
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                duration: 0.35,
                ease: "power2.out",
              });
              if (img)
                enterAnim.to(
                  img,
                  { scale: 1.03, duration: 0.6, ease: "power2.out" },
                  0
                );
            });
            card.addEventListener("mouseleave", () => {
              if (enterAnim) enterAnim.kill();
              if (leaveAnim) leaveAnim.kill();
              leaveAnim = gsap.timeline();
              leaveAnim.to(card, {
                scale: 1,
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                duration: 0.45,
                ease: "power2.out",
              });
              if (img)
                leaveAnim.to(
                  img,
                  { scale: 1, duration: 0.6, ease: "power2.out" },
                  0
                );
            });
          });
        }
      });
    })();

    (function about() {
      const aboutGrid = document.querySelector(".about .grid");
      if (!aboutGrid) return;
      gsap.from(aboutGrid.querySelectorAll(".about__content, .about__image"), {
        scrollTrigger: {
          trigger: aboutGrid,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: 40,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
      });
    })();

    (function contact() {
      const contactRoot =
        document.querySelector("#contact") || document.querySelector("footer");
      if (!contactRoot) return;
      gsap.from(
        contactRoot.querySelectorAll(
          ".title, .mail, .social-links li, .address-info"
        ),
        {
          scrollTrigger: {
            trigger: contactRoot,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 28,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    })();

    (function heroParallax() {
      if (
        !(window.matchMedia && window.matchMedia("(min-width: 768px)").matches)
      )
        return;
      const hero = document.querySelector(".hero");
      if (!hero) return;
      gsap.to(hero, {
        backgroundPosition: "center 20%",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    })();

    window.addEventListener("beforeunload", () => {
      try {
        if (window.ScrollTrigger && window.ScrollTrigger.getAll) {
          window.ScrollTrigger.getAll().forEach((t) => t.kill());
        }
      } catch (e) {}
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAnimations);
  } else {
    initAnimations();
  }
})();
