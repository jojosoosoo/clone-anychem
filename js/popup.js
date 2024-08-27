window.onload = function () {
  // 모달창 기능
  let modalWrap = document.querySelector(".modal-wrap");
  let modalClose = document.querySelector(".modal-close");

  modalClose.addEventListener("click", function () {
    modalWrap.classList.add("fadeOut");
    modalWrap.addEventListener("animationend", () => {
      modalWrap.style.display = "none";
      modalWrap.classList.remove("fadeOut");
    });
  });
};
