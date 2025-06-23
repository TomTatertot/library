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
    const card = createBookCard(title, author, pages, isRead, imageURL);
    container.insertBefore(card, container.children[1]);
}

function createBookCard(title, author, pages, isRead, imageURL){
    const card = document.createElement("div");
    card.className = "card";

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";

    const cover = document.createElement("img");
    cover.className = "book-cover";
    cover.src = imageURL;

    // book info
    const titleEl = document.createElement("p");
    titleEl.className = "overlay-title";
    titleEl.textContent = title;

    const authorEl = document.createElement("p");
    authorEl.className = "overlay-author";
    authorEl.textContent = author;

    const pagesEl = document.createElement("p");
    pagesEl.className = "overlay-pages";
    pagesEl.textContent = pages;

    // button icons
    const readBtnIcon = createSVGIcon("M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M6 22C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.34C19.37 13.12 18.7 13 18 13C14.69 13 12 15.69 12 19C12 20.09 12.29 21.12 12.8 22H6Z", 
        "white");

    const editBtnIcon = createSVGIcon("M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", 
        "white");

    const removeBtnIcon = createSVGIcon("M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", 
        "white");
    
    // buttons
    const readBtn = createIconButton("Mark as read", "read-button", readBtnIcon);
    const editBtn = createIconButton("Edit", "edit-button", editBtnIcon);
    const removeBtn = createIconButton("Remove", "remove-button", removeBtnIcon);

    const overlayButtonList = document.createElement("div");
    overlayButtonList.className = "overlay-buttons"
    overlayButtonList.append(readBtn, editBtn, removeBtn);


    overlay.append(titleEl, authorEl, pagesEl, overlayButtonList);
    card.append(cover, overlay);

    return card;
}

function createSVGIcon (path, color){
    const svgNS = "http://www.w3.org/2000/svg"; /* SVG Namespace */
    const viewBox = "0 0 24 24";

    const svgEl = document.createElementNS(svgNS, "svg");
    svgEl.setAttribute("xmlns", svgNS);
    svgEl.setAttribute("viewBox", viewBox);
    
    const pathEl = document.createElementNS(svgNS, "path");
    pathEl.setAttribute("d", path);
    pathEl.setAttribute("fill", color);

    svgEl.appendChild(pathEl);

    return svgEl;
}

function createIconButton(title, className, icon){

    // const btnTitle = document.createElement("title");
    // btnTitle.textContent = title;

    const iconBtn = document.createElement("button");
    iconBtn.className = className;
    iconBtn.setAttribute("title", title);


    iconBtn.appendChild(icon);
    // iconBtn.appendChild(btnTitle);

    return iconBtn;
}

console.log(myLibrary);