let myLibrary = [];
let libraryTable = document.getElementById('library');
let bookButton = document.getElementById('button');

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary (title, author, pages, status) {
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
};

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
};

bookButton.addEventListener('click', () => {
    let title = document.getElementById('formTitle');
    let author = document.getElementById('formAuthor');
    let pages = document.getElementById('formPages');
    let status = document.getElementById('formStatus');

    addBookToLibrary(title.value, author.value, pages.value, status.value);

    let row = libraryTable.insertRow(myLibrary.length);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let statusCell = row.insertCell(3);
    titleCell.innerHTML = `${myLibrary[myLibrary.length - 1].title}`;
    authorCell.innerHTML = `${myLibrary[myLibrary.length - 1].author}`;
    pagesCell.innerHTML = `${myLibrary[myLibrary.length - 1].pages}`;
    statusCell.innerHTML = `${myLibrary[myLibrary.length - 1].status}`;

    title.value = '';
    author.value = '';
    pages.value = '';
    status.value = '';
});