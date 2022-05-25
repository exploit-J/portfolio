const headerTopBar = document.querySelector(".top-bar");
const headerLeftBar = document.querySelector(".left-bar");
const headerRightBar = document.querySelector(".right-bar");
const headerBottomBar = document.querySelector(".bottom-bar");
const nav = document.querySelector(".nav-pc");
const hederTitle = document.querySelector("#header-title");
const sideBar = document.querySelector(".nav-mo");
const sideBarUl = document.querySelector(".nav-mo ul");
const sideBarButton = document.querySelector(".sidebar-button");
const bottomArrow = document.querySelectorAll(".bottom-arrow i");
const toTopButton = document.querySelector(".top-button-mo");
const sideBarLi = document.querySelectorAll(".nav-mo-wrap li");
const navBarLI = document.querySelectorAll(".nav-pc li");
const mainSectionTitle = document.querySelectorAll("main h2");
const footer = document.querySelector("footer");

// 페이지랜딩 이벤트
window.onload = () => {
  setTimeout(() => {
    headerTopBar.style.animation = "topAni 3s";
  }, 1000);
  setTimeout(() => {
    headerLeftBar.style.animation = "leftAni 3s";
  }, 1500);
  setTimeout(() => {
    headerRightBar.style.animation = "rightAni 3s";
  }, 1800);
  setTimeout(() => {
    headerBottomBar.style.animation = "bottomAni 3s";
  }, 2300);
  setTimeout(() => {
    nav.style.animation = "nav-move 2s forwards";
    sideBar.style.animation = "sidebar-drop 1s forwards";
  }, 1000);
  setTimeout(() => {
    bottomArrow[0].style.animation = "arrow 1s infinite";
    bottomArrow[1].style.animation = "arrow 1s 0.1s infinite";
    bottomArrow[2].style.animation = "arrow 1s 0.2s infinite";
    bottomArrow.forEach((item) => {
      item.style.display = "block";
    });
  }, 8000);
};

// sdie-bar on/off
sideBarButton.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  sideBarUl.classList.toggle("active");
  sideBarButton.classList.toggle("active");
});

//TypeIt
new TypeIt("#header-title", { startDelay: 3000 })
  .type("안녕하세요,", { delay: 1000 })
  .type("<br>신입 프론트엔드 개발자", { delay: 500 })
  .type("<br>정 훈 입니다.", { delay: 100 })
  .go();

// move to top button
const topButtonActive = () => {
  if (window.scrollY >= 800) {
    toTopButton.classList.add("active");
  } else if (window.scrollY < 800) {
    toTopButton.classList.remove("active");
  }
};

window.addEventListener("scroll", _.throttle(topButtonActive, 300));

toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// move to section
// PC
navBarLI[0].addEventListener("click", () => {
  mainSectionTitle[0].scrollIntoView({ behavior: "smooth", block: "start" });
});
navBarLI[1].addEventListener("click", () => {
  mainSectionTitle[1].scrollIntoView({ behavior: "smooth", block: "start" });
});
navBarLI[2].addEventListener("click", () => {
  mainSectionTitle[2].scrollIntoView({ behavior: "smooth", block: "start" });
});
navBarLI[3].addEventListener("click", () => {
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
  mainSectionTitle[2].scrollIntoView({ behavior: "smooth", block: "start" });
});
sideBarLi[3].addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth", block: "start" });
});
