//Display Today's Date
var today = new Date();
const currentDay = today.getDate();
const currentMonthNum = today.getUTCMonth();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = months[currentMonthNum];
const currentYear = today.getFullYear();

const todayDate = `${currentMonth}, ${currentDay} ${currentYear}`;

// document.querySelector('#currentDate').innerHTML = todayDate;


//Open Side Menu Bar on Button Click
function openSideMenu() {
    document.getElementById("sideMenu").style.width = "350px";
}

//Close Side Menu
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}


//Focus on editor on note click
function editorFocus() {
    quill.focus();

    console.log('done')
}

function saveNote() {
    var content = quill.root.innerHTML;
    console.log(content);
}
 
// function setNoteID() {
//     var nameOfNote = 
// }

