"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _adService = require("./adService");

var _adService2 = _interopRequireDefault(_adService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    sendBookWithAnAd: function sendBookWithAnAd(books, user) {
        _adService2.default.enrich(books, user);
        console.log("Sent to books to user: ", user, books);
    }
};