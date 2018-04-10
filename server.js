export default {
    requireSize(number) {
        return new Promise((y) => {
            setTimeout(() => {
                console.log(`Expanded shelve size to ${number} books`)
                y()
            }, 2000 + Math.random() * 4000)
        })
    }
}