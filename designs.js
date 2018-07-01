// Select color input
let color = $("#colorPicker");

// Select size input
const c = document.getElementById('pixel_canvas');
let temph = $("#input_height");
let tempw = $("#input_width");

// When size is submitted by the user, call makeGrid()
$('#input_submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

function makeGrid() {

    // Your code goes here!
    c.innerHTML = '';
    let height = temph.val();
    let width = tempw.val();

    //Color fill function
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //Event listener when clicked calls addEvent function and change the color.
    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}