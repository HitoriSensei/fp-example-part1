export default {
    enrich(books, user) {
        return books.concat('personalized ad for '+user)
    }
}