document.addEventListener('DOMContentLoaded', function() {
    let main = document.getElementById("main_component");

    const createdElements = createBlank({
        "main_div" : "div",
        "second_div" : "div"
    });

    console.log(createdElements.main_div);
    console.log(createdElements.second_div);
});

function createBlank(elements = {} , target = "main_component") {
    const createdElements = {};

    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            const element = document.createElement(elements[key]);
            element.id = key;
            createdElements[key] = element;

            const html_target = document.getElementById(target);
            if (html_target) {
                html_target.appendChild(element);
            }
        }
    }

    return createdElements;
}
