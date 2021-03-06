


/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// Ex-1

let allPara = document.getElementsByTagName("p");
console.log(`There are ${allPara.length} Paragraphs.`);

//Exe-2
let firstDiv = document.getElementsByClassName("site-header container");
console.log(allPara);

//Exe-3
let jumboText = document.getElementById("jumbotron-text");
console.log(jumboText);


// let primaryListNodes = document.querySelector(".primary-content") -
let primaryListNodes = document.querySelectorAll(".primary-content")

let pList  = primaryListNodes[0].getElementsByClassName("p");
console.log(`Number of P tags with in primary-content class: ${pList.length}.`);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let btnAlert = document.getElementById("alertBtn");
btnAlert.addEventListener("click", function(){
    alert("Thanks for visiting Bikes for Refugees!");
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let colorChangerBtn = document.getElementById('bgrChangeBtn');
colorChangerBtn.addEventListener("click", function(e){
    colorChangerBtn.style.body.backgroundColor = 'blue'; 

})


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinkBtn = document.getElementById('largerLinksBtm');
