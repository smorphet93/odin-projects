
// clear all current divs

function clear() {
    const currentDiv = document.querySelectorAll(".div-item");

    currentDiv.forEach((div) => {
        div.remove();
    })
}

// create hover event to add colour 

function colourCells() {
    // on hover events to change colour

    const cells = document.querySelectorAll(".div-item");
    console.log(cells);


    // iterate through each div-item

    cells.forEach((cell) => {
        // for each cell, add a hover listener
        cell.addEventListener("mouseover", (e) => {
            // change background to blue
            e.target.style.background = "blue";
        });
    });
}

// Create x rows of x divs

function createGrid(rowCount) {

    clear();

    for (let i = 0; i < rowCount; i++) {
        for (let x = 0; x < rowCount; x++) {
            const div = document.createElement("div");
            div.classList.add("div-item");
            div.textContent = x;
            container.appendChild(div);
        }
    }

    const divClass = document.querySelectorAll(".div-item");

    divClass.forEach((div) => {
        div.setAttribute('style', 'width:calc(100% / ' + rowCount + ');');
    });

    colourCells();
}


// Locate container element
const container = document.querySelector("#container");

// Create 16 x 16 grid (default)
createGrid(16);


// config options

const button = document.querySelector(".change-btn");

button.addEventListener("click", () => {
    let valid = null;
    while (valid == null) {
        let config = prompt("Enter a number between 16-100");
        if (config <= 100 && config >= 16) {
            createGrid(config);
            valid = true;
        }
    }
    
})



