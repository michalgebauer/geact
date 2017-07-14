import dom from './geact/dom';

var e = dom.elem("DIV", null, 
    dom.elem("H1", null, "test"),
    dom.elem("P", { style: 'color: red;'}, "Testova stranka"));
document.querySelector('body').appendChild(e);