var $colorInput = $("#color-field")
$("#set-color").on("click", function(event){
  event.preventDefault()
  $(".brush").css("background", $colorInput.val());
})
// enter key will work as well
