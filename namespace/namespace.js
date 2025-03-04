"use strict";
var myNameSpace;
(function (myNameSpace) {
    function displayData() {
        console.log("Hi, my name is idan");
    }
})(myNameSpace || (myNameSpace = {}));
