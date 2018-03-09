// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

$('#pixel_canvas').html(''); // clears the grid

  var rows = $('#input_height').val(); //for rows
  var columns = $('#input_width').val(); // for columns
  var table = $('#pixel_canvas'); // for table
  var i=0;

 //Reset to empty table --- in case one already created
// table.children().remove();

  while (i < rows){ //Create rows
   table.append('<tr> </tr>');
      i++;
 //for (var i = 0; i < rows; i++) { //Create rows
 //    table.append('<tr> </tr>');
    for (var j = 0; j < columns; j++) { //Create columns
      table.children().last().append('<td> </td>'); 
    }
  }
}

// When td is clicked, change color of td
function inputColor() {
   $('td').on('click', function () {
   	var color = $('#colorPicker').val();
   	$(this).css('backgroundColor', color);
  });
  
// remove color from a cell once double clicked
   $('td').on('dblclick', function () {
   	$(this).css('backgroundColor', '');
   });
}
 // When size is submitted by the user, call makeGrid()

$("input[type='submit']").click(function(event) {
    event.preventDefault();  //prevent page refreshing after pressing the submit
    makeGrid();
    inputColor();
  });
