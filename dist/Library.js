"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = require("./server");

var _server2 = _interopRequireDefault(_server);

var _mailService = require("./mailService");

var _mailService2 = _interopRequireDefault(_mailService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Library = function () {
    function Library(books) {
        _classCallCheck(this, Library);

        this.books = books;
    }

    _createClass(Library, [{
        key: "sendEmails",
        value: function sendEmails(users) {
            var _this = this;

            var _loop = function _loop(index) {
                // send email every five seconds to prevent mail server flooding
                setTimeout(function () {
                    _mailService2.default.sendBookWithAnAd(_this.books, users[index]);
                }, index * 5000);
            };

            for (var index in users) {
                _loop(index);
            }
        }
    }, {
        key: "allocateSpaceForNewBooks",
        value: function allocateSpaceForNewBooks(requiredSize) {
            if (this.books.length < requiredSize) {
                // wait for server to get us a bigger shelve
                return _server2.default.requireSize(requiredSize);
            }
            return Promise.resolve(true);
        }
    }, {
        key: "addBooks",
        value: function addBooks(newBooks) {
            var _this2 = this;

            var currentBookCount = this.books.length;
            // make sure that we have enough space
            return this.allocateSpaceForNewBooks(currentBookCount + newBooks.length).then(function () {
                // and then add the books to the library
                _this2.books.splice(currentBookCount, 0, newBooks);
            });
        }
    }, {
        key: "clearLibrary",
        value: function clearLibrary() {
            this.books = undefined;
        }
    }]);

    return Library;
}();

exports.default = Library;