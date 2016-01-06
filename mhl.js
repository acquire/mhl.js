/*
 * Javascript Helper Library
 */

//return value between min and max
//also no args will return random from 0 to 9
function random(min, max) {
    if ( arguments.length == 0) {
        return Math.floor((Math.random() * 10)); 
    } else {
        return Math.floor((Math.random() * max) + min);
    }
}

//write text to document
function write(arg) {
    return document.write(arg);
}

//write text to document
//also no args will return new line
function writeLine(arg) {
    if ( arguments.length == 0 ) {
        return document.write("<br/>");
    } else {
        return document.write(arg + "<br/>");
    }
}

//return converted string object
function string(arg) {
    return arg.toString();
}

//for loop replacement
function loop(index, end, func) {
    for (var i = index; i < end; i++) {
        func(i);
    }
}

//create and add table with id
function table(id) {
    write("<table id = " + id + " ></table>")
}

//add row to last created table
function row() {
    var table = last('table')
    var row = document.createElement('tr')
    table.appendChild(row)
    var args = array(arguments); //need to conver to array
    args.forEach(cell) 
}

//create cell (private)
var cell = function(element, index, array) {
    var row = last('tr')
    row.innerHTML += "<td>" + element + "</td>"
}

//get last created element by tag
function last(tag) {
    var count = document.getElementsByTagName(tag).length
    var last = document.getElementsByTagName(tag).item(count-1)
    return last;
}

//convert arguments to array
function array(args) {
    return Array.prototype.slice.call(args);
}

//returns the power of a number
function power(base, powerOf) {
    return Math.pow(base, powerOf)
}

//repeat a function multiple times
function repeat(func, times) {
    for (var i = 0; i < times; i++) {
        func();
    }
}

//write heading to document
