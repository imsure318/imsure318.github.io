document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.abstract, a.bibtex").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const kind = link.classList.contains("abstract") ? "abstract" : "bibtex";
      const container = link.parentElement?.parentElement;
      container?.querySelectorAll(`.${kind}.hidden`).forEach((block) => {
        block.classList.toggle("open");
      });
    });
  });
});
