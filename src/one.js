import isElement from "./isElement";
import isHTMLElement from "./isHTMLElement";

/**
 * Select only one element.
 * 
 * @param {HTMLElement|Window|string} selector - Either a string selector or an element.
 * @param {string|HTMLElement} [outer] - An outer element. Either a string selector or an element. 
 * Relevant only for string selectors.
 * 
 * @returns {HTMLElement|null} Returns either an HTML Element or null.
 * 
 * @memberof selectEl
 * 
 */
function one(selector, outer = false) {

    if (isElement(selector)) {
        return selector;
    }
    else if (typeof selector == 'string') {
        if (outer) {
            outer = one(outer);
            if (isHTMLElement(outer)) {
                return outer.querySelector(selector);
            }
            return null;
        }
        else {
            return document.querySelector(selector);
        }
    }

    return null;

}

export default one;