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

// change color of the square on click
$body.on("click", function(event){
  if (event.target.className == "brush") {
    event.target.style.background = $colorInput.val()
  }
})




// enter key will work as well
