const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
    modal.showModal();
})



const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.ID = crypto.randomUUID(); //creates unique random ID for each book
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

addBookToLibrary("theHobbit", "J.R.R. Tolkien", 300);
addBookToLibrary("Children Of Time", "Adrian Tchaikovsky", 600);
addBookToLibrary("Space Odyssey", "Arthur Clarke", 600);



console.log(myLibrary);