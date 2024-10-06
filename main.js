
document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".nav-items").classList.toggle("active");
    });
});


// عرض وإخفاء النافذة المنبثقة
const modal = document.getElementById("phoneModal");
const closeModal = document.getElementsByClassName("close")[0];

document.querySelectorAll('.phone img').forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
  });
});

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

