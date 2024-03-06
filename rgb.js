let btn=document.querySelector("button");

btn.addEventListener("click", function(){
  let h3= document.querySelector("h3");
  let getRandom=randomcolor();
  h3.innerText=getRandom;

  let div=document.querySelector("div");

  div.style.backgroundColor=getRandom;
});

function randomcolor(){
    let red=Math.floor(Math.random()*258);
    let green=Math.floor(Math.random()*258);
    let blue=Math.floor(Math.random()*258);

    let color=`RGB(${green},${green}, ${blue}) `;
    return color;
}