`use strict`;
const section = document.querySelector(`.experiences`);
const experiences = Array.from(document.querySelectorAll(`.experiences__item`));

section.addEventListener(`click`, event => {
  const filter = event.target.getAttribute(`data-filter`);
  if (!filter) return;
  const filteredWorkshops = Array.from(
    document.querySelectorAll(`[data-${filter}]`)
  );

  if (event.target.checked) {
    filteredWorkshops.forEach(workshop => {
      workshop.removeAttribute(`hidden`);
    });
  } else {
    filteredWorkshops.forEach(workshop => {
      workshop.setAttribute(`hidden`, true);
    });
  }
});
