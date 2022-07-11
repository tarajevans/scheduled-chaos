//create variables
var saveBtn=document.getElementById("saveBtn");
var timeBlocks = [];
var currentDate;
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

$(".container").on("click", "button", function(event) {
    $.each(timeBlocks, function(index, timeBlock){
        if(timeBlock.dataset.hour === event.target.parentNode.id){
            var taskText = $(timeBlock).val();
            localStorage.setItem("hour"+timeBlock.dataset.hour, taskText);
           console.log(localStorage.getItem("hour"+ timeBlock.dataset.hour));
        }
    })
})

//setup save button
//getItem
//capture user input
//create refresh timer
//Colour change

