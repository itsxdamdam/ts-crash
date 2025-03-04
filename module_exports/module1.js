"use strict";
var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Maria";
    function displayData() {
        return "Hi, my name is idan";
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.displayData());
