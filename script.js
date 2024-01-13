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

async function sendNote(){
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
   
    const headers = {
        'Content-Type': 'application/json',
        // The api key goes here   ↓
        'Authorization': 'Bearer apikey'
    };

    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{role: 'assistant', content: `Make a joke of: ${noteContent}`}],
        max_tokens: 50
    };

    // fetch(resource, Option)
    const response = await fetch ('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });
    
    if (response.ok) {
        const result =  await response.json();
        const generatedText = result.choices[0].message.content;

        newNote.innerHTML = generatedText;
        let allNotes = document.getElementById("notes");
        allNotes.appendChild(newNote);
    }
    else{
        console.error("Error!");
    }
}