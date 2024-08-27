window.addEventListener("load", function () {
  const mbNav = document.querySelector(".mb-nav");
  const mbNavActive = "mb-nav-active";
  const mbWrap = document.querySelector(".mb-wrap");
  const mbWrapActive = "mb-wrap-active";
  const mbWidth = 1024;

  mbNav.addEventListener("click", function () {
    // 토글도 괜찮음
    // mbNa.classList.toggle("mb-nav-active")
    // mb-nav-active 클래스 적용 여부(true, false)
    let checkActive = mbNav.classList.contains(mbNavActive);

    if (checkActive === false) {
      mbNav.classList.add(mbNavActive);
      mbWrap.classList.add(mbWrapActive);
    } else {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
    }
    // Reset
    resetSubMenu();
    // 펼침 기록 변수 초기화
    sideOpenNumber = undefined;
  });

  // 화면의 리사이즈를 체크해서 처리
  // this.window.onresize = function(){}
  this.window.addEventListener("resize", function () {
    let windWidth = window.innerWidth;
    if (windWidth > mbWidth) {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
      // Reset
      resetSubMenu();
      // 펼침 기록 변수 초기화
      sideOpenNumber = undefined;
    }
  });

  const mbGnb = document.querySelector(".mb-gnb");
  mbGnb.addEventListener("click", function (event) {
    // 이벤트 전달 막기
    event.stopPropagation();
  });

  mbWrap.addEventListener("click", function (event) {
    console.log("event.type : " + event.type);
    console.log("event.target : " + event.target);
    console.log("event.currentTarget : " + event.currentTarget);

    mbNav.classList.remove(mbNavActive);
    mbWrap.classList.remove(mbWrapActive);
    // Reset
    resetSubMenu();
    // 펼침 기록 변수 초기화
    sideOpenNumber = undefined;
  });

  // 모바일 햄버거 메뉴
  const sideLis = document.querySelectorAll(".side-menu > li");
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");
  const sideMenuOffset = 53;
  let sideOpenNumber;

  // 펼쳐질 높이값을 담아둠
  const sideOpenHeightArray = [];
  // 각 서브 메뉴의 높이를 알아보기
  sideSubMenu.forEach((item, index) => {
    sideOpenHeightArray[index] = item.scrollHeight + sideMenuOffset;
  });
  // 클릭 처리시작.
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      // 기본 동작 href 막아주기
      event.preventDefault();
      showSubMenu(index);
    });
  });

  function resetSubMenu() {
    // Reset
    sideLis.forEach((item) => {
      // item.style.height = sideMenuOffset + "px";
      anime({
        targets: item,
        height: 53,
        easing: "easeInOutQuad",
        duration: 300,
      });
    });
  }

  function showSubMenu(_showNumber) {
    // 모든 li의 높이를 53으로
    // Reset
    resetSubMenu();

    // 펼친 번호와 같은 값이 인자로 전달되면
    // 펼침 코드를 실행하지 않음
    if (_showNumber === sideOpenNumber) {
      // 펼침 기록 변수 초기화
      sideOpenNumber = undefined;
      // 함수 중단
      return;
    }

    // _showNumber에 해당하는 li의 높이 변경
    sideLis.forEach((item, index) => {
      if (_showNumber === index) {
        // item.style.height = sideOpenHeightArray[_showNumber] + "px";
        anime({
          targets: item,
          height: sideOpenHeightArray[_showNumber],
          easing: "easeInOutQuad",
          duration: 300,
        });
      }
    });

    // 펼친 번호를 기록
    sideOpenNumber = _showNumber;
  }
});
