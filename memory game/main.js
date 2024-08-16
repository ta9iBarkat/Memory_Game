// Random
let python = {
    id:"python",
    img:"pics/1.png"
}
let rust = {
    id:"rust",
    img:"pics/2.png"
}
let typescript = {
    id:"typescript",
    img:"pics/3.png"
}
let java = {
    id:"java",
    img:"pics/4.png"
}
let javascript = {
    id:"javascript",
    img:"pics/5.png"
}

let myArr = [python, rust, typescript, java, javascript, python, rust, typescript, java, javascript]
let verif = []

for(let i=0; i<10; i++){
    let valid = false
    while(!valid){
        let random = Math.floor(Math.random() *10)+1
        if(!verif.includes(random)){
            valid = true
            verif[verif.length] = random
            let change = document.querySelector(`[data-sort='${random}']`)
            change.id = myArr[i].id
            change.childNodes[3].childNodes[1].src = myArr[i].img
        }
}
}

let flipper = document.querySelectorAll(".two-sides")

for(let i=0 ; i<=9 ;i++ ){
    flipper[i].classList.toggle("flipped")
}
setTimeout(() =>{
    for(let i=0 ; i<=9 ;i++ ){
        flipper[i].classList.toggle("flipped")
    }
},1500)

// flipping sides

document.querySelectorAll('.two-sides').forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped')
    })
})

document.body.addEventListener("click", (el) =>{
    if(el.target.parentElement.classList.contains("two-sides")){
        }
})

// console.log(Math.floor(14/2) === 14/2)
let flippedElements = []

document.body.addEventListener("click",(ele) => {
    if(ele.target.parentElement.classList.contains("two-sides")){

        flippedElements[flippedElements.length] = ele.target.parentElement
        let length = flippedElements.length

        console.log(flippedElements.length)
        console.log(flippedElements)

        if(length % 2 == 0 &&  length != 0){
            let elem1 = flippedElements[length-2]
            let elem2 = flippedElements[length-1]
            console.log(elem1)
            console.log(elem2)
    
            if(elem1.id == elem2.id){
                elem1.classList.add("match")
                elem2.classList.add("match")
            }else{
                document.querySelector(".tries").children[0].innerHTML++
                setTimeout(() =>{
                    elem1.className = "two-sides"
                    elem2.className = "two-sides"
                },800)
            }
        }
        // the win case
        let matchAll = true;
        for(let i=0 ; i<=9 ;i++ ){
            if(!flipper[i].classList.contains("match")){
                matchAll = false
            }
        }
        if(matchAll && !document.querySelector(".win")){
            let text =document.createTextNode("you won!!")
            let myDiv =document.createElement("div")
            myDiv.className = "win"
            myDiv.appendChild(text)
            document.body.appendChild(myDiv)
        }
    
    }})

document.body.onclick = (restartElem) =>{
    if(restartElem.target.className === "restart"){
        location.reload()
    }
}




