const toTopButton_PC = document.querySelector(".top-button-pc");
const sectionTitle = document.querySelectorAll("main h2");
const titleBorder = document.querySelectorAll(".title-border");
const header = document.querySelector("header");
const aboutSection = document.querySelector(".about-wrap");
const aboutImage = document.querySelector(".about .img");
const aboutIntroduce = document.querySelector(".introduce");
const skillSection = document.querySelector(".skill");
const skillIcon = document.querySelector(".icon-wrap");
const skillDesc = document.querySelector(".skill-desc");
const portfolioItem = document.querySelectorAll(".pf-wrapper");

// section appear event
const sectionEvent = () => {
  const skillSectionAni = () => {
    sectionTitle[1].style.animation = "title-appear 2s forwards";
    titleBorder[1].style.animation = "border-scale 1s forwards";
    skillIcon.style.animation = "side-move 1s forwards";
    skillDesc.style.animation = "side-move 1s forwards";
  };

  const portfolioSectionAni = () => {
    sectionTitle[2].style.animation = "title-appear 2s forwards";
    sectionTitle[3].style.animation = "title-appear 2s forwards";
    titleBorder[2].style.animation = "border-scale 1s forwards";
    titleBorder[3].style.animation = "border-scale 1s forwards";
    portfolioItem.forEach((item) => {
      item.style.animation = "top-move 1s forwards";
    });
  };

  if (window.scrollY > header.offsetHeight * 0.8) {
    sectionTitle[0].style.animation = "title-appear 2s forwards";
    titleBorder[0].style.animation = "border-scale 1s forwards";
    aboutImage.style.animation = "side-move 1s forwards";
    aboutIntroduce.style.animation = "side-move 1s forwards";
  }

  if (window.innerWidth > 1024) {
    if (
      window.scrollY >=
      header.offsetHeight + aboutSection.offsetHeight * 1.1
    ) {
      skillSectionAni();
    }
  } else if (window.innerWidth <= 1024) {
    if (
      window.scrollY >=
      header.offsetHeight + aboutSection.offsetHeight * 0.85
    ) {
      skillSectionAni();
    }
  }

  if (window.innerWidth > 1024) {
    if (
      window.scrollY >=
      header.offsetHeight +
        aboutSection.offsetHeight +
        skillSection.offsetHeight * 0.9
    ) {
      portfolioSectionAni();
    }
  } else if (window.innerWidth <= 1024) {
    if (
      window.scrollY >=
      header.offsetHeight +
        aboutSection.offsetHeight +
        skillSection.offsetHeight * 0.7
    ) {
      portfolioSectionAni();
    }
  }
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
