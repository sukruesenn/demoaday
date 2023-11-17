//Filter Dropdown
var allLinks = document.querySelectorAll('.projeler-section .catalogs a');
function changeColor(clickedElement){
    clickedElement.classList.add('active');

    allLinks.forEach(function(link){
        if (link !== clickedElement){
            link.classList.add('gray-color');
            link.classList.remove('active');
        }
    });
}
function toggleDropdown(dropdownId){
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function selectOption(optionText, buttonId, dropdownId){
    var button = document.getElementById(buttonId);
    button.innerHTML = optionText;
    dropdown.style.display = 'none';
    toggleDropdown(dropdownId);
}

//Header Settings
var generalWrapper = document.querySelector('.app');
var content = document.querySelector('.content');
var header = document.getElementById("header");
var menuBtn = document.getElementById("menuBtn");
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function (){
    var scrollPosition = window.scrollY;

    if (scrollPosition > 270){
        header.classList.add("fixed");
    }else{
        header.classList.remove("fixed");
    }
});

menuBtn.addEventListener('click', function(){
    navbar.classList.toggle('active');
    body.classList.toggle('active');
});

var isExpanded = false;

menuBtn.addEventListener('click', function(){
    generalWrapper.classList.toggle('mobileNavActive');
    isExpanded = !isExpanded;

    if (isExpanded){
        generalWrapper.style.height = '100vh';
    }else{
        setTimeout(function () {
            generalWrapper.style.height = 'auto';
          }, 300);
    }
});

let customDates = [
    new Date(2023, 10, 4),
    new Date(2023, 10, 18),
    new Date(2023, 10, 24)
];

let multiEventDates = [
    new Date(2023, 10, 8),
    new Date(2023, 10, 22),
    new Date(2023, 10, 26)
];

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const months=[
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
];

const day=document.querySelector(".calendar-dates");
const currdate=document.querySelector("#calendarCurrentDate");
const prenexIcons=document.querySelectorAll(".calendar-navigation");

var eventDiv = document.getElementById('singleEvent');
var multiEventDiv = document.getElementById('multiEvent');
var nonEventDiv = document.getElementById('emptyEvent');
var calendarModal = document.getElementById('calendarModal');
var calendarMobile = document.getElementById('calendar');
var calendarCloseBtn = document.getElementById('closeCalendar');
var selectedDateElement = document.getElementById('selectedDate');

calendarModal.addEventListener('click', function(){
    calendar.classList.add('is-active');
    calendarCloseBtn.classList.add('is-active');
});
calendarCloseBtn.addEventListener('click', function(){
    calendar.classList.remove('is-active');
    calendarCloseBtn.classList.remove('is-active');
});

// function to generate the calendar
const manipulate = () =>{
    // get the first day of the month
    let dayone = new Date(year, month, 1).getDay();
  
    // get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();
  
    // get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();
  
    // get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();
  
    let lit = ""; // variable to store the generated calendar HTML
  
    // loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--){
        lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
  
    // loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++){
        // check if the current date is today
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";

        // check if it's an event day
        let isEventDay = false;
        for (const customDate of customDates){
            if (customDate.getDate() === i && customDate.getMonth() === month && customDate.getFullYear() === year){
                isEventDay = true;
                break;
            }
        }

        // check if it's a multi-event day
        let isMultiEventDay = false;
        for (const multiEventDate of multiEventDates){
            if (multiEventDate.getDate() === i && multiEventDate.getMonth() === month && multiEventDate.getFullYear() === year){
                isMultiEventDay = true;
                break;
            }
        }

        lit += `<li class="${isToday} ${isEventDay ? "event" : ""} ${isMultiEventDay ? "multi-event" : ""}">${i}`;

        // if it's an event day, add a div with the "calendar-event-icon" class
        if (isEventDay){
            lit += `<div class="calendar-event-icon"></div>`;
        }

        // if it's a multi-event day, add a div with the "calendar-event-icon-2" class
        if (isMultiEventDay){
            lit += `<div class="calendar-event-icon-2"></div>`;
        }

        lit += `</li>`;
    }
  
    // loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++){
        lit += `<li class="inactive">${i - dayend + 1}</li>`;
    }
  
    // update the text of the current date element with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;
  
    // update the HTML of the dates element with the generated calendar
    day.innerHTML = lit;

    let liElements = document.querySelectorAll('.calendar-dates li');
    liElements.forEach(li =>{
        li.addEventListener('click', () => {
            liElements.forEach(otherLi =>{
                otherLi.classList.remove('selected');
                calendar.classList.remove('is-active');
            });

            // Add 'selected' class to the clicked li element
            li.classList.add('selected');

            if (li.classList.contains('event')){
                // Display the event div and hide the others
                eventDiv.style.display = 'block';
                multiEventDiv.style.display = 'none';
                nonEventDiv.style.display = 'none';
            }else if (li.classList.contains('multi-event')){
                // Display the multi-event div and hide the others
                eventDiv.style.display = 'none';
                multiEventDiv.style.display = 'block';
                nonEventDiv.style.display = 'none';
            } else{
                // Display the non-event div and hide the others
                eventDiv.style.display = 'none';
                multiEventDiv.style.display = 'none';
                nonEventDiv.style.display = 'flex';
            }
            const clickedDay = li.innerText;
            // Update the selected date element with the formatted date
            selectedDateElement.innerText = `${clickedDay} ${months[month]} ${year}`;
        });
    });

    // Check if the initially active li element is an event day or multi-event day
    const initiallyActiveLi = document.querySelector('li.active');

    if (initiallyActiveLi){
        if (initiallyActiveLi.classList.contains('event')){
            // Display the event div and hide the others
            eventDiv.style.display = 'block';
            multiEventDiv.style.display = 'none';
            nonEventDiv.style.display = 'none';
        }else if (initiallyActiveLi.classList.contains('multi-event')){
            // Display the multi-event div and hide the others
            eventDiv.style.display = 'none';
            multiEventDiv.style.display = 'block';
            nonEventDiv.style.display = 'none';
        }else{
            // Display the non-event div and hide the others
            eventDiv.style.display = 'none';
            multiEventDiv.style.display = 'none';
            nonEventDiv.style.display = 'flex';
        }
    }
};

manipulate();

prenexIcons.forEach(icon=>{
    icon.addEventListener("click", ()=>{
        month=icon.id==="calendar-prev" ? month - 1 : month + 1;

        if (month < 0 || month > 11){
            date=new Date(year, month, new Date().getDate());
            year=date.getFullYear();
            month=date.getMonth();
        }
        else{
            date=new Date();
        }
        manipulate();
    });
});

//Bugünün tarihi
const today = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
selectedDateElement.innerText = today;

//Ak Adaylar
