"use strict"


// console.log(document);

// let heads = document.getElementsByTagName("h1");
// console.log(heads);  
// console.log(heads[0]);    
// console.log(heads);

// for (const item of heads) {
//     console.log(item);
// }



// let elem = document.getElementById("header");                    

// let elem = document.getElementsByClassName("header");            
// let elem = document.querySelector("#header1");                 


// let elem = document.querySelectorAll("#header1");                  
// for (const item of elem) {                                          
// console.log(item);
// }

// let h1 = document.querySelector("#products .card-item2 h1:nth-child(2)");      

// let elems = document.querySelectorAll("#products .card-item2 h1" ); 

// for (let i = 0; i < elems.length; i++) {    
//   console.log(elems[i]);
// }
// console.log(elems[0]);     

// let a = document.querySelector("#products .card-item1 h1");

// console.log(elem.innerText);   

// let elemText = elem.innerText; 

// if(elemText == "Salam"){       
//     console.log("correct");
// }

// let elemText = elem.innerHTML;   

// if (elemText == "Salam") {
//     console.log("correct");
// } 

// let a = document.querySelector("#products .card-item1 a");

// elem.innerText = "Roya";

// a.innerText = "Roya";   
// a.innerText = "<span>Roya</span>";   
// a.innerHTML = "<span>Roya</span>";    
// console.log(a);



let element = document.querySelector("#products .card-item1 h1");

// element.style.color = "red";
// element.style.backgroundColor = "yellow";
// // element.style.position = "relative";
// // element.style.top = "100px";

// element.className = "active"  

// console.log(element.classList);   

// element.classList.add("active");  

// element.classList.add("Roya");
// element.classList.remove("header");   

// let button =  document.querySelector("#products .switch");

// button.onclick = function() {  
//    alert("Clicked1")
// }


// button.onclick = function() {  
//     alert("Clicked2")
// }

// button.addEventListener("click", function(){   
//     alert("Clicked1")
// })

// button.addEventListener("click", function(event){   
//     event.target.style.backgroundColor = "red";                   
// })



// let button =  document.querySelector("#products .switch");


// let btnOn = document.querySelector("#products .buttons .on");
// let btnOff = document.querySelector("#products .buttons .off");

// let body = document.querySelector("body");
// let icon = document.querySelector("#products .icon i");



// btnOn.addEventListener("click", function(){   // button on clickinde ekran ag, icon sari olur
//     body.style.backgroundColor = "white";
//     icon.style.color = "yellow";
// })

// btnOff.addEventListener("click", function(){   // button off clickinde  ekran qara, icon boz olur
//     body.style.backgroundColor = "black";
//     icon.style.color = "gray";
// })



// icon.addEventListener("click", function () {

//     if (!this.classList.contains("active-icon") && !body.classList.contains("active-body")) {   
//         this.classList.add("active-icon");                                                      
//         body.classList.add("activeedirik-body");                                                
//     } else {
//         this.classList.remove("active-icon");                                                    
//         body.classList.remove("active-body");
//     }

// })


// icon.addEventListener("mouseout",function(){
//     this.classList.remove("active-icon");                                                    
//     body.classList.remove("active-body");
// })

// icon.addEventListener("mouseover",function(){
//     this.classList.add("active-icon");                                                    
//     body.classList.add("active-body");
// })





// let btn = document.querySelector("#products button");
// let input = document.querySelector("#products input");
// // let header = document.querySelector("#products h1")
// let ul = document.querySelector("#products ul")



// btn.addEventListener("click", function () { 
//     let inputValue = input.value;         
//     header.innerText = inputValue         
//     input.value = "";                     

// })



// btn.addEventListener("click", function(){ 
//     if(input.value == " "){  
//         alert("Dont empty");                      
//         return;
//     }

//     let items = document.querySelectorAll("li");    
//     for (const item of items) {
//         if(item.innerText == input.value){
//             alert("Already exist");
//             input.value = "";
//             return;
//         }                                         

//     }

//     let li = document.createElement("li");        
//     li.className = "list-group-item mt-2";       
//     li.innerText = input.value;                     
//    ul.append(li);                                        
//    input.value = "";                               
// })









//Homework


let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
let ul = document.querySelector("#products ul");


btn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Dont empty");
        return;
    }

    let items = document.querySelectorAll("li");

    for (const item of items) {
        if (item.innerText == input.value) {
            alert("Already exist");
            input.value = "";
            return;
        }
    }

    let li = document.createElement("li");
    li.className = "list-group-item mt-2";
    li.innerText = input.value;
    ul.append(li);
    input.value = "";



    let itemsLi = document.querySelectorAll("#products ul li");
    for (const item of itemsLi) {
        item.addEventListener("click", function () {
            this.remove();
        })
    }

})





