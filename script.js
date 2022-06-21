let myLibrary = [];
let libraryTable = document.getElementById('library');

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary (title, author, pages, status) {
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

function displayLibrary(myLibrary) {
    for(let i = 0; i < myLibrary.length; i++){
        let row = libraryTable.insertRow(i + 1);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let status = row.insertCell(3);
        title.innerHTML = `${myLibrary[i].title}`;
        author.innerHTML = `${myLibrary[i].author}`;
        pages.innerHTML = `${myLibrary[i].pages}`;
        status.innerHTML = `${myLibrary[i].status}`;
    };
}