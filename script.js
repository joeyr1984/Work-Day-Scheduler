var timeSlots = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "8pm", "9pm"];

$(document).ready(function(){
    $("#currentDay").html(moment().format("dddd, MMMM Do"));
    var currentTime = moment().format("ha");
    timeSlots.forEach(hour => {
       var hourObj = moment(moment().format("L") + " " + hour);
        if (currentTime == hour) {
            $("#new-task-" + hour).addClass("present");
            console.log(hourObj);
        //} else if (moment(hour).isBefore(currentTime)){
            //$("#new-task-" + hour).addClass("past");
        }
    });
});
//var pastTime

//var futureTime


