const container = document.getElementById("containerID");//#container

const btn = document.getElementById("buttonID");

let numberGrid = 16;

createGrid(16);

btn.addEventListener("click", () => {
    numberGrid = prompt("Enter size of grid");
    if(numberGrid > 100){
        numberGrid = 100;
    }

    //removeGrid(input)

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



/*
const div = document.createElement("div");
div.className = "grid";
container.appendChild(div);
const div2 = document.createElement("div");
div2.className = "grid";
container.appendChild(div2);
const div3 = document.createElement("div");
div3.className = "grid";
container.appendChild(div3);
const div4 = document.createElement("div");
div4.className = "grid";
container.appendChild(div4);
const div5 = document.createElement("div");
div5.className = "grid";
container.appendChild(div5);
const div6 = document.createElement("div");
div6.className = "grid";
container.appendChild(div6);
const div7 = document.createElement("div");
div7.className = "grid";
container.appendChild(div7);
const div8 = document.createElement("div");
div8.className = "grid";
container.appendChild(div8);
const div9 = document.createElement("div");
div9.className = "grid";
container.appendChild(div9);
const div10 = document.createElement("div");
div10.className = "grid";
container.appendChild(div10);
const div11 = document.createElement("div");
div11.className = "grid";
container.appendChild(div11);
const div12 = document.createElement("div");
div12.className = "grid";
container.appendChild(div12);
const div13 = document.createElement("div");
div13.className = "grid";
container.appendChild(div13);
const div14 = document.createElement("div");
div14.className = "grid";
container.appendChild(div14);
const div15 = document.createElement("div");
div15.className = "grid";
container.appendChild(div15);
const div16 = document.createElement("div");
div16.className = "grid";
container.appendChild(div16);

// div.style.color = "blue";
// div2.style.color = "blue";

// div.classList.add("grid");
// div2.classList.add("grid");

div.addEventListener("mouseover", () => {
    //document.get
    div.style.backgroundColor = "red";
});
div2.addEventListener("mouseover", () => {
    //document.get
    div2.style.backgroundColor = "red";
});
div3.addEventListener("mouseover", () => {
    //document.get
    div3.style.backgroundColor = "red";
});
div4.addEventListener("mouseover", () => {
    //document.get
    div4.style.backgroundColor = "red";
});
div5.addEventListener("mouseover", () => {
    //document.get
    div5.style.backgroundColor = "red";
});
div6.addEventListener("mouseover", () => {
    //document.get
    div6.style.backgroundColor = "red";
});
div7.addEventListener("mouseover", () => {
    //document.get
    div7.style.backgroundColor = "red";
});
div8.addEventListener("mouseover", () => {
    //document.get
    div8.style.backgroundColor = "red";
});
div9.addEventListener("mouseover", () => {
    //document.get
    div9.style.backgroundColor = "red";
});
div10.addEventListener("mouseover", () => {
    //document.get
    div10.style.backgroundColor = "red";
});
div11.addEventListener("mouseover", () => {
    //document.get
    div11.style.backgroundColor = "red";
});
div12.addEventListener("mouseover", () => {
    //document.get
    div12.style.backgroundColor = "red";
});
div13.addEventListener("mouseover", () => {
    //document.get
    div13.style.backgroundColor = "red";
});
div14.addEventListener("mouseover", () => {
    //document.get
    div14.style.backgroundColor = "red";
});
div15.addEventListener("mouseover", () => {
    //document.get
    div15.style.backgroundColor = "red";
});
div16.addEventListener("mouseover", () => {
    //document.get
    div16.style.backgroundColor = "red";
});


div.addEventListener("mouseout", () => {
    //document.get
    div.style.backgroundColor = "aqua";
});
div2.addEventListener("mouseout", () => {
    //document.get
    div2.style.backgroundColor = "aqua";
});
div3.addEventListener("mouseout", () => {
    //document.get
    div3.style.backgroundColor = "aqua";
});
div4.addEventListener("mouseout", () => {
    //document.get
    div4.style.backgroundColor = "aqua";
});
div5.addEventListener("mouseout", () => {
    //document.get
    div5.style.backgroundColor = "aqua";
});
div6.addEventListener("mouseout", () => {
    //document.get
    div6.style.backgroundColor = "aqua";
});
div7.addEventListener("mouseout", () => {
    //document.get
    div7.style.backgroundColor = "aqua";
});
div8.addEventListener("mouseout", () => {
    //document.get
    div8.style.backgroundColor = "aqua";
});
div9.addEventListener("mouseout", () => {
    //document.get
    div9.style.backgroundColor = "aqua";
});
div10.addEventListener("mouseout", () => {
    //document.get
    div10.style.backgroundColor = "aqua";
});
div11.addEventListener("mouseout", () => {
    //document.get
    div11.style.backgroundColor = "aqua";
});
div12.addEventListener("mouseout", () => {
    //document.get
    div12.style.backgroundColor = "aqua";
});
div13.addEventListener("mouseout", () => {
    //document.get
    div13.style.backgroundColor = "aqua";
});
div14.addEventListener("mouseout", () => {
    //document.get
    div14.style.backgroundColor = "aqua";
});
div15.addEventListener("mouseout", () => {
    //document.get
    div15.style.backgroundColor = "aqua";
});
div16.addEventListener("mouseout", () => {
    //document.get
    div16.style.backgroundColor = "aqua";
});
*/


