"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    requireSize: function requireSize(number) {
        return new Promise(function (y) {
            setTimeout(function () {
                console.log("Expanded shelve size to " + number + " books");
                y();
            }, 2000 + Math.random() * 4000);
        });
    }
};