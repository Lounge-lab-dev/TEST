    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 6000); // Auto change every 4s

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(CustomEase);

  CustomEase.create(
    "hop",
    "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
  );

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll(".link");
    const socialLinks = document.querySelectorAll(".socials p");
    let isAnimating = false;

    const splitTextIntoSpans = (selector) => {
  let elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    let text = element.innerText;
    let splitText = text
      .split("")
      .map((char) => {
        return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
      })
      .join("");
    element.innerHTML = splitText;
  });
};

splitTextIntoSpans(".header h1");

menuToggle.addEventListener("click", () => {
  if (isAnimating) return;

  if (menuToggle.classList.contains("closed")) {
    menuToggle.classList.remove("closed");
    menuToggle.classList.add("opened");
    isAnimating = true;

gsap.to(menu, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "hop",
  duration: 1.5,
  onStart: () => {
    menu.style.pointerEvents = "all";
  },
  onComplete: () => {
    isAnimating = false;
  }
});

gsap.to(links, {
  y: 0,
  opacity: 1,
  stagger: 0.1,
  delay: 0.85,
  duration: 1,
  ease: "power3.out",
});

gsap.to(socialLinks, {
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 0.85,
  duration: 1,
  ease: "power3.out",
});

gsap.to(".video-wrapper", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "hop",
  duration: 1.5,
  delay: 0.5,
});

gsap.to(".header h1 span", {
  rotateY: 0,
  stagger: 0.05,
  delay: 0.75,
  duration: 1.5,
  ease: "power4.out",
});

gsap.to(".header h1 span", {
  y: 0,
  scale: 1,
  stagger: 0.05,
  delay: 0.5,
  duration: 1.5,
  ease: "power4.out",
});

  } else {
    menuToggle.classList.remove("opened");
    menuToggle.classList.add("closed");
    isAnimating = true;

    gsap.to(menu, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "hop",
      duration: 1.5,
      onComplete: () => {
        menu.style.pointerEvents = "none";
        gsap.set(menu, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });

        gsap.set(links, { y: 30, opacity: 0 });
        gsap.set(socialLinks, { y: 30, opacity: 0 });
        gsap.set(".video-wrapper", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.set(".header h1 span", {
          y: 500,
          rotateY: 90,
          scale: 0.75,
        });

        isAnimating = false;

      },
    });
  }
});

});

const navContainer = document.querySelector(".nav-container");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down → shrink
    navContainer.style.gap = "15px";
  } else {
    // Scrolling up → expand
    navContainer.style.gap = "60px";
  }

  lastScrollY = currentScrollY; // update last scroll position
});
