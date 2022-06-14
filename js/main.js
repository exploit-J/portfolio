const toTopButton_PC = document.querySelector(".top-button-pc");
const sectionTitle = document.querySelectorAll("main h2");
const titleBorder = document.querySelectorAll(".title-border");
const header = document.querySelector("header");
const aboutImg = document.querySelector(".about-wrap .img");
const aboutParagraph = document.querySelectorAll(".about .introduce p");
const skillSection = Array.from(
  document.querySelector(".skill .desc").children
);
console.log(skillSection);
const portfolioSection = document.querySelectorAll(".pf-wrapper");
const portfolioItem = document.querySelectorAll(".portfolio.mo .pf-item");

// section appear event
const sectionEvent = () => {
  let viewHeight = window.innerHeight;
  sectionTitle.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 100) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  titleBorder.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (viewHeight > itemH + 100) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  const aboutH = aboutImg.getBoundingClientRect().top;
  if (viewHeight > aboutH + 100) {
    aboutImg.classList.add("active");
  } else {
    aboutImg.classList.remove("active");
  }

  aboutParagraph.forEach((item) => {
    const paraH = item.getBoundingClientRect().top;
    if (viewHeight > paraH + 100) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  // skill섹션부터 작업 진행. 포폴섹션 데탑버전 마진탑
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
  if (window.scrollY >= 1000) {
    toTopButton_PC.classList.add("active");
  } else if (window.scrollY < 1000) {
    toTopButton_PC.classList.remove("active");
  }
};
toTopButton_PC.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", _.throttle(topButtonActivePC, 300));
