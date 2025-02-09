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

function displayLibrary() {
    content.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card")

        card.innerHTML = `
        <div> Author: ${book.author}</div>
        <div> title: ${book.title}</div>
        <div> Pages: ${book.pages}</div>
        <button class="readBookBtn" data-index="${index}">Not Read</button>
        <button class="removeBookBtn" data-index="${index}">Remove</button>
        `;

        content.appendChild(card);
    });

    document.querySelectorAll(".removeBookBtn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            myLibrary.splice(index, 1)
            displayLibrary();
        });
    });

    document.querySelectorAll(".readBookBtn").forEach(button => {
        button.addEventListener("click", (event) => {
            let btn = event.target;

            if (btn.style.backgroundColor === "red") {
                btn.style.backgroundColor = "green";
                btn.textContent = "Read";
            } else {
                btn.style.backgroundColor = "red";
                btn.textContent = "Not Read";
            }
        });
    });

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
