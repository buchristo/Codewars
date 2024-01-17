"use strict";
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForFactor = void 0;
function checkForFactor(base, factor) {
    return base % factor === 0 ? true : false;
}
exports.checkForFactor = checkForFactor;
console.log(checkForFactor(10, 2));
