const container = document.getElementById("containerID");
const btn = document.getElementById("buttonID");

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
        const squareSize = Math.ceil(container.offsetWidth / num);//Math.ceil //Math.floor
        console.log(squareSize);

    for(let x=0; x<num; x++){
        for(let y=0; y<num; y++){
            const div = document.createElement("div");
            div.className = "grid";
        
            div.style.width = `${squareSize}px`;//`${squareSize-2}px`
            div.style.height = `${squareSize}px`;

            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red";
            });
            //div.addEventListener("mouseout", () => {
                //div.style.backgroundColor = "aqua";
            //});
            
            container.appendChild(div);
        }
    }
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
