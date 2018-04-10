export default {
    enrich(books, user) {
        books.push('personalized ad for '+user)
        return books
    }
}