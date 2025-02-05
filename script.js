const myLibrary = [];
const content = document.querySelector(".content");

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary(author, title, pages) {
  let book = new Book(author, title, pages);
  myLibrary.push(book);
}

addBookToLibrary("J.K Rowling", "Harry Potter", 295);
addBookToLibrary("James", "The Hobbit", 300);
addBookToLibrary("James", "The Hobbit", 300);
addBookToLibrary("James", "The Hobbit", 300);

function displayLibrary() {
    content.innerHTML = "";
    for(book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card")

        card.innerHTML = `
        <div> Author: ${book.author}</div>
        <div> title: ${book.title}</div>
        <div> Pages: ${book.pages}</div>
        `;

        content.appendChild(card);
    }
}

const addBookBtn = document.querySelector(".addBookBtn");
const dialogModal = document.querySelector(".dialogModal");
const closeModalBtn = document.querySelector(".closeModalBtn");
const addBookForm = document.querySelector(".addBookForm");

addBookBtn.addEventListener("click", () => {
    dialogModal.showModal();
});

closeModalBtn.addEventListener("click", () => {
    dialogModal.close();
});

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;

    addBookToLibrary(author, title, pages);
    displayLibrary();

    addBookForm.reset();
    dialogModal.close();
    
});


displayLibrary();
console.log(myLibrary)
