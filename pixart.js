var $colorInput = $("#color-field")
$("#set-color").on("click", function(event){
  event.preventDefault()
  $(".brush").css("background", $colorInput.val());
})
