var majasdObj = [
    {name: 'Ann', notes: [3, 5, 8]},
    {name: 'Jeanny', notes: [4, 6, 9]},
    {name: 'John', notes: [2, 7, 9]},
    {name: 'Max', notes: [1, 5, 9]},
]

let things = majasdObj;
//dom query
const cardTitles = document.querySelectorAll('.card-title');
const cardText = document.querySelectorAll('div.container.text-muted > div > div > div > div > p');
// cardTitles.forEach(title => title.innerHTML = 'lmao'); we have the titles
// cardText.forEach(text => text.innerHTML = 'yolo'); we have the text


things.forEach(element => {
    console.log(element.name, element.notes.toString());
});
//we have the values

for(let i = 0; i<things.length; i++){
    cardTitles[i].innerHTML = things[i].name;
    cardText[i].innerHTML = things[i].notes.toString();
}

// make if-then cond for fem names and male names
// mindblow project: add a form that takes in a name, notes and gender and then, when submitted, adds it to the dom
