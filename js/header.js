window.addEventListener("load", function () {
  // nav에 마우스 오버하면 header 높이 260px 변경
  // nav에 마우스 아웃하면 header 높이 100px 변경하
  // header를 js 저저장해 보기 (변수 정의)
  let header = document.querySelector(".header");
  // na 를 js로 저장해 보기 (변수 정의)
  let nav = document.querySelector(".nav");
  //   console.log(header);
  //   console.log(nav);

  //  nav에 마우스 오버 처리
  //  html 요소에 마우스 오버 처리하는 법
  nav.addEventListener("mouseenter", function () {
    // header 의 높이를 260 픽셀로 고치고 싶음
    // header.style.height = "260px";
    // 우리는 260 픽셀로 변경되는 class 를 작성해 두었음
    header.classList.add("header-active");
  });
  //  nav에 마우스 아웃 처리
  //  html 요소에 마우스 아웃 처리하는 법
  nav.addEventListener("mouseleave", function () {
    // header의 높이를 100 픽셀로 고치고 싶음
    // header.style.height = "100px";
    // 클래스 제거
    header.classList.remove("header-active");
  });

  let gnbA = document.querySelectorAll(".gnb > li");
  let navBlueBar = document.querySelector(".nav-blue-bar");

  // 최초 위치 및 너비
  let posX = gnbA[0].getBoundingClientRect().left;
  let widthX = gnbA[0].getBoundingClientRect().width;
  navBlueBar.style.left = posX + "px";
  navBlueBar.style.width = widthX + "px";

  gnbA.forEach((item) => {
    item.addEventListener("mouseenter", function (event) {
      let posX = this.getBoundingClientRect().left;
      let widthX = this.getBoundingClientRect().width;
      // navBlueBar.style.left = posX + "px";
      // navBlueBar.style.width = widthX + "px";
      anime({
        targets: navBlueBar,
        left: posX,
        width: widthX,
        easing: "easeInOutQuad",
        duration: 500,
      });
    });
  });

  // 스크롤에 의한 position:fixed, relative 교체
  const visual = this.document.querySelector(".visual");
  window.addEventListener("scroll", function () {
    // 스크롤 위치값을 파악
    let scY = this.window.scrollY;
    // classList.add() 와 classList.remove() 활용
    if (scY > 0) {
      // 스크롤 바가 아래로 조금이라도 이동
      // position: fixed;
      header.classList.add("header-fixed");
      visual.classList.add("visual-fixed");
    } else {
      // 스크롤 바가 최상단에 위치
      // position: relative;
      header.classList.remove("header-fixed");
      visual.classList.remove("visual-fixed");
    }
  });
});
