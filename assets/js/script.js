// Constants
const rowHour1 = document.getElementById('row1');
const rowHour2 = document.getElementById('row2');
const rowHour3 = document.getElementById('row3');
const rowHour4 = document.getElementById('row4');
const rowHour5 = document.getElementById('row5');
const rowHour6 = document.getElementById('row6');
const rowHour7 = document.getElementById('row7');
const rowHour8 = document.getElementById('row8');
const rowHour9 = document.getElementById('row9');
const rowHour10 = document.getElementById('row10');
const rowHour11 = document.getElementById('row11');
const rowHour12 = document.getElementById('row12');
const currentHour = moment().hours();


// Function to update date, time, and row highlighting.
function runPage() {

    // Display Current Date
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

    // Display Current Time
    $('#currentTime').text(moment().format('hh:mm A'));


    // Row Highlighting
        // Row 1 - 7:00AM
        if (currentHour > 7) {
            rowHour1.classList.add('past')
        } else if (currentHour < 7) {
            rowHour1.classList.add('future')
        } else {
            rowHour1.classList.add('present')
        }

        // Row 2 - 8:00AM
        if (currentHour > 8) {
            rowHour2.classList.add('past')
        } else if (currentHour < 8) {
            rowHour2.classList.add('future')
        } else {
            rowHour2.classList.add('present')
        }

        // Row 3 - 9:00AM
        if (currentHour > 9) {
            rowHour3.classList.add('past')
        } else if (currentHour < 9) {
            rowHour3.classList.add('future')
        } else {
            rowHour3.classList.add('present')
        }

        // Row 4 - 10:00AM
        if (currentHour > 10) {
            rowHour4.classList.add('past')
        } else if (currentHour < 10) {
            rowHour4.classList.add('future')
        } else {
            rowHour4.classList.add('present')
        }

        // Row 5 - 11:00AM
        if (currentHour > 11) {
            rowHour5.classList.add('past')
        } else if (currentHour < 11) {
            rowHour5.classList.add('future')
        } else {
            rowHour5.classList.add('present')
        }

        // Row 6 - 12:00PM
        if (currentHour > 12) {
            rowHour6.classList.add('past')
        } else if (currentHour < 12) {
            rowHour6.classList.add('future')
        } else {
            rowHour6.classList.add('present')
        }

        // Row 7 - 1:00PM
        if (currentHour > 13) {
            rowHour7.classList.add('past')
        } else if (currentHour < 13) {
            rowHour7.classList.add('future')
        } else {
            rowHour7.classList.add('present')
        }

        // Row 8 - 2:00PM    
        if (currentHour > 14) {
            rowHour8.classList.add('past')
        } else if (currentHour < 14) {
            rowHour8.classList.add('future')
        } else {
            rowHour8.classList.add('present')
        }

        // Row 9 - 3:00PM    
        if (currentHour > 15) {
            rowHour9.classList.add('past')
        } else if (currentHour < 15) {
            rowHour9.classList.add('future')
        } else {
            rowHour9.classList.add('present')
        }

        // Row 10 - 4:00PM    
        if (currentHour > 16) {
            rowHour10.classList.add('past')
        } else if (currentHour < 16) {
            rowHour10.classList.add('future')
        } else {
            rowHour10.classList.add('present')
        }

        // Row 11 - 5:00PM    
        if (currentHour > 17) {
            rowHour11.classList.add('past')
        } else if (currentHour < 17) {
            rowHour11.classList.add('future')
        } else {
            rowHour11.classList.add('present')
        }

        // Row 12 - 6:00PM    
        if (currentHour > 18) {
            rowHour12.classList.add('past')
        } else if (currentHour < 18) {
            rowHour12.classList.add('future')
        } else {
            rowHour12.classList.add('present')
        }

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


// Initial Page Run and Update Interval.
runPage()
setInterval(runPage, 60000);


