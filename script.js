//var timeSlots = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "8pm", "9pm"];
var timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

$(document).ready(function () {
    $("#currentDay").html(moment().format("dddd, MMMM Do"));
    //var currentTime = moment().format("ha");
    var currentTime = moment();
    timeSlots.forEach(hour => {
        var hourObj = moment().set('hour', hour);
        var hourFormat = moment(hourObj).format("ha");
        if (moment(hourObj).isBefore(currentTime, "hour")) {
            $("#new-task-" + hourFormat).addClass("past");
            console.log(hourObj);

            //} else if (moment(hour).isBefore(currentTime)){
            //$("#new-task-" + hour).addClass("past");
        } else if (moment(hourObj).isSame(currentTime, "hour")) {
            $("#new-task-" + hourFormat).addClass("present");
        } else if (moment(hourObj).isAfter(currentTime, "hour")) {
            $("#new-task-" + hourFormat).addClass("future");
        }
        
    });
});
//var pastTime

//var futureTime


