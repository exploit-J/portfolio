const aboutImage = document.querySelector(".about .img");
const aboutIntroduce = document.querySelector(".introduce");
const sectionTitle = document.querySelectorAll("main h2");
const titleBorder = document.querySelectorAll(".title-border");
const header = document.querySelector("header");
const aboutSection = document.querySelector(".about-wrap");
const toTopButton_PC = document.querySelector(".top-button-pc");
const skillIcon = document.querySelector(".icon-wrap");
const skillDesc = document.querySelector(".skill-desc");
console.log(sectionTitle);

// section appear event
const sectionEvent = () => {
  console.log(window.scrollY);
  console.log("about Y", header.offsetHeight * 0.8);
  console.log("skill Y", header.offsetHeight + aboutSection.offsetHeight * 0.8);
  if (window.scrollY > header.offsetHeight * 0.8) {
    sectionTitle[0].style.animation = "title-appear 2s forwards";
    titleBorder[0].style.animation = "border-scale 1s forwards";
    aboutImage.style.animation = "side-move 1s forwards";
    aboutIntroduce.style.animation = "side-move 1s forwards";
  }
  if (window.scrollY >= header.offsetHeight + aboutSection.offsetHeight * 0.8) {
    sectionTitle[1].style.animation = "title-appear 2s forwards";
    titleBorder[1].style.animation = "border-scale 1s forwards";
    skillIcon.style.animation = "side-move 1s forwards";
    skillDesc.style.animation = "side-move 1s forwards";
  }
};
window.addEventListener("scroll", _.throttle(sectionEvent, 300));

// move to top active
const topButtonActivePC = () => {
  if (window.scrollY >= 2000) {
    toTopButton_PC.classList.add("active");
  } else if (window.scrollY < 2000) {
    toTopButton_PC.classList.remove("active");
  }
};
toTopButton_PC.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", _.throttle(topButtonActivePC, 300));

// sction title event
