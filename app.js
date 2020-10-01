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
const cardContainer = document.querySelector('body > div.container.text-muted > div');

things.forEach(element => {
    console.log(element.name, element.notes.toString());
});

for(let i = 0; i<things.length; i++){
    cardTitles[i].innerHTML = things[i].name;
    cardText[i].innerHTML = things[i].notes.toString();
}
//---------------------------------our own class---------------------------
class User {
    constructor(name, notes){
        this.name = name;
        this.notes = notes;
    }
    addToArray(data){
        things.push(data);
        user.makeCard(data);
    }
    makeCard(data){
        cardContainer.innerHTML += `
        <div class="col-md-6 col-lg-3 my-2">
                        <div class="card">
                            <img src="css/male.jpg" class="card-img-top img-fluid">
        
                            <div class="card-block text-center">
                                <h3 class="card-title">${data.name}</h3>
                                <p class="">${data.notes}</p>
                            </div>
                        </div>
                    </div>
        `;
    }
}

let user = new User();

const form = document.querySelector('body > form');
form.addEventListener('submit', e => {
    e.preventDefault();
    if(form.name.value&&form.notes.value){
        let obj = {name: form.name.value.trim(), notes: form.notes.value.trim()};
        user.addToArray(obj);
        form.reset();
    }
    else{
        alert('Both fields (name, notes) must be filled!');
    }
});



//TODO add colored borders for empty input fields, for now, just an alert
//TODO add gender field to form for appropriate pictures
//TODO store added values in local storage and check for localstorage.getitem on pageload, then display to DOM those values.