// Question 1:

let cat = {
    complain: function() {
        console.log("Meow!")
    }
}
cat.complain();



// Question 2:

let heading = document.querySelector("h3");
heading.innerHTML = `Updated Heading`



// Question 3:

heading.style.fontSize = "2em";



// Question 4:

heading.classList.add("subheading");



// Question 5:

let paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}



// Question 6:

resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";



// Question 7:



const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catList(list){
    for(let i=0; i < list.length; i++){
        console.log(`Name: ${list[i].name}` )
    }
};

catList(cats);



// Question 8:


function createCats(cats){
    let html = document.querySelector(".cat-container");

    for(let i = 0; i < cats.length; i++){
        html.innerHTML += `<div> <h5>Name: ${cats[i].name}</h5> <p>Age: ${(cats[i].age !== undefined ? cats[i].age : "Unknown")}</p> </div>`
    }

}

createCats(cats);