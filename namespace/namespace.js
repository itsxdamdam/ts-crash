var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Maria";
    function displayData() {
        return "Hi, my name is idan";
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.displayData());
///<reference path="module1.ts"/>
var thisSpace = myNameSpace.displayData;
console.log(thisSpace);
// purpose of namespace is protecting data from global scope and keeping your modules seperately. Namespace is like a module enclosed with a name and can be referred to using the name.
