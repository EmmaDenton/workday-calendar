$(document).ready(function() {
  function displaytime() {
    $("#currentDay").text(dayjs().format('DD/MM/YYYY'));
  }

  displaytime();

  const saveButton = $('button[aria-label="save"]');
  saveButton.on('click', function() {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  $(".time-block textarea").each(function() {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = localStorage.getItem(timeBlockId);
    $(this).val(userInput);
  });

  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var currentHour = parseInt(dayjs().format('HH'));
    var timeBlockHour = parseInt(timeBlockId.split("-")[1]);

    if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else if (timeBlockHour < currentHour) {
      $(this).removeClass("present");
      $(this).addClass("past");
    } else {
      $(this).removeClass("past present");
      $(this).addClass("future");
    }
  });
});