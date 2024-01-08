// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    // Use the id in the containing time-block as a key to save the user input in local storage.
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    
    // Save the user input in local storage using the time block id as the key.
    localStorage.setItem(timeBlockId, userInput);
  });

  // TODO: Add code to apply the past, present, or future class to each time block.
  $(".time-block").each(function () {
    var currentHour = dayjs().hour();
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass("past").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var storedUserInput = localStorage.getItem(timeBlockId);

    if (storedUserInput) {
      $(this).find(".description").val(storedUserInput);
    }
  });

  // TODO: Add code to display the current date in the header of the page.
  $("#current-date").text(dayjs().format("MMMM D, YYYY"));
});
