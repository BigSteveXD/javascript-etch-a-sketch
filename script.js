const container = document.getElementById("containerID");//#container

const btn = document.getElementById("buttonID");

//const gridClass = document.getSelection(".grid");

createGrid(16);

btn.addEventListener("click", () => {
    let numberGrid = prompt("Enter size of grid");
    if(numberGrid > 100){
        numberGrid = 100;
    }

    removeGrid();

    createGrid(numberGrid);
});

function createGrid(num){
        const containerWidth = container.clientWidth;
        //const squaresPerRow = containerWidth / num; //Math.ceil(Math.sqrt(num));
        const squareSize = containerWidth / num;//containerWidth / squaresPerRow;

    for(let x=0; x<num; x++){
        const div = document.createElement("div");
        div.className = "grid";
        //div.style.grid.
        //(960 - ((num - 1) * 20)) / num;
        
        // div.style.width = "${squareSize}px";
        // div.style.height = "${squareSize}px";

        div.style.width = squareSize;
        div.style.height = squareSize;

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
