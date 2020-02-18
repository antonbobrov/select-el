import '../styles/index.scss';

import * as selectEl from '../../../src/index';



// get one element
console.warn("one")
console.log(selectEl.one(".not-existing-element"));
console.log(selectEl.one("ul"));
console.log(selectEl.one("li", 'ul'));
console.log(selectEl.one("li:nth-child(2)", 'ul'));

// get all elements
console.warn("all")
console.log(selectEl.all(".not-existing-elements"));
console.log(selectEl.all("li"));
console.log(selectEl.all(document.querySelectorAll("li")));
console.log(selectEl.all("li", 'li'));
console.log(selectEl.all("li", ".not-existing-elements"));
console.log(selectEl.all("ul", document.documentElement));

// check if a variable is an element
console.warn("isElement")
console.log(selectEl.isElement(".not-existing-elements"));
console.log(selectEl.isElement(undefined));
console.log(selectEl.isElement(document.querySelector("li")));

// check if an element exists
console.warn("exists")
console.log(selectEl.exists(".not-existing-elements"));
console.log(selectEl.exists(undefined));
console.log(selectEl.exists('li'));
console.log(selectEl.exists(document.querySelector("li")));

// check if a variable is an HTML Element
console.warn("isHTMLElement")
console.log(selectEl.isHTMLElement(".not-existing-elements"));
console.log(selectEl.isHTMLElement(undefined));
console.log(selectEl.isHTMLElement('li'));
console.log(selectEl.isHTMLElement(document.querySelector("li")));

// check if a variable is a Window
console.warn("isHTMLElement")
console.log(selectEl.isWindow(".not-existing-elements"));
console.log(selectEl.isWindow(undefined));
console.log(selectEl.isWindow('li'));
console.log(selectEl.isWindow(window));

// select elements from an existing array
console.warn("selectElements")
console.log(selectEl.selectElements(document.querySelectorAll("li")));
console.log(selectEl.selectElements([
    false,
    document.querySelector("li")
]));