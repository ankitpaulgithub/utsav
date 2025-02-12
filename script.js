document.addEventListener("DOMContentLoaded", () => {
    const popUpDiv = document.querySelector(".popUpDiv");
    const closeOption = document.querySelector(".closeOption");
    const openDailog = document.querySelector(".submit")
    const openMenu = document.querySelector(".menuButton")
    const responsiveNavbar = document.querySelector(".linksButtonsResponsive")

    function toggleMenu() {
        if (responsiveNavbar.style.display === "block") {
            responsiveNavbar.style.display = "none";
        } else {
            responsiveNavbar.style.display = "block";
        }
    }

openMenu.addEventListener("click", toggleMenu);


    // Function to open popup
    function openPopup() {
        popUpDiv.style.display = "flex";
    }

    // Function to close popup
    function closePopup() {
        popUpDiv.style.display = "none";
    }

    // Close popup when clicking the close button
    closeOption.addEventListener("click", closePopup);

    //open popup
    openDailog.addEventListener("click",openPopup)

    // Open popup (example: on page load after 2 seconds)
    // setTimeout(openPopup, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
    const popUpDiv2 = document.querySelector(".popup-overlay");
    const closeOption = document.querySelector(".close-btn");
    const openDailog = document.querySelector(".loginPopUp")

    // Function to open popup
    function openPopup() {
        popUpDiv2.style.display = "flex";
    }

    // Function to close popup
    function closePopup() {
        popUpDiv2.style.display = "none";
    }

    // Close popup when clicking the close button
    closeOption.addEventListener("click", closePopup);

    //open popup
    openDailog.addEventListener("click",openPopup)

    // Open popup (example: on page load after 2 seconds)
    // setTimeout(openPopup, 2000);
});

const currentMonthElement = document.getElementById('current-month');
const calendarDatesElement = document.getElementById('calendar-dates');
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
    currentMonthElement.textContent = `${months[currentMonth]} ${currentYear}`;
    calendarDatesElement.innerHTML = '';

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarDatesElement.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendarDatesElement.innerHTML += `<div class="date">${day}</div>`;
    }
}

document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    renderCalendar();
});

renderCalendar();

// JavaScript for Time Selector Component
let hour = 2;
let minute = 0;
let isPM = true;

const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const amPmButton = document.getElementById('toggle-am-pm');

function updateTime() {
    hourElement.textContent = hour;
    minuteElement.textContent = minute.toString().padStart(2, '0');
    amPmButton.textContent = isPM ? 'PM' : 'AM';
}

document.getElementById('increase-hour').addEventListener('click', () => {
    hour = (hour === 12) ? 1 : hour + 1;
    updateTime();
});

document.getElementById('decrease-hour').addEventListener('click', () => {
    hour = (hour === 1) ? 12 : hour - 1;
    updateTime();
});

document.getElementById('increase-minute').addEventListener('click', () => {
    minute = (minute === 59) ? 0 : minute + 1;
    updateTime();
});

document.getElementById('decrease-minute').addEventListener('click', () => {
    minute = (minute === 0) ? 59 : minute - 1;
    updateTime();
});

amPmButton.addEventListener('click', () => {
    isPM = !isPM;
    updateTime();
});

updateTime();