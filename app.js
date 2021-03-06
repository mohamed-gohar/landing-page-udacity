/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
// const t1 = performance.now();
/**
 * Define Global Variables
 *
 */
import "core-js/stable";
import "intersection-observer";

const navbarList = element("#navbar__list"),
  landingContainer = elements("section"),
  navbar = element(".page__header"),
  scrollToTop = element(".scroll-to-top"),
  fragmentList = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//select element
function element(ele) {
  return document.querySelector(ele);
}
//select elements
function elements(eles) {
  return document.querySelectorAll(eles);
}

// remove class active
function removeActive(ele, className = "active") {
  ele.forEach((el) => {
    el.classList.remove(className);
  });
}

// add class active
function addActive(ele, className = "active") {
  ele.classList.add(className);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
landingContainer.forEach((section) => {
  const li = document.createElement("li");
  const anchorLink = document.createElement("a");
  anchorLink.href = `#${section.id}`;
  anchorLink.classList.add("menu__link");
  anchorLink.textContent = section.dataset.nav;
  li.appendChild(anchorLink);
  fragmentList.appendChild(li);
});
navbarList.appendChild(fragmentList);

//select the appended lists
const menuLink = elements(".navbar__menu .menu__link");

// Add class 'active' to section or link when near top of viewport
landingContainer.forEach((sec) => {
  //loop of each section and apply IntersectionObserver
  // createObserver(sec);

  // navbar list sby by getBoundingClientRect
  window.addEventListener("scroll", function addAct() {
    if (
      innerHeight - sec.getBoundingClientRect().top + 1 >= innerHeight &&
      innerHeight - sec.getBoundingClientRect().bottom + 1 <= innerHeight &&
      !sec.classList.contains("active")
    ) {
      removeActive(landingContainer);
      addActive(sec);

      removeActive(menuLink);
      addActive(element(`.menu__link[href="#${sec.id}"]`));
    }
  });
});

// intersection observer function
function createObserver(ele) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.3],
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(ele);
}

//IntersectionObserver callback
function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.3) {
      const targetElement = entry.target;
      // Set sections as active
      removeActive(landingContainer);
      addActive(targetElement);

      // active link
      removeActive(menuLink);
      addActive(element(`.menu__link[href="#${targetElement.id}"]`));

      //change location hash
      // location.hash = `.${targetElement.id}`;
    }
  });
}

// Scroll to anchor ID using scrollTO event
function smoothScroll(e) {
  e.preventDefault();
  if (e.target.nodeName === "A" && !e.target.classList.contains("active")) {
    const hash = e.target.hash;

    location.hash = hash.slice(0, -1) + "-" + hash.slice(-1);

    // const offsetTop = element(hash).offsetTop;

    // if (
    //   (window.MSInputMethodContext && document.documentMode) ||
    //   window.navigator.userAgent.indexOf("Edge") > -1
    // ) {
    //   scroll(0, offsetTop);
    // } else {
    //   scroll({
    //     top: offsetTop,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // }

    goScroll(element(hash), 300);
  }
}
//navbar hide function
let hideNavbar;
function hideHeader() {
  navbar.style.transform = "translateY(0)";

  clearTimeout(hideNavbar);

  hideNavbar = setTimeout(() => {
    navbar.style.transform = "translateY(-100%)";
  }, 1300);
}
hideHeader();

// scroll to top
function scrollTopToggle() {
  if (pageYOffset <= 250) {
    scrollToTop.classList.add("hidden");
  } else {
    scrollToTop.classList.remove("hidden");
  }
}
function scrollTopClick() {
  // scroll({
  //   top: 0,
  //   behavior: "smooth",
  // });

  /**
   * smooth scroll with setinterval
   */
  // let i = pageYOffset;
  // let scrolltoo = setInterval(() => {
  //   if (i <= 100) clearInterval(scrolltoo);
  //   i -= 100;
  //   scrollTo(0, i);
  // }, 0);

  goScroll(0, 300);
}

// goScroll function [to element or to top]
function goScroll(element, timeout = 500) {
  const startPos = window.pageYOffset || document.documentElement.scrollTop,
    target = element ? element.getBoundingClientRect().top : 0;
  let start = null,
    pos = 0;
  /**
   * smooth scroll with requestAnimationFrame
   * @param {number} timestamp - changed each call
   */
  function sAnimation(timestamp) {
    if (!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start,
      progress = elapsed / timeout; //timeout - animation time (ms)

    //ease in function from https://github.com/component/ease/blob/master/index.js
    const outQuad = function (n) {
      return n * (2 - n);
    };
    let easeInPercentage = +outQuad(progress).toFixed(5);
    if (easeInPercentage > 0.98) easeInPercentage = 1;

    pos =
      target == 0
        ? startPos - startPos * easeInPercentage
        : startPos + target * easeInPercentage;
    // console.log(easeInPercentage, target, pos, startPos);
    scrollTo(0, pos);

    if (
      (target !== 0 && pos == startPos + target) ||
      (target == 0 && pos == 0)
    ) {
      window.cancelAnimationFrame(start);
      pos = 0;
    } else {
      window.requestAnimationFrame(sAnimation);
    }
  }
  window.requestAnimationFrame(sAnimation);
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// Scroll to section on link click
navbarList.addEventListener("click", smoothScroll);

//Hide fixed navigation bar while not scrolling or mousemove
window.addEventListener("scroll", function () {
  //hide navbar header
  hideHeader();
  //toggle scroll to top
  scrollTopToggle();
});
window.addEventListener("mousemove", function (e) {
  if (e.clientY <= navbar.clientHeight) {
    hideHeader();
  }
});
// scroll to top
scrollToTop.addEventListener("click", scrollTopClick);

// const t2 = performance.now();
// console.log(t2 - t1);
