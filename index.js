const DOMBtn = document.querySelector(".creation");
const deleteBtn = document.querySelector(".delete");
const backDrop = document.querySelector(".backdrop");

let count = 0;

// When Clicking Button I want to create a new, visible, DOM element
DOMBtn.addEventListener("click", () => {
  // Example 1:
  // We want to append a name --> Manuel

  const nameArr = ["Manuel", "daniel", "Sandy", "Inmar", "Ian", "Peter"];

  // Create El
  const name = document.createElement("h2");

  // Add info to the Element
  name.textContent = nameArr[Math.floor(Math.random() * nameArr.length)];
  name.setAttribute("id", count);
  count++;

  // Add new el to the Document
  backDrop.appendChild(name);
});

// Variable Here for solution 2
let delCount = 0;

// When I click btn I want to delete new name created starting from the top
deleteBtn.addEventListener("click", function () {
  // Target all h2
  const h2HTML = document.querySelectorAll("h2"); // []

  // Target the first name
  h2HTML[0].remove();

  //
  //
  //

  const h2ID = document.getElementById(`${delCount}`);
  h2ID.remove();
  delCount++;
});

const objArr = [
  { high: 10, name: "Daniel" },
  { high: 50, name: "Peter" },
  { high: 45, name: "Inmar" },
  { high: 30, name: "Ian" },
  { high: 51, name: "Manuel" },
  { high: 1, name: "Ahmed" },
  { high: 3, name: "Collin" },
  { high: 33, name: "Adam" },
];

console.log(objArr);

const sorted = objArr.sort(function (a, b) {
  return a.high - b.high;
});

console.log(sorted);

const objArr2 = [
  { high: 10, name: "Daniel" },
  { high: 50, name: "Peter" },
  { high: 45, name: "Inmar" },
  { high: 30, name: "Ian" },
  { high: 51, name: "Manuel" },
  { high: 1, name: "Ahmed" },
  { high: 3, name: "Collin" },
  { high: 33, name: "Adam" },
];

for (let i = 0; i < objArr2.length; i++) {
  for (let j = i + 1; j < objArr2.length; j++) {
    if (objArr2[j].high < objArr2[i].high) {
      let pointerClone = objArr2[i];
      objArr2[i] = objArr2[j];
      objArr2[j] = pointerClone;
    }
  }
}

console.log(objArr2);
