const links = document.querySelectorAll("li a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

const Btn = document.querySelector(".btn");
    Btn.addEventListener("click", () => {
    Btn.style.backgroundColor = "var(--darkblue)";
});
const Btn1 = document.querySelector(".btn-1");
    Btn1.addEventListener("click", () => {
    Btn1.style.backgroundColor = "var(--darkblue)";
});