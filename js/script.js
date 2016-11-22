var imgOpen = document.querySelector(".js-open__photo");
var imgPopup = document.querySelector(".fullsize__photo");
var imgClose = imgPopup.querySelector(".fullsize__close");
var vidOpen = document.querySelector(".js-open__video");
var vidPopup = document.querySelector(".fullsize__video");
var vidClose = vidPopup.querySelector(".fullsize__close");
var mediaOverlay = document.querySelector(".modal-overlay")


imgOpen.addEventListener("click", function(event) {
  event.preventDefault();
  imgPopup.classList.add("fullsize__photo--show");
  mediaOverlay.classList.add("modal-overlay--show");
});

vidOpen.addEventListener("click", function(event) {
  event.preventDefault();
  vidPopup.classList.add("fullsize__video--show");
  mediaOverlay.classList.add("modal-overlay--show");
});


// Закрытие по кнопке
imgClose.addEventListener("click", function(event) {
  event.preventDefault();
  imgPopup.classList.remove("fullsize__photo--show");
  mediaOverlay.classList.remove("modal-overlay--show");
});

vidClose.addEventListener("click", function(event) {
  event.preventDefault();
  vidPopup.classList.remove("fullsize__video--show");
  mediaOverlay.classList.remove("modal-overlay--show");
});


// Закрытие по Esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (imgPopup.classList.contains("fullsize__photo--show")) {
      imgPopup.classList.remove("fullsize__photo--show");
      mediaOverlay.classList.remove("modal-overlay--show");
    }
    if (vidPopup.classList.contains("fullsize__video--show")) {
      vidPopup.classList.remove("fullsize__video--show");
      mediaOverlay.classList.remove("modal-overlay--show");
    }
  }
});


// Закрытие по клику на оверлей
mediaOverlay.addEventListener("click", function(event) {
  event.preventDefault();
  imgPopup.classList.remove("fullsize__photo--show");
  vidPopup.classList.remove("fullsize__video--show");
  mediaOverlay.classList.remove("modal-overlay--show");
});
