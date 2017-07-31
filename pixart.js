var $colorInput = $("#color-field")
var $body = $("body")

// change color
$("#set-color").on("click", function(event){
  event.preventDefault()
  $(".brush").css("background", $colorInput.val());
})

// create squares
for (var i = 0; i < 20; i++) {
  $body.append($("<div class='brush'>"))
}


// enter key will work as well
