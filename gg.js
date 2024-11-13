
let x=9;
do{
    if (x%2 !== 0) console.log("hgjhghj",x);
    x++;
    console.log(x);
}while(x<=5)


let colors=["red","green","blue"];
for (index in colors){
    console.log(index,colors[index]);
}
let user={
    name:"sholeh",
    age:40,
}
console.log(user);
let selectedproperty="  name";
console.log(user[selectedproperty]);
for(key in user){
    console.log(key,user[key])
}
const sh=document.getElementById("sh");
const dd=document.getElementById("dd");
let count=0;



let t=20;
function jolo(){
    if (sh.style.opacity==0){
        sh.style.opacity=1;
        sh.style.backgroundImage="linear-gradient(to right ,red,green)";
        }


setTimeout(()=>{
    console.log("sholeh")

},200);
  let v = sh.style.transform=`translateY(${t*=2}vh)`;

  console.log(v);
  console.log(dd.textContent);
  count++;
  dd.textContent=count;

    }
    function aghab(){
        if (sh.style.opacity==0){
            sh.style.opacity=1;
            sh.style.backgroundImage="linear-gradient(to right ,red,green)";
            }
    
    
    setTimeout(()=>{
        console.log("sholeh")
    
    },200);
      let v = sh.style.transform=`translateY(${t/=2}vh)`;
    
      console.log(v);
      console.log(dd.textContent);
      count++;
      dd.textContent=count;
    
        }
   const person={
       name:"shoale",
       last:"khalkhali",
       set fullName(value){
          if (typeof  value !=="string")
        throw  new Error("hi eshtebah zadi !");
           const parts=value.split(" ");
         if (parts.length != 2)
        throw new Error('new error');
           this.name=parts[0];
        
           this.last=parts[1];
          
       },
    }
  
    try {
        person.fullName="hjhj jkjk";
        
    } catch (error) {
        alert(error);
    }
 const   numbers=[
        {name:"a",id:1},
        {name:"b",id:2},
        {name:"b",id:2},
    ];
    const   number=[1,2,3,4];
//    const end=   number.push(4,5);
//    console.log(number,"kljj");
//    console.log(end,"hhhhhhhh");
// const end=   number.unshift(4,5);
// console.log(number,"kljj");
// console.log(end,"hhhhhhhh");
const end=   number.splice(1,0,2,3);
console.log(number,"kljj");
console.log(end,"hhhhhhhh");

      

   
  
  













