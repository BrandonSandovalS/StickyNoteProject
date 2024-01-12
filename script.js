function getRandomColor() {
    const COLORS = [
        "#a2d1fc",
        "#ffc2cd",
        "#97aedc",
        "#d967ae",
        "#b7cd8e",
        "#d5edc2", 
    ]

    // return a random color from COLORS array
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function sendNote(){
    /* Take note from input box
        Clear the note form the input box
        Add note to the bottom of our notes list    
    */
   const inputElement = document.getElementById('input');
   const noteContent = inputElement.value;
   inputElement.value = "";

   // li = llist
   let newNote = document.createElement('li');
   newNote.style = "height: 150px";
   newNote.style.backgroundColor = getRandomColor();
   newNote.classList.add("container");
   newNote.innerHTML = noteContent;
   let allNotes = document.getElementById('notes');
   allNotes.appendChild(newNote);
}