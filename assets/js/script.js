const sections = document.querySelectorAll(".content-section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  sections.forEach(section => {
    section.classList.remove("active");
  });

  if (current) {
    document.getElementById(current).classList.add("active");
  }
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}