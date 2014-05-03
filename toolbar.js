//toolbar.js
var oojs = (function(oojs) {

    var createToolbarItems = function(itemElements) {
        var items = [];

        [].forEach.call(itemElements, function(el, index, array) {

            var item = {
                el: el,
                disable: function() {
                    this.el.classList.add("disabled");
                },
                enable: function() {
                    this.el.classList.remove("disabled");
                },
                isDisabled: function() {
                    return this.el.classList.contains("disabled");
                },
                activate: function() {
                    if (this.isDisabled()) {
                        return;
                    }
                    this.el.classList.add("active");
                },
                deactivate: function() {
                    if (this.isDisabled()) {
                        return;
                    }
                    this.el.classList.remove("active");
                },
                isActive: function() {
                    return this.el.classList.contains("active");
                },
                toggleActiveState: function() {
                    if (this.isActive()) {
                        this.deactivate();
                    } else {
                        this.activate();
                    }
                }
            };//end item

            items.push(item);

        });

        return items;
    } //end createToolBarItems

    oojs.createToolbar = function(elementId) {
        var element = document.getElementById(elementId);

        var items = element.querySelectorAll(".toolbar-item");
        return {
            items: createToolbarItems(items),

            add: function() {
                //add add functionality
            },
            remove: function() {
                //add remove functionality
            },

        }

        // if (!element) { // if no element exists -> create it
        // 	element = document.createelement("DIV");

        // };
    };

    return oojs;

}(oojs || {}));

// var toolBar = oojs.createToolbar("myToolbar");

// var = toolbarItem = toolbar.items[0];

// toolbarItem.enabled = true; // or false

// var enabled = toolbarItem.enabled;
