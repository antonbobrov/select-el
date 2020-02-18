/**
 * Check if variable is an HTMLElement.
 * 
 * @param {any} el - The variable to be checked.
 * 
 * @returns {boolean} - Returns true or false.
 * 
 * @memberof selectEl
 * 
 */
function isHTMLElement(el) {

    if (el instanceof HTMLElement) {
        return true;
    }

    return false;
    
}

export default isHTMLElement;