//create variables
var saveBtn=document.getElementById("saveBtn");
var timeBlocks = [];
var currentDate;
var tasks = [
    { hour: "09", task: "",},
    { hour: "10", task: "",},
    { hour: "11", task: "",},
    { hour: "12", task: "",},
    { hour: "13", task: "",},
    { hour: "14", task: "",},
    { hour: "15", task: "",},
    { hour: "16", task: "",},
    { hour: "17", task: "",}
];
var currentDate;

//displays date in header
displayCurrentDate();

timeBlocks = document.getElementsByClassName("time-block");
//console.log(timeBlocks[0].dataset.hour);

function displayCurrentDate(){
    //fetch current date from api
    currentDate = moment().format("dddd, MMMM Do YYYY");
    //display current date
    document.getElementById("currentDay").innerHTML = currentDate;
}

function saveToStorage() {
    localStorage.setItem("hourlyTask", JSON.stringify(tasks));
}
document.getElementById("container").addEventListener("click", function(event) {
for (var i = 0; i < timeBlocks.length; i++) {
if (timeBlocks[i].dataset.hour===event.target.parentNode.id) {
    timeBlocks[i].innerHTML="It Works!!!";
}
}

    console.log(event);
   });

//setup save button
//getItem
//capture user input
//create refresh timer
//Colour change

