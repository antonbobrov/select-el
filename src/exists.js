import one from "./one";
import isHTMLElement from "./isHTMLElement";

/**
 * Check if an element exists.
 * 
 * @param {HTMLElement|string} selector - A string selector or an element.
 * 
 * @returns {boolean} Returns true or false.
 * 
 * @memberof selectEl
 * 
 */
function exists(selector) {
    
    selector = one(selector);
    if (isHTMLElement(selector)) {
        return true;
    }

    return false;

}

export default exists;