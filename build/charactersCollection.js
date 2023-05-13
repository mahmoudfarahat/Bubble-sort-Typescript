"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var charachers = this.data.split('');
        var leftHand = charachers[leftIndex];
        charachers[leftIndex] = charachers[rightIndex];
        charachers[rightIndex] = leftHand;
        this.data = charachers.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
