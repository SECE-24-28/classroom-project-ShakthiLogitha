/*no argument no return ---> if only one line printing print in single line withour{}
var a=()=> console.log("hi")
a() */

/* argument and return
var add=(a,b)=>
    {
        return a+b
    }
let a=add(8,7)
console.log(a) */

/* argument but  no return

var a=(a,b)=> a+b
a(2,3)
console.log('hi') */

/* no argument but return
var a=()=>  10

let b=a()
console.log(b) */
/* normal function
a=['aarthi','shivani','kani','mani']
arr=[]
for(i=0;i<4;i++)
{
  arr.push(a[i].toUpperCase())
}
console.log(arr)
  Map
a=['aarthi','shivani','kani','mani']
const c=a.map((d)=>d.toUpperCase())
console.log(c)

a=['AARTHI','SHIVANI','KANI','MANI']
const b=a.map((d)=>d.toLowerCase())
console.log(b)
*/
/*d=[]
arr=[2,3,4,5,7,8,9,10,6]
for(let ai in arr)
{
    if(arr[ai]>=6)
    {
        d.push(arr[ai])
    }
}
console.log(d)*/
/* 
filter
arr=[2,3,4,5,7,8,9,10,6]
const d=arr.filter((t)=> t%2==0)
console.log(d)*/


// reduce --element return single element
// find -- return first occurance

/*arr=[2,3,4]
sum=0
for(let a in arr)
{
    sum=sum+arr[a]
}
console.log(sum)*/
/*

arr=[2,3,4]
const c=arr.reduce((a,b)=>{
     return a+b
})

console.log(c)*/
 

/*arr=[2,3,4,5,7,8,9,10,6]
const d=arr.find((t)=> t%2==0)
console.log(d)
*/
/*let person={
    name:"aarthi",
    dept:"IT"
}
console.log(person)
console.log(person.dept)*/
 

/*let person=new Object();
person.name="aarthi"
person.gender="female"
console.log(person)
console.log(person.gender)*/

function Person(name,gender){
 
    
    this.name=name;
    this.gender=gender;
    console.log("the val", this.name, name)
  
}

let p1= new Person("demo","male")
console.log(p1)
console.log(p1.name)
console.log(Person.name)