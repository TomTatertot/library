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

function addBookToLibrary(title, author, pages, read, imageURL) {
    myLibrary.push(new Book(title, author, pages, read, imageURL));
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img class="book-cover" src="${imageURL}"alt="">
        <p class="book-title">${title}</p>
        <p>${author}</p>
        <p>${pages}</p>
        <button class= "read-button">Read</button>
        <button class="remove-button">Remove</button>   
    `
    document.querySelector(".book-container").appendChild(card); 
}

// function displayLibrary() {
//     myLibrary.forEach(book => { 
//         console.log(book);
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `
//             <img class="book-cover" src="${book.imageURL}"alt="">
//             <p class="book-title">${book.title}</p>
//             <p>${book.author}</p>
//             <p>${book.pages}</p>
//             <button class= "read-button">Read</button>
//             <button class="remove-button">Remove</button>   
//         `
//         document.querySelector(".book-container").appendChild(card); 
//     });
// }

// addBookToLibrary("theHobbit", "J.R.R. Tolkien", 300, true, "https://m.media-amazon.com/images/I/712cDO7d73L.jpg");
// addBookToLibrary("theHobbit", "J.R.R. Tolkien", 300, true, "https://m.media-amazon.com/images/I/712cDO7d73L.jpg");
// addBookToLibrary("theHobbit", "J.R.R. Tolkien", 300, true, "https://m.media-amazon.com/images/I/712cDO7d73L.jpg");

// displayLibrary();
// addBookToLibrary("Children Of Time", "Adrian Tchaikovsky", 600);
// addBookToLibrary("Space Odyssey", "Arthur Clarke", 600);



console.log(myLibrary);