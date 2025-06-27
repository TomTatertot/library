Book.prototype.toggleRead = function(){
    this.isRead = !this.isRead;
}

function Book(title, author, pages, isRead, imageURL) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead
    this.imageURL = imageURL;
    this.ID = crypto.randomUUID(); //creates unique random ID for each book

}

const myLibrary = [];


const MARK_READ_SVG_PATH = "M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M6 22C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.34C19.37 13.12 18.7 13 18 13C14.69 13 12 15.69 12 19C12 20.09 12.29 21.12 12.8 22H6Z";
const MARK_UNREAD_SVG_PATH = "M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z";
const UNREAD_ICON_PATH = "M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z";
const READ_ICON_PATH = "M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M6 22C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.34C19.37 13.12 18.7 13 18 13C14.69 13 12 15.69 12 19C12 20.09 12.29 21.12 12.8 22H6Z"
const EDIT_ICON_PATH = "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
const REMOVE_ICON_PATH = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
const DEFAULT_COVER_PATH = "images/cover-not-availble-image.jpg";
const ICONS_COLOR = "white";

const modal = document.querySelector("#modal");
const editModal = document.querySelector("#edit-modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const addBookForm = document.querySelector(".book-form");
const editBookForm = document.querySelector(".edit-book-form");


openModal.addEventListener("click", () => {
    modal.showModal();
})
addBookForm.addEventListener("submit", submitAddForm);
editBookForm.addEventListener("submit", submitEditForm);


function submitAddForm(event){
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const author = document.querySelector('#author-input').value.trim();
    const pages = parseInt(document.querySelector('#page-count-input').value);
    const isRead = document.querySelector('#read-toggle').checked;
    const imageURL = document.querySelector("#image-url-input").value.trim();

    addBookToLibrary(title, author, pages, isRead, imageURL);
    clearLibraryDisplay();
    displayLibrary();

    addBookForm.reset();
    modal.close();
}

function addBookToLibrary(title, author, pages, isRead, imageURL) {
    myLibrary.push(new Book(title, author, pages, isRead, imageURL));
}

function createBookCard(book){
    const card = document.createElement("div");
    const overlay = document.createElement("div");

    const bookImg = document.createElement("img");
    const titleEl = document.createElement("h3");
    const authorEl = document.createElement("h5");
    const pagesEl = document.createElement("p");

    card.className = "card book";
    overlay.className = "card-overlay";
    bookImg.className = "book-cover";
    
    // book info
    const imageURL = book.imageURL === "" ? DEFAULT_COVER_PATH : book.imageURL;
    bookImg.src = imageURL;
    titleEl.textContent = book.title;
    authorEl.textContent = book.author;
    pagesEl.textContent = `${book.pages} pages`;

    const ribbon = document.createElement("div");
    ribbon.classList = "ribbon ribbon-top-right";
    ribbon.classList.toggle("visible", book.isRead);
    
    const ribbonSpan = document.createElement("span");
    ribbonSpan.textContent = "read";
    ribbon.appendChild(ribbonSpan)

    card.dataset.id = book.ID;
    overlay.append(titleEl, authorEl, pagesEl, createOverlayButtons(book));
    card.append(bookImg, ribbon, overlay);

    return card;
}

function createOverlayButtons(book){
    const overlayButtonList = document.createElement("div");
    overlayButtonList.className = "overlay-buttons"

    const readBtn = document.createElement("button");
    const unreadBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    
    const readIcon = createSVGIcon(READ_ICON_PATH);
    const unreadIcon = createSVGIcon(UNREAD_ICON_PATH);
    const editIcon = createSVGIcon(EDIT_ICON_PATH);
    const removeIcon = createSVGIcon(REMOVE_ICON_PATH);
    
    readBtn.appendChild(readIcon);
    unreadBtn.appendChild(unreadIcon);
    editBtn.appendChild(editIcon);
    removeBtn.appendChild(removeIcon);

    readBtn.setAttribute("title", "Mark as read");
    unreadBtn.setAttribute("title", "Mark as unread");
    editBtn.setAttribute("title", "Edit");
    removeBtn.setAttribute("title", "Remove");

    readBtn.addEventListener("click", handleIsReadClick);
    unreadBtn.addEventListener("click", handleIsReadClick);
    editBtn.addEventListener("click", handleEditClick);
    removeBtn.addEventListener("click", handleRemoveClick);

    overlayButtonList.append(book.isRead ? unreadBtn : readBtn);
    overlayButtonList.append(editBtn, removeBtn);

    return overlayButtonList;
}


function createSVGIcon (path){
    const svgNS = "http://www.w3.org/2000/svg"; /* SVG Namespace */
    const viewBox = "0 0 24 24";

    const svgEl = document.createElementNS(svgNS, "svg");
    svgEl.setAttribute("xmlns", svgNS);
    svgEl.setAttribute("viewBox", viewBox);
    
    const pathEl = document.createElementNS(svgNS, "path");
    pathEl.setAttribute("d", path);
    pathEl.setAttribute("fill", ICONS_COLOR);

    svgEl.appendChild(pathEl);

    return svgEl;
}

function displayLibrary(){
    const container = document.querySelector(".book-container");
    myLibrary.forEach((book) => {
        const card = createBookCard(book);
        container.insertBefore(card, container.children[1]);
    })
}

function clearLibraryDisplay(){
    const cardList = document.querySelectorAll(".book-container .book ");
    cardList.forEach((card) => {
        card.remove();
    });
}

function handleIsReadClick(event){
    event.stopPropagation();
    const btn = event.target.closest("button");
    const bookCard = event.target.closest(".book");

    const svgPathEl = btn.querySelector("path");
    const ribbon = bookCard.querySelector(".ribbon");

    const bookObj = getBookById(bookCard.dataset.id);
    if (bookObj.isRead)
    {
        ribbon.classList.toggle("visible");
        bookObj.toggleRead();
        svgPathEl.setAttribute("d", MARK_READ_SVG_PATH);
        btn.title = "Mark as read";
    }
    else
    {
        ribbon.classList.toggle("visible");
        bookObj.toggleRead();
        svgPathEl.setAttribute("d",MARK_UNREAD_SVG_PATH);
        btn.title = "Mark as unread";

    }
}
function handleEditClick(event){
    const card = event.target.closest(".card");
    const bookObj = getBookById(card.dataset.id);
    console.log(bookObj);

    const editModal = document.querySelector("#edit-modal");
    editModal.dataset.bookId = bookObj.ID;
    const newTitle = editModal.querySelector('#title-input');
    const newAuthor = editModal.querySelector('#author-input');
    const newPages = editModal.querySelector('#page-count-input');
    const newIsRead = editModal.querySelector('#read-toggle');
    const newImageURL = editModal.querySelector("#image-url-input");

    newTitle.value = bookObj.title;
    newAuthor.value = bookObj.author;
    newPages.value = parseInt(bookObj.pages);
    newIsRead.value = bookObj.isRead;
    newImageURL.value = bookObj.imageURL;

    editModal.showModal();
    console.log("edit");
}

function submitEditForm(event){
    event.preventDefault();
    event.stopPropagation();
    const bookID =  editModal.dataset.bookId;
    const bookObj = getBookById(bookID);

    const newTitle = editModal.querySelector('#title-input').value.trim();
    const newAuthor = editModal.querySelector('#author-input').value.trim();
    const newPages = parseInt(editModal.querySelector('#page-count-input').value);
    const newIsRead = editModal.querySelector('#read-toggle').checked;
    const newImageURL = editModal.querySelector("#image-url-input").value.trim();
    
    bookObj.title = newTitle;
    bookObj.author = newAuthor;
    bookObj.pages = newPages;
    bookObj.isRead = newIsRead;
    bookObj.imageURL = newImageURL;

    clearLibraryDisplay();
    displayLibrary();

    editModal.close();
}

function handleRemoveClick(event){
    event.stopPropagation();
    const card = event.target.closest(".card");
    removeBookById(card.dataset.id);
    card.remove();
}

function getBookById(id){
    return myLibrary.find(book => book.ID === id);
}

function removeBookById(id){
    let bookIndex = myLibrary.findIndex(book => book.ID === id);
    myLibrary.splice(bookIndex, 1);
}


addBookToLibrary("The Hobbit", "J.R.R Tolkien", 310, false, "https://m.media-amazon.com/images/I/712cDO7d73L.jpg")
addBookToLibrary("Space Odyssey", "Arthur Clarke", 296, true, "https://m.media-amazon.com/images/I/71v0Uz2n2GL.jpg")
addBookToLibrary("Children Of Time", "Adrian Tchaikovsky", 640, true, "https://m.media-amazon.com/images/I/81Xb8fFEkwL._SL1500_.jpg")
displayLibrary();