// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   const url = "https://anapioficeandfire.com/api/books"
//   return fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => renderBooks(data))
// }


// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   })
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
// })

// // function fetchBooks() {
// //   const mainUrl = "https://anapioficeandfire.com/api/books";
// //   return fetch(mainUrl)
// // }


function fetchBooks() {
fetch("https://anapioficeandfire.com/api/books")
.then(res => res.json())
.then(data => renderBooks(data))
}

const renderBooks = (books) => {
  const main = document.querySelector("main")
  books.forEach(book => {
    const h2 = document.createElement("h2")
    h2.innerHTML = book.name
    main.append(h2)
  })
}
renderBooks()
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then(resp => resp.json())
//     .then(json => renderBooks(json))
// }

// function renderBooks(books) {
//   const main = document.querySelector('main')
//   books.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = book.name
//     main.appendChild(h2)
//   })
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
// })