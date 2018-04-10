'use strict';

var _Library = require('./Library');

var _Library2 = _interopRequireDefault(_Library);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var library = new _Library2.default(['adventure time adventures', 'moby dick', '1984']);

var bookCount = library.books.length; // 3

var users = ['adam', 'jamie'];

library.sendEmails(users);
console.log('Users has beed informed about ' + bookCount + ' books');

// after some time add two books
setTimeout(function () {
    var newBooks = ['harry potter', 'on the road'];
    library.addBooks(newBooks).then(function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = library.books[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var book = _step.value;

                console.log('I have a book titled ' + book);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
}, 2000);

// later, clear the library, as we don't need it any more
setTimeout(function () {
    library.clearLibrary();
}, 6000);