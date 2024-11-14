import ScrollDisplay from "../../src/main";

let ScrollDisplayObj = new ScrollDisplay("totop", 20);
ScrollDisplayObj.eventAddSimple("flex", 501);

let listElem = document.getElementById("list");

if (listElem) {
    for (let i = 0; i < 50; i++){
        let itemElem = document.createElement("li");
        itemElem.textContent = "テキストテキスト";
        listElem.append(itemElem);
    }
}
