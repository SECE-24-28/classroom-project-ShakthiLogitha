/*function add(show)
{
if(2%5==0)
{

    show("Aarthi")
}
else
{
    show("Shivani")
}
}
console.log("welcome")
add(display)

function display(a)
{
  console.log("I have this ",a)
}*/
//===============================================================
/*let MyPromise=new Promise((success,failure)=>
{
    let istrue=false
    if(istrue)
    {
        success();
    }
    else
    {
        failure();
    }
})

MyPromise.then(resolve)
.catch(reject)

function resolve()
{
  console.log("this is success")
}
function reject()
{
  console.log("failure is the stepping stone to success ")
}*/
//using arrow function
/*
let MyPromise=new Promise((success,failure)=>
{
    let istrue=false
    if(istrue)
    {
        success();
    }
    else
    {
        failure();
    }
})

MyPromise.then(()=>console.log("this is success"))
.catch(()=>console.log("failure is the stepping stone to success "))*/

/*function display()
{
    return new Promise((abc,def)=>{
    let istrue=false
    if(istrue)
    {
        abc();
    }
    else
    {
        def();
    }
})
}
display().then(()=>console.log("this is success"))
.catch(()=>console.log("failure is the stepping stone to success "))
*/
function display(){
return new Promise((resolve,reject)=>{
    let isTrue=false
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      rejec.t("bye")
  })
  }
   
 
//  display().then((data)=>{ console.log("done!....................",data)})
//   .catch(()=>{console.log("not done")} )
  
 
async function show(){
    try{
 var res= await  display()
 console.log(res)
    }
    catch(e){
        console.log(e)
    }
}
show()
 