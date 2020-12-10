const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

createDaysOfTheWeek();
createDayListItems(dezDaysList, "day");
addHollidayClass("holiday");
addFridayClass("friday");
createHollidayButton("Feriados");
listenToBtnHolliday();
createFridayButton("Sexta-feira");
listenToBtnFridayButton();
listenToDaysUnorderedList();
createSpan("Projeto");
addColorLegend('green');
listenToColorLegend()


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
  btnHollidayButton.innerText = buttonInnerText;
  buttonsContainerDivs.appendChild(btnHollidayButton);
}

function listenToBtnHolliday() {
  const btnHollidayButton = document.querySelector("#btn-holliday");

  btnHollidayButton.addEventListener("click", toggleBackGroundColor);
}

function toggleBackGroundColor() {
  const holidayListItems = document.querySelectorAll(".holiday");

  for (let day of holidayListItems) {
    if (day.style.backgroundColor === "") {
      day.style.backgroundColor = "#0ff";
      day.style.borderRadius = "23px 5px";
      day.style.margin = '4px 0'
      day.style.borderBottom = '1px inset darkcyan'

    } else {
      day.style.backgroundColor = "";
      day.style.border = "";
      day.style.margin = '5px 0'
    }
  }
}

function createFridayButton(buttonInnerText) {
  const btnFridayButton = document.createElement("button");
  const buttonsContainerDivs = document.querySelector(".buttons-container");

  btnFridayButton.id = "btn-friday";
  btnFridayButton.innerText = buttonInnerText;
  buttonsContainerDivs.appendChild(btnFridayButton);
}

function listenToBtnFridayButton() {
  const btnFridayButton = document.querySelector("#btn-friday");

  btnFridayButton.addEventListener("click", toggleFridaysInnerText);
}

function toggleFridaysInnerText() {
  const fridayListItems = document.querySelectorAll(".friday");
  const fridayMessage = "SEXTOU!";

  for (let i = 0; i < fridayListItems.length; i++) {
    if (fridayListItems[i].innerText !== fridayMessage) {
      fridayListItems[i].innerText = fridayMessage;
      fridayListItems[i].style.color = "#f00";
    } else {
      fridayListItems[i].innerText = daysOfFriday[i];
      fridayListItems[i].style.color = "#777";
    }
  }
}

const daysOfFriday = fridayDays();

function fridayDays() {
  const daysOfFridayNodeList = document.querySelectorAll(".friday");
  const daysOfFriday = [];

  for (let friday of daysOfFridayNodeList) {
    const day = friday.innerText;

    daysOfFriday.push(day);
  }
  return daysOfFriday;
}

function listenToDaysUnorderedList() {
  const daysUnorderedList = document.querySelector("#days");

  daysUnorderedList.addEventListener("mouseover", zoomInDayListItems);
  daysUnorderedList.addEventListener("mouseout", restoreZoomDayListItem);
}

function zoomInDayListItems(event) {
  const dayListItemsTargets = event.target

  dayListItemsTargets.style.fontSize = "30px";
}

function restoreZoomDayListItem(event) {
  const dayListItemsTargets = event.target

  dayListItemsTargets.style.fontSize = "20px";
}

function createSpan(spanInnerText) {
  const span = document.createElement("span");
  const myTasksDivs = document.querySelector(".my-tasks");

  span.innerText = spanInnerText;
  myTasksDivs.appendChild(span);
}

function addColorLegend (divBackgroundColor) {
  const div = document.createElement('div')
  const myTasksDivs = document.querySelector('.my-tasks')

  div.id = 'color-legend'
  div.style.backgroundColor = divBackgroundColor
  myTasksDivs.appendChild(div)
}

function listenToColorLegend () {
  const colorLegend = document.querySelector('.my-tasks>div')

  colorLegend.addEventListener('click', addClassSelected)
}

function addClassSelected(event) {
  const colorLegendDivTarget = event.target
  const span = document.querySelector("span")

  colorLegendDivTarget.classList.add('task')
  colorLegendDivTarget.classList.toggle('selected')
  span.classList.toggle('selected')

}