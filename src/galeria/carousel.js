const galeria = document.getElementById("galeria");
const carousel = (direccion) => {
  const opociones = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9,
  };
  const observer = new IntersectionObserver((entradas) => {
    const slideVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    if (direccion === "siguiente") {
      const ultimaSlideVisible = slideVisibles[slideVisibles.length - 1];
      const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);
      if (entradas.length - 1 > indexUltimoSlideVisible) {
        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    } else if (direccion === "anterior") {
      const primerSlideVsible = slideVisibles[0];
      const indexPrimerSlideVisible = entradas.indexOf(primerSlideVsible);
      if (indexPrimerSlideVisible >= 1) {
        entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }
    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
      observer.unobserve(slide);
    });
  }, opociones);
  const slides = galeria.querySelectorAll(".galeria__carousel-slide");
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
