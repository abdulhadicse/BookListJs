const title= document.getElementById('title');
const author= document.getElementById('author');
const year= document.getElementById('year');
const btn = document.getElementById('btn');

const bookList= document.getElementById('book-list');

const titleJS= document.getElementById('titleJs');
const authorJS= document.getElementById('authorJs');
const yearJS= document.getElementById('yearJs');

btn.addEventListener('click', (e)=>{

    e.preventDefault();
    
    if( title.value === ""){
        const newSpan= document.createElement('span');
        newSpan.innerText = "Please Enter a Title.";
        newSpan.style.color= "red";
        titleJS.appendChild(newSpan);
    }
    if(author.value === ""){ 
        const newSpan= document.createElement('span');
        newSpan.innerText = "Please Enter Author Name.";
        newSpan.style.color= "red";
        authorJS.appendChild(newSpan);
    }
    if(year.value === ""){
        const newSpan= document.createElement('span');
        newSpan.innerText = "Please Enter Published Year.";
        newSpan.style.color= "red";
        yearJS.appendChild(newSpan);
    }

    else{

        if( title.value !== "" && author.value !== "" && year.value !== ""){
            const newRow = document.createElement('tr');

            //Create Title and Insert Data
            const newTitle= document.createElement('th');
            newTitle.innerText = title.value;
            newRow.appendChild(newTitle);

            //Create Author and Insert Data
            const newAuthor= document.createElement('th');
            newAuthor.innerText = author.value;
            newRow.appendChild(newAuthor);

            //Create Year and Insert Data
            const newYear= document.createElement('th');
            newYear.innerText = year.value;
            newRow.appendChild(newYear);

            //Add Book List
            bookList.appendChild(newRow);

            titleJS.lastChild.remove();
            authorJS.lastChild.remove();
            yearJS.lastChild.remove();
        }
    }
})
