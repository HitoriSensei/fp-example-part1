import Library from './Library'

let library = new Library([
    'adventure time adventures',
    'moby dick',
    '1984',
])

let bookCount = library.books.length // 3

let users = [ 'adam', 'jamie' ]

library.sendEmails(users)
console.log(`Users has been informed about ${bookCount} books`)

// after some time add two books
setTimeout(() => {
    let newBooks = ['harry potter', 'on the road']
    library
        .addBooks(newBooks)
        .then((newLibrary) => {
            for(let book of newLibrary.books) {
                console.log(`I have a book titled ${book}`)
            }
        })
}, 2000)

// later, clear the library, as we don't need it any more
setTimeout(() => {
    library.clearLibrary()
}, 6000)