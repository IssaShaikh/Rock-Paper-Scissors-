let options = document.querySelectorAll(".item");
let uchoise = null;

let cScore = document.getElementById("num1");
let uScore = document.getElementById("num2");

let cText = document.getElementById("cText");
let uText =document.getElementById("uText");

let result = document.getElementById("result");

let heading = document.querySelector("#heading");


let C = 1;

let U = 1;





let Arr = ["ROCK","PAPER","SCISER"];


options.forEach(function(currentV ,index , arr){
currentV.addEventListener("click",function(){
  options[0].style.borderColor = "black";
  options[1].style.borderColor = "black";
  options[2].style.borderColor = "black";

   let  uchoise  = index;

   let d = uchoise;
   
    let cchoise = cChoise();
if(cchoise==uchoise){

  options[d].style.borderColor = "blue";

}
    else if(cchoise == 0){
options[0].style.borderColor = "red";

    }
    else if(cchoise==1){
      options[1].style.borderColor = "red";

    }
else{
  options[2].style.borderColor = "red";

}

    cText.innerText = Arr[cchoise];
    uText.innerText =Arr[uchoise]

    if(uchoise == 0 && cchoise == 1){
        cScore.innerText = C;
        C++;

        result.innerText="COMPUTER WIN THIS MATCH";
        result.style.color ="red";
    }
  else if(uchoise == 0 && cchoise == 2){
      uScore.innerText = U;
      U++; 
      result.innerText="YOU WIN THIS MATCH";
      result.style.color ="green";
  }
  else if(uchoise == 1 && cchoise == 0){
    uScore.innerText = U;
    U++;
    result.innerText="YOU WIN THIS MATCH";
    result.style.color ="green";
  }

  else if(uchoise == 1 && cchoise == 2){
    cScore.innerText = C;
    C++;
    result.innerText="COMPUTER WIN THIS MATCH";
    result.style.color ="red";
  }
  else if(uchoise == 2 && cchoise == 0){
    cScore.innerText = C;
    C++;
  }
  else if(uchoise == 2 && cchoise == 1){
    uScore.innerText = U;
    U++;
    result.innerText="YOU WIN THIS MATCH";
    result.style.color ="green";
  }
  else{
    result.innerText="DROW THIS MATCH";
    result.style.color ="blue";
  }
});
});

function cChoise(){
    return Math.floor(Math.random() * 3);
}

console.log(cChoise());

let tl = gsap.timeline();

tl.from("#heading",{

  opacity:0,
  duration:2,
  y:-20,
  backgrounColor:"white",
  scale:0.1,
})

tl.from(".item,#score,#btn",{
  opacity:0,
  scale:0.1,
  duration:0.5,
  stagger:0.5,
  rotate:360,
})

tl.from("#name,#nam,#nam1,#text1,#text2,#num1,#num2",{
  opacity:0,
  y:20,
  duration:0.5
})
