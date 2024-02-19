"use strict";
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    var words = str.split(" ");
    var reverseWords = words.map(function (word) {
        var charArray = word.split("");
        charArray.reverse();
        var reversed = charArray.join("");
        return reversed;
    });
    return reverseWords.join(" ");
}
exports.reverseWords = reverseWords;
console.log(reverseWords("double  spaced  words"));
