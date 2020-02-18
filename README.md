# DOM Elements Selectors

This module allows you to get elements by CSS selectors. The advantage of the module is that it recognizes what input selector you use - either a string or a DOM element. It may be very useful when you are not sure what a variable is: wether a string selector or an element.



## How to start
```sh
npm install select-el
```



## Example
```js
import * as selectEl from 'select-el';
// or
// var selectEl = require('select-el');

// get an element
selectEl.one(".my-selector");
// get all elements
selectEl.all(".my-selector");
// check if a variable is an element
selectEl.isElement(".my-selector");
// check if an element exists
selectEl.exists(".my-selector");
// check if a variable is an HTML Element
selectEl.isHTMLElement(".my-selector");
// check if a variable is Window
selectEl.isWindow(selector);
// select elements from an existing array
selectEl.selectElements([
    false,
    document.querySelector("li")
])
```



## Functions



### selectEl.one
Select only one element.

Argument | Type | Optional | Description
-------- | ---- | -------- | -----------
selector | (HTMLElement \| Window \| string) |  | Either a string selector or an element.
outer | string\|HTMLElement | yes | An outer element. Either a string selector or an element. Relevant only for string selectors.

<hr>

Returns **(HTMLElement | null)**

<hr>
<br>



### selectEl.all
Select all elements.

Argument | Type | Optional | Description
-------- | ---- | -------- | -----------
selector | (NodeList \| Array<HTMLElement\|Window> \| HTMLElement \| Window \| string) |  | A string selector, an element or a node list.
outer | string\|HTMLElement | yes | An outer element. Either a string selector or an element. 

<hr>

Returns **NodeList | Array<HTMLElement|Window>**

<hr>
<br>



### selectEl.exists
Check if an element exists.

Argument | Type | Optional | Description
-------- | ---- | -------- | -----------
selector | (HTMLElement \| string) |  | A string selector or an element.

<hr>

Returns **boolean**

<hr>
<br>



### selectEl.isElement
Check if variable is an HTMLElement or Window.

Argument | Type | Optional | Description
-------- | ---- | -------- | -----------
el | (any) |  | The variable to be checked.

<hr>

Returns **boolean**

<hr>
<br>



### selectEl.isHTMLElement
Check if variable is an HTMLElement.

Argument | Type | Optional | Description
-------- | ---- | -------- | -----------
el | (any) |  | The variable to be checked.

<hr>

Returns **boolean**

<hr>
<br>



### selectEl.isWindow
Check if variable is Window.

Argument | Type | Optional | Description
-------- | ---- | -------- | -----------
el | (any) |  | The variable to be checked.

<hr>

Returns **boolean**

<hr>
<br>



### selectEl.selectElements
Select elements in array.

Argument | Type | Optional | Description
-------- | ---- | -------- | -----------
array | (Array<any> \| NodeList) |  | An array of elements.

<hr>

Returns **NodeList**

<hr>
<br>