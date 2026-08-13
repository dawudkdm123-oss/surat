const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const letterWrap = document.getElementById("letterWrap");
const backBtn = document.getElementById("backBtn");

openBtn.addEventListener("click", () => {
  intro.classList.add("hide");

  setTimeout(() => {
    letterWrap.classList.add("show");
    letterWrap.setAttribute("aria-hidden", "false");
    backBtn.classList.add("show");
  }, 350);
});

backBtn.addEventListener("click", () => {
  letterWrap.classList.remove("show");
  letterWrap.setAttribute("aria-hidden", "true");
  backBtn.classList.remove("show");

  setTimeout(() => {
    intro.classList.remove("hide");
  }, 400);
});
