'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    enrich: function enrich(books, user) {
        books.push('personalized ad for ' + user);
    }
};