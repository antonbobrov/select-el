import selectElements from "./selectElements";
import isElement from "./isElement";
import isarray from "isarray";
import one from "./one";
import isHTMLElement from "./isHTMLElement";

/**
 * Select all elements.
 * 
 * @param {NodeList|Array<HTMLElement|Window>|HTMLElement|Window|string} selector - A string selector, an element or a node list.
 * @param {string|HTMLElement} [outer] - An outer element. Either a string selector or an element. 
 * Relevant only for string selectors.
 * 
 * @returns {NodeList|Array<HTMLElement|Window>} Returns elements.
 * 
 * @memberof selectEl
 * 
 */
function all(selector, outer = false) {

    if (selector instanceof NodeList) {
        return selector;
    }
    else if (isarray(selector)) {
        return selectElements(selector);
    }
    else if (isElement(selector)) {
        return [selector];
    }
    else if (typeof selector == 'string') {
        if (outer) {
            outer = one(outer);
            if (isHTMLElement(outer)) {
                return outer.querySelectorAll(selector);
            }
            return [];
        }
        else {
            return document.querySelectorAll(selector);
        }
    }

    return [];
    
}

export default all;