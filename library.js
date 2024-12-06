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
    del.className = 'del';
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

    const authTag = document.createElement('div');
    authTag.className = 'info tag';
    authTag.textContent = 'Author:';
    const authName = document.createElement('div');
    authName.className = 'info';
    authName.textContent = book.author;
    bibInfo.appendChild(authTag);
    bibInfo.appendChild(authName);

    const pubTag = document.createElement('div');
    pubTag.className = 'info tag';
    pubTag.textContent = 'Published:';
    const pubYear = document.createElement('div');
    pubYear.className = 'info';
    pubYear.textContent = book.year;
    bibInfo.appendChild(pubTag);
    bibInfo.appendChild(pubYear);

    const pageTag = document.createElement('div');
    pageTag.className = 'info tag';
    pageTag.textContent = 'Pages:';
    const pageCount = document.createElement('div');
    pageCount.className = 'info';
    pageCount.textContent = book.pages;
    bibInfo.appendChild(pageTag);
    bibInfo.appendChild(pageCount);

    const readTag = document.createElement('div');
    readTag.className = 'info tag';
    readTag.textContent = 'Read:';
    const readBtn = document.createElement('button');
    readBtn.className = 'readToggle';

    switch (book.read) {
      case true:
        readBtn.id = 'read';
        readBtn.textContent = 'Read';
        break;
      case false:
        readBtn.id = 'unread';
        readBtn.textContent = 'Unread';
    }

    readBtn.addEventListener('click', () => {
      switch (book.read) {
        case false:
          book.read = true;
          readBtn.id = 'read';
          readBtn.textContent = 'Read';
          break;
        case true:
          book.read = false;
          readBtn.id = 'unread';
          readBtn.textContent = 'Unread';       
      }
    });
    bibInfo.appendChild(readTag);
    bibInfo.appendChild(readBtn);

    card.appendChild(bibInfo);
    container.appendChild(card);
  }
}

const redMars = new Book('Red Mars', 'Kim Stanley Robinson', 1992, 519, true);

const lEtranger = new Book('The Stranger', 'Albert Camus', 1942, 159, true);

const iJest = new Book('Infinite Jest', "David Foster Wallace", 1996, 1079, true);

addBookToLibrary(redMars);
addBookToLibrary(lEtranger);

populateBookShelf();