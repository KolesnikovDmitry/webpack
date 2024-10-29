import './menu.scss';

export default function (array, className) {
    let menu = document.createElement("ul");
    menu.className = className;
    let listItem = "";
    array.forEach(function (item) {
        listItem += "<li>" + item + "</li>";
    });
    menu.innerHTML = listItem;
    return menu;
};