import server from "./server";
import mailService from "./mailService";

export default class Library {
    constructor(books) {
        this.books = books
    }

    sendEmails(users) {
        for(let index in users) {
            // send email every five seconds to prevent mail server flooding
            setTimeout(() => {
                mailService.sendBookWithAnAd(this.books, users[index])
            }, index * 5000)
        }
    }

    allocateSpaceForNewBooks(requiredSize) {
        if(this.books.length < requiredSize) {
            // wait for server to get us a bigger shelve
            return server.requireSize(requiredSize)
        }
        return Promise.resolve(true)
    }

    addBooks(newBooks) {
        let currentBookCount = this.books.length
        // make sure that we have enough space
        return this.allocateSpaceForNewBooks(currentBookCount + newBooks.length)
            .then(() => new Library(
                this.books.concat(newBooks)
            ))
    }

    clearLibrary() {
        return new Library(undefined)
    }
}
