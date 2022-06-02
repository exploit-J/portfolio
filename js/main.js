const toTopButton_PC = document.querySelector(".top-button-pc");
const sectionTitle = document.querySelectorAll("main h2");
const titleBorder = document.querySelectorAll(".title-border");
const header = document.querySelector("header");
const aboutSection = Array.from(document.querySelector(".about-wrap").children);
const skillSection = Array.from(
  document.querySelector(".skill .desc").children
);
const portfolioSection = document.querySelectorAll(".pf-wrapper");
const portfolioItem = document.querySelectorAll(".portfolio.mo .pf-item");

// section appear event
const sectionEvent = () => {
  let viewHeight = window.innerHeight;
  sectionTitle.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 200) {
      item.classList.add("active");
    }
  });
  titleBorder.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 200) {
      item.classList.add("active");
    }
  });
  aboutSection.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 200) {
      item.classList.add("active");
    }
  });
  skillSection.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 200) {
      item.classList.add("active");
    }
  });
  portfolioSection.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 200) {
      item.classList.add("active");
    }
  });
  portfolioItem.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 200) {
      item.classList.add("active");
    }
  });
};
window.addEventListener("scroll", _.throttle(sectionEvent, 300));

// move to top active
const topButtonActivePC = () => {
  if (window.scrollY >= header.offsetHeight * 1.1) {
    toTopButton_PC.classList.add("active");
  } else if (window.scrollY < header.offsetHeight * 1.1) {
    toTopButton_PC.classList.remove("active");
  }
};
toTopButton_PC.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", _.throttle(topButtonActivePC, 300));
