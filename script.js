
var timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

$(document).ready(function () {
    $("#currentDay").html(moment().format("dddd, MMMM Do"));

    var currentTime = moment();
    timeSlots.forEach(hour => {
        var hourObj = moment().set('hour', hour);
        var hourFormat = moment(hourObj).format("ha");
        if (moment(hourObj).isBefore(currentTime, "hour")) {
            $("#new-task-" + hourFormat).addClass("past");
        } else if (moment(hourObj).isSame(currentTime, "hour")) {
            $("#new-task-" + hourFormat).addClass("present");
        } else if (moment(hourObj).isAfter(currentTime, "hour")) {
            $("#new-task-" + hourFormat).addClass("future");
        }
        $("#save-button-" + hourFormat).click(saveUserInput);
    });
});

function saveUserInput(e) {
    var blankSchedule = [];
    var buttonId = e.currentTarget.id;
    //console.log(e);
    var buttonIdArray = buttonId.split("-");
    var hourSlot = buttonIdArray[buttonIdArray.length - 1];
    var newTask = $("#new-task-" + hourSlot).val();
    var savingEntry = {
        id: "#new-task-" + hourSlot,
        taskDescription: newTask
    };
    if (typeof (Storage) !== "undefined") {
        if (localStorage.scheduler) {
            var currentScheduler = JSON.parse(localStorage.scheduler);

            currentScheduler.push(savingEntry);
            localStorage.scheduler = JSON.stringify(currentScheduler);
        } else {
            blankSchedule.push(savingEntry);
            localStorage.scheduler = JSON.stringify(blankSchedule);
            
        }
    }
    //console.log(newTask);
}

