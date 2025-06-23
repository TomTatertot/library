const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const form = document.querySelector(".book-form");

openModal.addEventListener("click", () => {
    modal.showModal();
})

form.addEventListener("submit", function(event){
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const author = document.querySelector('#author-input').value.trim();
    const pages = parseInt(document.querySelector('#page-count-input').value);
    const isRead = document.querySelector('#read-toggle').checked;
    const imageURL = document.querySelector("#image-url-input").value.trim();

    addBookToLibrary(title, author, pages, isRead, imageURL);

    modal.close();
})


const myLibrary = [];

function Book(title, author, pages, isRead, imageURL) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead
    this.imageURL = imageURL;
    this.ID = crypto.randomUUID(); //creates unique random ID for each book
}

function addBookToLibrary(title, author, pages, isRead, imageURL) {
    myLibrary.push(new Book(title, author, pages, isRead, imageURL));

    const container = document.querySelector(".book-container");

    const card = document.createElement("div");
    const overlay = document.createElement("div");

    const newCover = document.createElement("img");
    const newTitle = document.createElement("p");
    const newAuthor = document.createElement("p");
    const newPages = document.createElement("p");
    
    card.classList.add("card");
    overlay.className = "card-overlay";
    newCover.className = "book-cover";
    newTitle.className = "overlay-title";
    newAuthor.className = "overlay-author";
    newPages.className = "overlay-pages";

    newCover.src = imageURL;
    newTitle.textContent = title;
    newAuthor.textContent = author;
    newPages.textContent = pages;

    overlay.appendChild(newCover);
    overlay.appendChild(newTitle);
    overlay.appendChild(newAuthor);
    overlay.appendChild(newPages);

    card.appendChild(newCover);
    card.appendChild(overlay);

    document.querySelector(".card.open-modal").after(card);
}

console.log(myLibrary);