// Curent day. Possibly update to include time with setInterval functionality.
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));


// Row Color Highlighting
function scheduleHighlighter() {

}



// Save Button - Local Storage - Set Item
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})


// Load Previous - Local Storage - Get Item
$("#row1 .description").val(localStorage.getItem("row1"));
$("#row2 .description").val(localStorage.getItem("row2"));
$("#row3 .description").val(localStorage.getItem("row3"));
$("#row4 .description").val(localStorage.getItem("row4"));
$("#row5 .description").val(localStorage.getItem("row5"));
$("#row6 .description").val(localStorage.getItem("row6"));
$("#row7 .description").val(localStorage.getItem("row7"));
$("#row8 .description").val(localStorage.getItem("row8"));
$("#row9 .description").val(localStorage.getItem("row9"));
$("#row10 .description").val(localStorage.getItem("row10"));
$("#row11 .description").val(localStorage.getItem("row11"));
$("#row12 .description").val(localStorage.getItem("row12"));


scheduleHighlighter();
