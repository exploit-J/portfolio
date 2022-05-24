const headerTopBar = document.querySelector(".top-bar");
const headerLeftBar = document.querySelector(".left-bar");
const headerRightBar = document.querySelector(".right-bar");
const headerBottomBar = document.querySelector(".bottom-bar");
const nav = document.querySelector("nav");
const hederTitle = document.querySelector("#header-title");
const sideBar = document.querySelector(".nav-mo");
const sideBarItem = document.querySelector(".nav-mo ul");
const sideBarButton = document.querySelector(".sidebar-button");
const bottomArrow = document.querySelectorAll(".bottom-arrow i");
console.log(bottomArrow[0]);

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
  }, 8000);
  setTimeout(() => {
    bottomArrow[0].style.animation = "arrow 1s infinite";
    bottomArrow[1].style.animation = "arrow 1s 0.1s infinite";
    bottomArrow[2].style.animation = "arrow 1s 0.2s infinite";
    bottomArrow.forEach((item) => {
      item.style.display = "block";
    });
  }, 8000);
};

//sdie-bar on/off
sideBarButton.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  sideBarItem.classList.toggle("active");
  sideBarButton.classList.toggle("active");
});

new TypeIt("#header-title", { startDelay: 3000 })
  .type("안녕하세요,", { delay: 1000 })
  .type("<br>신입 프론트엔드 개발자", { delay: 500 })
  .type("<br>정 훈 입니다.", { delay: 100 })
  .go();
