let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let styleElement = document.createElement("style");
let hidden = `
.hidden {
  display: none;
  }`;

styleElement.appendChild(document.createTextNode(hidden));
console.log(hidden);
document.head.appendChild(styleElement);

console.log(typeof ul);
console.log(ul.childNodes);
ul.childNodes.forEach((node) => {
  // console.log(node.childNodes);
  if (node.textContent === "Fast and Furious") {
    node.remove();
    ul.insertBefore(node, ul.childNodes[0]);
  }

  node.addEventListener("click", () => {
    if (node.textContent != "Fast and Furious") {
      alert("You clicked on " + node.textContent);
    } else {
      alert(
        "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
      );
    }
  });
  for (let i = 0; i < li.length; i++) {
    if (i % 2 === 0) {
      li[i].classList.add("hidden");
    }
  }
});
let div = document.createElement("div");
let section = document.createElement("section");
let seecodOption = document.createElement("option");
let firstOption = document.createElement("option");
let select = document.createElement("select");
let option2 = document.createElement("option");
let option1 = document.createElement("option");
let text = document.createElement("p");
let text2 = document.createElement("p");
ul.insertBefore(div, ul.childNodes[0]);
div.appendChild(section);
section.appendChild(select);
select.appendChild(option1);
select.appendChild(option2);
option1.appendChild(text);
option2.appendChild(text2);
text.textContent = "Important franchises";
text2.textContent = "Normal franchises";
option1.setAttribute("value", "important");
option2.setAttribute("value", "normal");
select.selectedIndex = 1;
select.addEventListener("change", () => {
  if (select.value === "important") {
    hidden = `
    .hidden {
      display: block;
      }`;
    styleElement.appendChild(document.createTextNode(hidden));
    document.head.appendChild(styleElement);
  } else {
    hidden = `
    .hidden {
      display: none;
      }`;
    styleElement.appendChild(document.createTextNode(hidden));
    document.head.appendChild(styleElement);
  }
});
