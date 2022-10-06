console.log("Hello from ogooga.js file");

const allBtn=document.querySelectorAll('.btn');
console.log("arr allBtn is : " , allBtn);
console.log(`from ogooga.js , landing page casino has ${allBtn.length}  buttons : ` , allBtn.length);

//landing page casino has 28  buttons :  28


for(let i=0 ; i<allBtn.length ; i++){
  allBtn[i].addEventListener("click" , function(event){
   event.preventDefault();
    console.log("you clicked the button");

    console.log(`you clicked the ${i + 1} button`);
  })
}

















//
