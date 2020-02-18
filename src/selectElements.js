import isElement from "./isElement";

/**
 * Select elements in array.
 * 
 * @param {Array<any>|NodeList} array - An array of elements.
 * 
 * @returns {NodeList} - Returns a NodeList.
 * 
 * @memberof selectEl
 * 
 */
function selectElements(array) {

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (isElement(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
    
}

export default selectElements;