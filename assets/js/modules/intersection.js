// section

const sections = document.querySelectorAll(".card ");

// section callback function
const sectionObserverCallback = (sectionsToWatch, sectionObserver) => {
  sectionsToWatch.forEach((sectionToWatch) => {
    if (sectionToWatch.isIntersecting) {
      sectionToWatch.target.classList.add("fade");
      sectionObserver.unobserve(sectionToWatch.target);
    }
  });
};

// section observer
const sectionObserverOptions = {
  threshold: 0.3,
};

// section options
const sectionObserver = new IntersectionObserver(
  sectionObserverCallback,
  sectionObserverOptions
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
