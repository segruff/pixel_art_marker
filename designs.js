function makeGrid() {

  // Select size input

  var Height, Width, rows, canvas, cell;

  canvas = $('#pixelCanvas');
  Height = $('#inputHeight').val();
  Width = $('#inputWeight').val();

  canvas.children().remove()

  for (x = 0; x <Height; x++) {
    canvas.append('<tr></tr>');
  }

  rows = $('tr');

  for (y = 0; y <Width; y++) {
    rows.append('<td></td>');
  }

  cell = canvas.find('td');

  // When td is clicked by the user, change color of td
  cell.click(function () {
    // color to select
    var color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });

}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function (event) {
  event.preventDefault();
  makeGrid();
});

$("body").css({
  "background-color": "Lightgray",
   
});


$("h2").css({
  
  "border": "5px solid gray"
  });

