$(document).ready(function () {

    $(".saveBtn").on("click", function () {

        const value = $(this).siblings(".description").val();
        const time = $(this).parent().attr("id");

        //storing info
        localStorage.setItem(time, value);
    });

    function hourUpdater() {
        // Where I get the current # of hrs
        const currentHour = moment().hours();

        // loop over time slots
        $(".time-slot").each(function () {
            const hourSlot = parseInt($(this).attr("id").split("-")[1]);

            // check if we've moved past this time
            if (hourSlot < currentHour) {
                $(this).addClass("past");
            }
            else if (hourSlot === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourUpdater();
    

    // load any saved data from localStorage
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
