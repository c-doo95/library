const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const redMars = new Book('Red Mars', 'Kim Stanley Robinson', 519, true);

const lEtranger = new Book('The Stranger', 'Albert Camus', 159, true);