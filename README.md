# Work-Day-Scheduler

In this assigment we created a work day scheduler

I used symantic html in conjunction with jQuery to add functionality that allows the user to store new tasks in local storage for a specific time slot they seem fit. 


##An example of the code that allows this functionality

```javascript
function saveUserInput(e) {
    var blankSchedule = [];
    var buttonId = e.currentTarget.id;
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
}
```
## Preview of the App 
 
 ![WORKDAYSCHEDULER](./WDS.gif)
