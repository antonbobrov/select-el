/**
 * Check if variable is Window.
 * 
 * @param {any} el - The variable to be checked.
 * 
 * @returns {boolean} - Returns true or false.
 * 
 * @memberof selectEl
 * 
 */
function isWindow(el) {

    if (el instanceof Window) {
        return true;
    }

    return false;
    
}

export default isWindow;