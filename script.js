const container = document.getElementById("containerID");//#container

const btn = document.getElementById("buttonID");

let numberGrid = 16;

createGrid(16);

btn.addEventListener("click", () => {
    numberGrid = prompt("Enter size of grid");
    if(numberGrid > 100){
        numberGrid = 100;
    }

    removeGrid();

    createGrid(numberGrid);
});

function createGrid(num){
    for(let x=0; x<num; x++){
        const div = document.createElement("div");
        div.className = "grid";
        div.addEventListener("mouseover", () => {
            //document.get
            div.style.backgroundColor = "red";
        });
        div.addEventListener("mouseout", () => {
            //document.get
            div.style.backgroundColor = "aqua";
        });
        container.appendChild(div);
    }
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
