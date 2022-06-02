const headerTopBar = document.querySelector(".top-bar");
const headerLeftBar = document.querySelector(".left-bar");
const headerRightBar = document.querySelector(".right-bar");
const headerBottomBar = document.querySelector(".bottom-bar");
const nav = document.querySelector(".nav-pc");
const hederTitle = document.querySelector("#header-title");
const sideBar = document.querySelector(".nav-mo");
const sideBarUl = document.querySelector(".nav-mo ul");
const sideBarButton = document.querySelector(".sidebar-button");
const bottomArrow = document.querySelectorAll(".arrow");
const toTopButton = document.querySelector(".top-button-mo");
const sideBarLi = document.querySelectorAll(".nav-mo-wrap li");
const navBarLi = document.querySelectorAll(".nav-pc li");
const mainSectionTitle = document.querySelectorAll("main h2");
const footer = document.querySelector("footer");
const mainHeader = document.querySelector("header");

history.scrollRestoration = "manual";

// 페이지랜딩 이벤트
window.onload = () => {
  let timer = 0;
  //TypeIt
  new TypeIt("#header-title", { startDelay: 3000 })
    .type("안녕하세요,", { delay: 1000 })
    .type("<br>신입 프론트엔드 개발자", { delay: 500 })
    .type("<br>정 훈 입니다.", { delay: 100 })
    .go();
  setTimeout(() => {
    headerTopBar.classList.add("active");
  }, 1000);
  setTimeout(() => {
    headerLeftBar.classList.add("active");
  }, 1500);
  setTimeout(() => {
    headerRightBar.classList.add("active");
  }, 1800);
  setTimeout(() => {
    headerBottomBar.classList.add("active");
  }, 2300);
  setTimeout(() => {
    nav.style.animation = "nav-move 2s forwards";
    sideBar.style.animation = "sidebar-drop 1s forwards";
    bottomArrow.forEach((item) => {
      item.style.animation = `arrow 1s ${(timer += 100)}ms infinite`;
    });
  }, 8000);
};

// sdie-bar on/off
sideBarButton.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  sideBarUl.classList.toggle("active");
  sideBarButton.classList.toggle("active");
});

// move to top button
const topButtonActive = () => {
  if (window.scrollY >= mainHeader.offsetHeight * 0.8) {
    toTopButton.classList.add("active");
  } else if (window.scrollY < mainHeader.offsetHeight * 0.8) {
    toTopButton.classList.remove("active");
  }
};

window.addEventListener("scroll", _.throttle(topButtonActive, 300));

toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// move to section
// PC
navBarLi[0].addEventListener("click", () => {
  mainSectionTitle[0].scrollIntoView({ behavior: "smooth", block: "start" });
});
navBarLi[1].addEventListener("click", () => {
  mainSectionTitle[1].scrollIntoView({ behavior: "smooth", block: "start" });
});
navBarLi[2].addEventListener("click", () => {
  mainSectionTitle[2].scrollIntoView({ behavior: "smooth", block: "start" });
});
navBarLi[3].addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth", block: "start" });
});
// MOBILE
sideBarLi[0].addEventListener("click", () => {
  mainSectionTitle[0].scrollIntoView({ behavior: "smooth", block: "start" });
});
sideBarLi[1].addEventListener("click", () => {
  mainSectionTitle[1].scrollIntoView({ behavior: "smooth", block: "start" });
});
sideBarLi[2].addEventListener("click", () => {
  mainSectionTitle[3].scrollIntoView({ behavior: "smooth", block: "start" });
});
sideBarLi[3].addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth", block: "start" });
});
