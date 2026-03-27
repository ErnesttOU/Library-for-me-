//Array for were we are going to store the books//
let mylibrary= [];

//Book constructor//
function Book(title, author, pages, read){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;
    this.id = crypto.randomUUID()
}
//function to add book to library//
function addbooktolibrary(){
    let title= document.getElementById("title").value;
    let author= document.getElementById("author").value;
    let pages= document.getElementById("pages").value;
    let read= document.getElementById("read").checked;
    mylibrary.push(new Book(title, author, pages, read));
    displaybooks();
}
//function to display the books in the library//
function displaybooks(){
    let container= document.getElementById("book-container");
    container.innerHTML="";
    for(let i=0; i<mylibrary.length; i++){
        let book= mylibrary[i];
        let bookdiv= document.createElement("div");
        bookdiv.classList.add("book");
        bookdiv.innerHTML=`
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? "Yes" : "No"}</p>
        <button onclick="removebook('${book.id}')">Remove</button>
        <button onclick="toggleRead('${book.id}')">Toggle Read</button>
        `;
        container.appendChild(bookdiv);
        
    }
}       
//function to remove book from library//
function removebook(id){
    mylibrary= mylibrary.filter(book => book.id !== id);
    displaybooks();
}
//function to toggle read status of book//
function toggleRead(id){
    let book= mylibrary.find(book => book.id === id);
    if(book){
        book.read= !book.read;
        displaybooks();
    }
}
//conecting the html form to the addbooktolibrary function//
document.getElementById("book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addbooktolibrary();
});
//sho modal when add book button is clicked//
document.getElementById("add-book-btn").addEventListener("click", function(){
    document.getElementById("book-dialog").showModal();
});
//close modal when close button is clicked//
document.getElementById("cancel-btn").addEventListener("click", function(){
    document.getElementById("book-dialog").close();
});