`use strict`;
const workshops = [
  {
    title: `Workshop 1`,
    development: true,
    strategy: false,
    design: false
  },
  {
    title: `Workshop 2`,
    development: true,
    strategy: false,
    design: true
  },
  {
    title: `Workshop 3`,
    development: true,
    strategy: true,
    design: true
  },
  {
    title: `Workshop 4`,
    development: false,
    strategy: false,
    design: true
  },
  {
    title: `Workshop 5`,
    development: false,
    strategy: true,
    design: false
  },
  {
    title: `Workshop 6`,
    development: true,
    strategy: true,
    design: true
  },

  {
    title: `Workshop 7`,
    development: true,
    strategy: false,
    design: true
  },

  {
    title: `Workshop 8`,
    development: true,
    strategy: true,
    design: false
  }
];

const section = document.querySelector(`.experiences`);

const createWorkshopTempate = item => {
  return `<li class="experiences__item">
                  <a>
                    <h3>${item.title}</h3>
                    <div class="experiences__icons">
                    ${
                      item.development
                        ? `<img src="images/development-icon.svg" />`
                        : ``
                    }
                    ${
                      item.strategy
                        ? `<img src="images/strategy-icon.svg" />`
                        : ``
                    }
                    ${item.design ? `<img src="images/design-icon.svg" />` : ``}
                    </div>
                  </a>
                </li>`;
};
const allWorkshops = workshops
  .map(workshop => createWorkshopTempate(workshop))
  .join(``);
const replaceListElement = (oldElement, list) => {
  const newListItem = document.createElement(`ul`);
  newListItem.classList.add(`experiences__list`);
  newListItem.innerHTML = list;
  oldElement.parentElement.replaceChild(newListItem, oldElement);
};

section.addEventListener(`click`, event => {
  const experiencesList = document.querySelector(`.experiences__list`);
  const filter = event.target.getAttribute(`data-filter`);
  if (!filter) return;

  const checkedFiltets = Array.from(
    document.querySelectorAll(`input:checked`)
  ).map(filter => filter.value);

  if (checkedFiltets.length > 0) {
    let filteredWorkshops = new Set();
    checkedFiltets.forEach(filter => {
      workshops.forEach(workshop => {
        if (workshop[filter]) filteredWorkshops.add(workshop);
      });
    });

    const result = [...filteredWorkshops]
      .map(item => createWorkshopTempate(item))
      .join(``);

    replaceListElement(experiencesList, result);
  } else {
    replaceListElement(experiencesList, allWorkshops);
  }
});
