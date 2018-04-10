import adService from './adService'

export default {
    sendBookWithAnAd(books, user) {
        console.log("Sent to books to user: ",
            user,
            adService.enrich(books, user)
        )
    }
}