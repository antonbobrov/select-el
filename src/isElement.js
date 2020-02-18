import isWindow from "./isWindow";
import isHTMLElement from "./isHTMLElement";

/**
 * Check if variable is an HTMLElement or Window.
 * 
 * @param {any} el - The variable to be checked.
 * 
 * @returns {boolean} - Returns true or false.
 * 
 * @memberof selectEl
 * 
 */
function isElement(el) {

    if (isWindow(el) || isHTMLElement(el)) {
        return true;
    }

    return false;
    
}

export default isElement;