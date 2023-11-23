const scriptURL =
  "https://script.google.com/macros/s/AKfycbwZmbRfR0MVhbo8RP9YA46Ahy3D3QQSIfXFkINH40_pfiiLObb245TyJSwl9HOeGm9VQg/exec";
const form = document.forms["contact-to-google-sheet"];
const msg = document.getElementById("msg");

const scriptURL2 =
  "https://script.google.com/macros/s/AKfycbyxtkdDWMoCj6o-qSsN7FXR5DPgRTKg37Cr2Hm0hJoyVnXExzM2poqmz3bDHSHy0JpYEw/exec";
const form2 = document.forms["subscribe-to-google-sheet"];
const msg2 = document.getElementById("msg2");

form.addEventListener("submit", (e) => {0
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thanks for send your message by Vitor 70406.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


form2.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL2, { method: "POST", body: new FormData(form2) })
    .then((response) => {
      msg2.innerHTML = "Thanks for subscribing by Vitor 70406.";
      setTimeout(function () {
        msg2.innerHTML = "";
      }, 5000);
      form2.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
