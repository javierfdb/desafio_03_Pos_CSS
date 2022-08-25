const contentPopup = document.getElementById('contentPopup');
const cerrar = document.querySelector(".close");

window.onclick = function(event) {
    if (event.target == contentPopup) {
        contentPopup.style.display = "none";
    }
}

cerrar.onclick = function() {
  contentPopup.style.display = "none";
}

window.setTimeout(function () {
  contentPopup.style.display = "block";
}, 3000);
