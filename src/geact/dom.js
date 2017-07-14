module.exports = {
    elem: function(tagName, attributes) {
        var e = document.createElement(tagName);
        
        for(var attr in attributes) {
            if(attr in e) {
                e[attr] = attributes[attr];
            } else {
                e.setAttribute(attr, attributes[attr]);
            }
        }

        Array.prototype.slice.call(arguments, 2).forEach(function(elem) {
            if(typeof elem == 'string') {
                e.innerHTML = elem;
            } else {
                e.appendChild(elem);
            }
        })

        return e;
    }
}