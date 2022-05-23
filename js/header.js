const headerTopBar = document.querySelector(".top-bar");
const headerLeftBar = document.querySelector(".left-bar");
const headerRightBar = document.querySelector(".right-bar");
const headerBottomBar = document.querySelector(".bottom-bar");
const nav = document.querySelector("nav");
const hederTitle = document.querySelector("#header-title");

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
    nav.style.animation = "nav-move 1s forwards";
  }, 8000);
};

// window.onload = () => {
//   headerRightBar.style.animation = "rightAni 3s";
//   headerBottomBar.style.animation = "bottomAni 3s";
//   headerLeftBar.style.animation = "leftAni 3s";
//   headerTopBar.style.animation = "topAni 3s";
// };

new TypeIt("#header-title", { startDelay: 3000 })
  .type("안녕하세요,", { delay: 1000 })
  .type("<br>신입 프론트엔드 개발자", { delay: 500 })
  .type("<br>정 훈 입니다.", { delay: 100 })
  .go();
