let favFruit = "grapes"
let fruits = ["apple", "mango", favFruit, true, 123, []]

// console.log(fruits[0])


// fruits.forEach((kuchbhi) => {
//     console.log(kuchbhi)
// });

let mainRoot = document.getElementById("root")

console.log(mainRoot)

let newParagraph = document.createElement("p")
newParagraph.innerHTML = `My Favorite Fruit is ${fruits[0]}`
newParagraph.setAttribute("title","this is a paragraph")

mainRoot.appendChild(newParagraph);


mainRoot.innerHTML = `<p> My Second Favorite food is ${fruits[1]}</p>`