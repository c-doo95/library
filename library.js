const container = document.querySelector('.container');

const myLibrary = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function removeBookFromLibrary(book) {
  let index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  console.log(myLibrary);
}

function populateBookShelf() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    const card = document.createElement('div');
    card.className = 'card';

    const del = document.createElement('div');
    const delBtn = document.createElement('button');
    delBtn.className = 'del';
    delBtn.textContent = 'Remove';
    del.appendChild(delBtn);
    card.appendChild(del);

    const bookTitle = document.createElement('div');
    bookTitle.className = 'title';
    bookTitle.textContent = book.title; 
    card.appendChild(bookTitle);

    const bibInfo = document.createElement('div');
    bibInfo.className = 'bibInfo';

    const authInfo = document.createElement('div');
    const authTag = document.createElement('div');
    authTag.className = 'info';
    authTag.textContent = 'Author:';
    const authName = document.createElement('div');
    authName.className = 'info';
    authName.textContent = book.author;
    authInfo.appendChild(authTag);
    authInfo.appendChild(authName);
    bibInfo.appendChild(authInfo);

    const pubInfo = document.createElement('div');
    const pubTag = document.createElement('div');
    pubTag.className = 'info';
    pubTag.textContent = 'Published:';
    const pubYear = document.createElement('div');
    pubYear.className = 'info';
    pubYear.textContent = book.year;
    pubInfo.appendChild(pubTag);
    pubInfo.appendChild(pubYear);
    bibInfo.appendChild(pubInfo);
    
    const pageInfo = document.createElement('div');
    const pageTag = document.createElement('div');
    pageTag.className = 'info';
    pageTag.textContent = 'Pages:';
    const pageCount = document.createElement('div');
    pageCount.className = 'info';
    pageCount.textContent = book.pages;
    pageInfo.appendChild(pageTag);
    pageInfo.appendChild(pageCount);
    bibInfo.appendChild(pageInfo);

    const readStatus = document.createElement('div');
    const readTag = document.createElement('div');
    readTag.className = 'info';
    readTag.textContent = 'Read:';
    const readBtn = document.createElement('button');
    readBtn.className = 'readToggle';
    readStatus.appendChild(readTag);
    readStatus.appendChild(readBtn);
    bibInfo.appendChild(readStatus);

    card.appendChild(bibInfo);
    container.appendChild(card);
  }
}

const redMars = new Book('Red Mars', 'Kim Stanley Robinson', 1992, 519, true);

const lEtranger = new Book('The Stranger', 'Albert Camus', 1942, 159, true);

const iJest = new Book('Infinite Jest', "David Foster Wallace", 1996, 1079, true);

addBookToLibrary(redMars);
populateBookShelf();