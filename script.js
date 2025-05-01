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

const btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", () => {
    btn1.style.backgroundColor = "var(--darkblue)";
});

const btn2 = document.getElementsByClassName("btn3");
btn2.addEventListener("click", () => {
    btn2.style.backgroundColor = "var(--darkblue)";
    const about = document.querySelector(".aboutus-content");
    console.log(about);
    about.classList.add("animation"); 
});



