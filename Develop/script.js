$(document).ready(function() {

  const saveButton = document.querySelector('button[aria-label="save"]');
  saveButton.addEventListener('click', function() {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find("textarea").val(userInput);
  });

  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var currentHour = parseInt(dayjs().format('HH'));
    console.log(currentHour)
    })
  });