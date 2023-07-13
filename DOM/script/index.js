// Example 1
const element = document,
getElementById("myElement");
// console.log(element);
element.textcontent = "New text added"

const paragraph = document.
getElementById("paragraph");
paragraph.innerHTML = "<strong>New Content</strong>";

// example 3
let property = document.
getElementById ("property");
property.style.backgroundColor = 
"green"
property.style.fontsize = '3ren';
property.style.textAlign = "center";

//getElementisByClassName()-example 1
let element = document.
getElementsByClassName("myClass");
console.log(element.length);
ElementInternals(1).style.border ="2px solid red";

// example 2
const myClass2 = Document.
getElementsByClassName("myClass2");
console.log(myclass2);
myclass2(0).textContent ="Modified text";
myClass2(0).classlist.add
("newclass");

// example 3
const myClass3 = do


// day 2

const button = document.getElementById('click-me'):

button.AddEvent.Lister('click',() ==>)





const countdown = 5;
function updateTimer() {
    const timer = document.getElementById('timer');
    timer.textContent = countdown;
    countdown--;
    if (countdown == 0) {
        setTimeout(updateTimer,1000);
    }

} hi