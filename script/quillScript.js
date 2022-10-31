toolbarOptions = [
    [{ 'font': [] }],
    ['bold', 'italic', 'underline'],        // toggled buttons
    [{ 'size': ['small', false, 'large'] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    
    [{ 'align': [] }], ['clean']
  ];

var quill = new Quill('.defaultEditor', {
    modules: {
    toolbar: toolbarOptions,
    },
    theme: 'snow',
    placeholder: 'Select note to display here...'
});

var quill1 = new Quill('#editor1', {
    modules: {
    toolbar: toolbarOptions,
    },
    theme: 'snow',
    placeholder: 'Take a note...'
});





// //CLONE NOTE
// var count = 2

// function cloneNote() {
//     ;
//     var note = document.getElementById('defaultContainer');
//     if (count<=15) {
//         clone = note.cloneNode(true); // true means clone all childNodes and all event handlers
//         clone.id = `editorContainer${count}`;
//         clone.class = "item";
//         clone.getElementsByClassName('defaultEditor').id=`editor${count}`;
//         document.body.appendChild(clone);
//         document.getElementById(`editorContainer${count}`).style.display='flex';
//     count++
//     var element = document.getElementById("container");
//     element.appendChild(clone);
//     }
// }


//CLONE NOTE
var count = 2

function addNewNote() {
    var parent = document.getElementById('container');
    if (count<=15) {
        const newNote = document.createElement('textarea');
        newNote.id = `text${count}`;
        newNote.className = 'note';
        newNote.setAttribute('onclick', 'editorFocus()');
        parent.appendChild(newNote);
        document.getElementById('addNote').href = `#${newNote.id}`;
    }
    count++
    }
