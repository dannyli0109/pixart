var $colorInput = $("#color-field")
var $body = $("body")
var currentColor = $(".brush").css("background")

// change color
$("#set-color").on("click", function(event){
  event.preventDefault()
  $(".brush").css("background", $colorInput.val());
  currentColor = $colorInput.val()
})

// change stemp
$("#set-stemp").on("click", function(event) {
  event.preventDefault()

  var baseUrl = 'http://omdbapi.com/'
  var searchString = $('#stemp-field').val()
  var apiKey = "2f6435d9"
  var setting = {
    url: baseUrl,
    data: {
      t: searchString,
      apiKey: apiKey
    }
  }


  $.ajax(setting).done(function(movie) {
    debugger
    $(".brush").css("background", 'url(' + movie.Poster + ')');
    currentColor = "url(" + movie.Poster + ")"
  })
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
