/**
 * Animation System: Scroll Reveal, Counter Animation, Parallax
 * Vanilla JS, no dependencies
 */

(function () {
  // Configuration
  const CONFIG = {
    revealThreshold: 0.1,
    counterDuration: 800,
    typingSpeed: 50,
  };

  // Scroll Reveal with IntersectionObserver
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animationType = el.getAttribute("data-reveal");
            const staggerIndex = el.getAttribute("data-stagger") || 0;

            if (animationType) {
              el.classList.add("reveal", "reveal--" + animationType);
              if (staggerIndex) {
                el.classList.add("reveal--stagger-" + staggerIndex);
              }
            }

            observer.unobserve(el);
          }
        });
      },
      {
        threshold: CONFIG.revealThreshold,
      }
    );

    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      observer.observe(el);
    });
  }

  // Counter animation for statistics
  function animateCounter(el, target, duration) {
    const start = 0;
    const isPercentage = el.textContent.includes("%");
    const finalValue = isPercentage ? parseFloat(target) : parseInt(target);
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: ease-out-cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(start + (finalValue - start) * easeProgress);
      el.textContent = isPercentage ? current + "%" : current + "+";

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  // Initialize counters on stats section
  function initCounters() {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll("[data-counter]");
            counters.forEach(function (counter) {
              const target = counter.getAttribute("data-counter");
              const value = counter.textContent.trim();
              if (!counter.classList.contains("counting")) {
                counter.classList.add("counting");
                animateCounter(counter, target, CONFIG.counterDuration);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.querySelector("[data-stats-section]");
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  // Typed effect for status badge
  function initTypedEffect() {
    const typedElements = document.querySelectorAll("[data-typed]");
    typedElements.forEach(function (el) {
      const text = el.getAttribute("data-typed");
      const originalContent = el.innerHTML;

      el.innerHTML = "";
      let index = 0;

      function type() {
        if (index < text.length) {
          el.textContent += text.charAt(index);
          index++;
          setTimeout(type, CONFIG.typingSpeed);
        } else {
          el.innerHTML = originalContent;
        }
      }

      // Start when element is visible
      const observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            type();
            observer.unobserve(el);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
    });
  }

  // Parallax effect on scroll
  function initParallax() {
    const parallaxElements = document.querySelectorAll("[data-parallax]");
    let ticking = false;

    function updateParallax() {
      const scrolled = window.scrollY;

      parallaxElements.forEach(function (el) {
        const speed = el.getAttribute("data-parallax") || 0.5;
        const yPos = scrolled * speed;
        el.style.transform = "translateY(" + yPos + "px)";
      });

      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }

  // Smooth scroll anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#") return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Intersection Observer for continuous scroll effects
  function initScrollEffects() {
    const observerOptions = {
      threshold: [0, 0.5, 1],
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-scroll-effect]").forEach(function (el) {
      observer.observe(el);
    });
  }

  // Initialize all animations
  function init() {
    initScrollReveal();
    initCounters();
    initTypedEffect();
    initParallax();
    initSmoothScroll();
    initScrollEffects();
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Export to global for manual triggers
  window.PortfolioAnimations = {
    animateCounter: animateCounter,
    initScrollReveal: initScrollReveal,
  };
})();
