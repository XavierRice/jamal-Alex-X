const body = document.querySelector("body")

for(let i = 0; i <3 ; i++){
    
    const box = document.createElement("div")
    box.classList.add("box")
    body.append(box)


}

const box = document.querySelectorAll("div")
console.log(box)
box[0].style.backgroundColor= "red";
box[1].style.backgroundColor= "yellow";
box[2].style.backgroundColor= "green";

for (let i=0; i < 3; i++) {
    box[i].addEventListener("click", (event) => {
        body.style.backgroundColor = box[i].style.backgroundColor;
    })

}