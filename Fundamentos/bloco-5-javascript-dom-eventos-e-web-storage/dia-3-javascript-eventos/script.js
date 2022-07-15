function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  //criando o dia do mes
  let getDaysList = document.querySelector("#days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayItem = document.createElement("li");
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = "day holiday"; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = "day friday"; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = "day holiday friday"; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let newButtonId = "btn-holiday";

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;

  buttonContainer.appendChild(newButton);
}
createHolidayButton("Feriados");

function corHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHoliday = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewColor = "white";

  getHolidayButton.addEventListener("click", function () {
    for (let index = 0; index < getHoliday.length; index++) {
      if (getHoliday[index].style.backgroundColor === setNewColor) {
        getHoliday[index].style.backgroundColor = backgroundColor;
      } else {
        getHoliday[index].style.backgroundColor = setNewColor
      }
    }
  });
}
corHolidays();


