var $colorInput = $("#color-field")
var $body = $("body")
var currentColor = $(".brush").css("background")

// change color
$("#set-color").on("click", function(event){
  event.preventDefault()
  $(".brush").css("background", $colorInput.val());
  currentColor = $colorInput.val()
})

// create squares
for (var i = 0; i < 20; i++) {
  $body.append($("<div class='square'>"))
}

// change color of the square on click
$body.on("mouseover", function(event){
  if (event.target.className == "square") {
    event.target.style.background = currentColor
  }
})




// enter key will work as well
