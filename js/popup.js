var link = document.querySelector(".contacts-block-button");
var popup = document.querySelector(".modal-write-us");
var popupClose = document.querySelector(".modal-write-us-close-button");

var name = popup.querySelector("[name=name]");

var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

var form = popup.querySelector("form");

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-is-showed");

    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
});

popupClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-is-showed");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.remove("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
});

