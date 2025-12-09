// async function localdata()
// {
//     try{
//         var res= await fetch("https://jsonplaceholder.typicode.com/users/",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//                 name:"aarthi",
//                 dept:"it"
//             })
//         });
//         var data=await res.json()
//     console.log(data)   
//  }
//  catch(a)
//  {
//     console.log("failed")
//  }
// }
// localdata()

//updated
// async function localdata()
// {
//     try{
//         var res= await fetch("https://jsonplaceholder.typicode.com/users/1",{
//             method:"PUT",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//                 name:"aarthi",
//                 dept:"it"
//             })
//         });
//         var data=await res.json()
//     console.log("update",data)   
//  }
//  catch(a)
//  {
//     console.log("failed")
//  }
// }
// localdata()

// delete
// async function localdata()
// {
//     try{
//         var res= await fetch("https://jsonplaceholder.typicode.com/users/1",{
//             method:"DELETE",
            
//         });
       
//     console.log("deleted",res)   
//  }
//  catch(a)
//  {
//     console.log("failed")
//  }
// }
// localdata()