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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

createDayListItems(dezDaysList, "day");
addHollidayClass("holiday");
addFridayClass("friday");
createHollidayButton('Feriados');
listenToBtnHolliday()

function createDayListItems(daysList, classToBeAdded) {
  for (let day of daysList) {
    let dayListItems = document.createElement("li");
    let daysUnorderedList = document.querySelector("#days");

    dayListItems.classList.add(classToBeAdded);
    dayListItems.innerText = day;
    daysUnorderedList.appendChild(dayListItems);
  }
}

function addHollidayClass(classToBeAdded) {
  let dayListItemsNodeList = document.querySelectorAll(".day");

  for (let day of dayListItemsNodeList) {
    if (
      day.innerText === "24" ||
      day.innerText === "25" ||
      day.innerText === "31"
    ) {
      day.classList.add(classToBeAdded);
    }
  }
}

function addFridayClass(classToBeAdded) {
  const dayListItemsNodeList = document.querySelectorAll(".day");

  // The loop will begin at the first friday index, and we will add 7 too the counter so that it will be alays land on friday.
  for (let i = 5; i < dayListItemsNodeList.length; i += 7) {
    dayListItemsNodeList[i].classList.add(classToBeAdded);
  }
}

function createHollidayButton(buttonInnerText) {
  const btnHollidayButton = document.createElement("button");
  const buttonsContainerDivs = document.querySelector(".buttons-container");

  btnHollidayButton.id = "btn-holliday";
  btnHollidayButton.innerText = buttonInnerText
  buttonsContainerDivs.appendChild(btnHollidayButton)
}

function listenToBtnHolliday () {
    const btnHollidayButton = document.querySelector("#btn-holliday")

    btnHollidayButton.addEventListener('click', toggleBackGroundColor)
}

function toggleBackGroundColor () {
    const holidayListItems = document.querySelectorAll('.holiday')

    console.log(holidayListItems)

    for (let day of holidayListItems) {
        if (day.style.backgroundColor === '') {
            day.style.backgroundColor = 'cyan'
        } else {
            day.style.backgroundColor = ''
        }
    }
}