const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active"); //toogle hem ekleme hem çıkarma işlemi
  input.focus();
})