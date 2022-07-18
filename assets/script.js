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
function loadFromStorage(){
    for(var i = 9; i <= 12; i++){
        var hourName = "hour"+i;
        var fromStorage = localStorage.getItem(hourName);
        if(fromStorage != null){
            $.each(timeBlocks, function(index, timeBlock){
                if(timeBlock.dataset.hour === i.toString()){
                    $(timeBlock).val(fromStorage);
                    console.log(timeBlock.value=fromStorage);
                }
            })
        }
    }
    for(var i = 1; i <= 15; i++){
        var hourName = "hour"+i;
        var fromStorage = localStorage.getItem(hourName);
        if(fromStorage != null){
            $.each(timeBlocks, function(index, timeBlock){
                if(timeBlock.dataset.hour === i.toString()){
                    $(timeBlock).val(fromStorage);
                    console.log(timeBlock.value=fromStorage);
                }
            })
        }
    }
}
    
loadFromStorage();

function timeCorrection(timeIn) {
   if (timeIn > 12) {
    return timeIn-12;
   } 
}

timeBlocks[0];

//Colour change

function getTime() {
    var current = new Date();
    return current.getHours();
}

function colorCode() {
    for (var i = 0; i < timeBlocks.length; i++) {
        if (parseInt(timeBlocks[i].dataset.mil) < getTime()) {
            timeBlocks[i].style = "background-color:grey";
        }

        if (parseInt(timeBlocks[i].dataset.mil) === getTime()) {
            timeBlocks[i].style = "background-color:red";
        }

        if (parseInt(timeBlocks[i].dataset.mil) > getTime()) {
            timeBlocks[i].style = "background-color:green";
        }
    }
}

function update(){
    var date=new Date();
    if (date.getMinutes().toString()==="00") {
        colorCode();
    }
}
    $(document).ready(function(){
    update();
    setInterval(update,60000);
})
colorCode();
