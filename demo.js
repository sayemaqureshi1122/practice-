/*
console.log("hello")
console.warn("world");
console.error("Welcome");

alert("GOAL")
prompt("Nice shot")

for (var i = 5; i >0;i--)
     console.log(i);
let a=12
while(a>1){
    a--;
    console.log(a);
}

console.log(this);

let b={
    name:function(){
        console.log(this);
    },
    age:20,
    gender:"female"
}
b.name()

let c={
      newName :()=>{
        console.log(this);
        let nn =() =>{
            console.log(this);
        }
        nn()
    }
}
c.newName()

// Apply, call and bind:--

let obj1 = {name:"sam",age:20,gender:"male"}
function d(){
    console.log(this);
}
d.call(obj1)

let obj2={ id:1232, email:"abcd@gmail.com", gender:"male" }
function e(a,b,c,d){
    console.log(this,a,b,c,d);
}
e.apply(obj2,[1,2,3,"sam"])

let obj3={ id:6567, email:"efgh@gmail.com", gender:"female" }
function f(){
    console.log(this);
 }

 let cc=f.bind(obj3)
 cc()


function G(name,age,gender){
    this.name=name,
    this.age=age
}
G.prototype.gender=function(){
    console.log(this.name);}
 const n1 = new G("sam",19)
 const n2 = new G("daam",20)

 // closures - ek function jo return kare dusra function, and uses var of parent
let h=() =>{
    a=12
    return function(){
        console.log(a);
    }   
}

let hh = h()
hh()

function i(){
    let b=22
    return setTimeout (function(){
        console.log(b)}, 3000)
    }
i()

// event bubbling - agar listerner button pe nahi hai to wo uske parent se check karega
//event delegation- jab aap event listerner se kai sare different elements ke events ko handle kae sakte hai
 var  Parent= document.querySelector("#parent")
 Parent.addEventListener("click",function(e){
    if(e.target.id=== 'play'){
        console.log("play song");
    }
    else if(e.target.id=== 'pause'){
        console.log("pause song");
    }
})
  // Try and catch block events
function divide(a,b){
    try{
        if(b==0){
            throw Error ("Invalid")
        }
        co
nsole.log(a/b);
    }
    catch(err){
         console.error(err);
    }
}
divide(12,0)

// Events

console.log("hey1");
console.log("hey2");
setTimeout(() => {
    console.log("hey3");
},2000);
console.log("hey 4");

 const x=0
 console.log(x>0?true:false);
 if (x<=0){
    setTimeout(() => {
        console.log("late result");
    }, 3000);
 }
let count=0;
var a = setInterval(() => {
    count++;
    console.log(count);
    if(count===4)
        clearInterval(a)
}, 
// fetch - it gets or frtches the data from the browser

fetch(`https://jsonplaceholder.typicode.com/posts/1`)
.then(read=> read.json())
.then(res=> console.log(res. title))


fetch(`https://jsonplaceholder.typicode.com/posts/1`)
.then(a => a.json())
.then(b => console.log(b.userId))
*/
  // axios - does the same function as fetch but a bit user friendly (isme ek he then call karna padhta hai)

//   axios.get("https://api.chucknorris.io/jokes/random")
// .then(res => console.log(res.data.url))

// axios.get("https://dog.ceo/api/breeds/image/random")
// .then( result =>console.log(result.data.status))

// axios.get("https://v2.jokeapi.dev/joke/Any")
// .then(res => console.log(res.data))


//  let parche=new Promise((resolve, reject) => { 
// fetch("https://dog.ceo/api/breeds/image/random")
// .then( d => d.json())
// .then(res => {
//     if(res.status==="success")
//         resolve("right");
//     else reject("wrong")
// })
// })

// parche
// .then(() => {
//     console.log("hara button")})
// .catch(()=>{
// console.log("laal button")
// })

//  let receipt=new Promise((resolve, reject) => {
// fetch("https://pokeapi.co/api/v2/pokemon")
// .then( raw =>raw.json())
// .then(fhal =>{
//     if(fhal.results[8].name==="blastoise")
//     resolve()
//     else reject()
// })
// })
// receipt
// .then(()=> {
//     console.log("hara button")})
// .catch(()=>{
//     console.log("laal button")})

//  let chit=new Promise((resolve, reject) => {
// fetch("https://pokeapi.co/api/v2/pokemon/1")
// .then( req =>req.json())
// .then(res=> {
//     if(res.game_indices[4].game_index===1)
//     resolve();
//     else reject()
// })
// })

// chit
// .then(()=> {
//     console.log("haara button clicked");
// })
// .catch(() =>{
//     console.log("laal button clicked");
// })



// function doasynctask (url, callback){
//     fetch(url)
//     .then(raw=> raw.json())
//     .then( res=> {
//         callback(res)
//     })
// }
// doasynctask("https://randomuser.me/api/",function(res){
//     console.log(res.results[0].name.first , res.results[0].gender ,res.results[0].email)
// })


// function abcd(url, callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then( res => callback (res))
// }

// abcd("https://randomuser.me/api",function (res){
//     console.log(res.results[0].name.first , res.results[0].gender)
// })

// function data(url,callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(res => callback(res))
// }
// data("https://catfact.ninja/fact", function(res){
//     console.log(res.fact ,  res.length)
// })

//  async function mm(){
//       let a= await fetch("https://catfact.ninja/fact")
//       a= await a.json()
//       console.log(a.fact);
   
// }

// mm()

// generators - use to pause the execution flow of the code
// yield bolne par pause hota hai code and .next() to perint the value after the  yield

function* allNum(){
    for(let i=1;i<10;i++){
        yield i;
    }
}
let a = allNum()
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)