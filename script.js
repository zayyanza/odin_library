
class Book {
    constructor(author, title, pages){
        this.author = author;
        this.title = title;
        this.pages = pages;
    }

    addBookToLibrary(author, title, pages) {
    let book = new Book(author, title, pages);
    myLibrary.push(book);
}
}

class Library {
    static myLibrary = []; // Static property shared among all instances

    addBookToLibrary(author, title, pages) {
        let book = new Book(author, title, pages);
        Library.myLibrary.push(book); // Correctly referencing the static property
    }

    displayLibrary() {
        content.innerHTML = "";

        Library.myLibrary.forEach((book, index) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <div> Author: ${book.author}</div>
            <div> Title: ${book.title}</div>
            <div> Pages: ${book.pages}</div>
            <button class="readBookBtn" data-index="${index}">Not Read</button>
            <button class="removeBookBtn" data-index="${index}">Remove</button>
            `;

            content.appendChild(card);
        });

        document.querySelectorAll(".removeBookBtn").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                Library.myLibrary.splice(index, 1); // Fix: Correctly reference static property
                this.displayLibrary(); // Fix: Call using `this`
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
}

const content = document.querySelector(".content");
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

    library.addBookToLibrary(author, title, pages);
    library.displayLibrary();

    addBookForm.reset();
    dialogModal.close();
    
});

const library = new Library();
library.addBookToLibrary("J.K Rowling", "Harry Potter", 295);
library.displayLibrary();