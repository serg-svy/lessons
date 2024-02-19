"use strict";
const courses = ['HTML', 'CSS', 'JavaScript'];

function arrayItemsToLowerCase(arr) {
    return arr.map(item => item.toLowerCase());
}
function removeCourse(name){
    const arr = arrayItemsToLowerCase(courses);
    const alemIndex = arr.indexOf(name.toLowerCase());

    if (elemIndex !== -1){
        courses.splice(elemIndex, 1);
    } else {
        return 'Curs iz takim im\'yam ne naiden';
    }
}


function updateCourse(oldName, newName){
    const arr = arrayItemsToLowerCase(courses);
    const elemIndex = arr.indexOf(oldName.toLowerCase());

    if (elemIndex !== -1) {
        courses.splice(elemIndex, 1, newName);
    } else {
        return "Curs iz takim im'yam ne znayden";
    }
}

updateCourse('HTML' , 'NestJS');
console.log(updateCourse('qwerty', 'NestJS'));
console.log(courses);