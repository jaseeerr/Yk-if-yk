let count = 10


let name = null

for(let i=0;i<count;i++)
{
    let flag = 1
    name = prompt("Enter your name:")
    name = name.trim()
    if(name==null || name == "")
    {
        name = null;
        name = prompt("Enter your name:")
        
        count++
        flag = 0
       
    }
    else  if(!isNaN(name) && name!=null && name!="")
    {
        alert("ENTER YOUR NAME, NOT YOUR DAD'S NUMBER!")
        name = null
        count++
        flag = 0
    }
    
    if(flag==1)
    {
        alert("hey "+name+", let's see if your mad")
        break;
    }

}




// if(name == null)
// {
//     while(name==null || name == "")
// {
//     if(name==null)
// {
//     name = prompt("Enter your name: ")
//     name = name.trim()
//     if(name == "")
//     {
//         name = null
//     }

//     if(!isNaN(name[0]))
//     {
//         alert("ENTER YOUR NAME, NOT YOUR DAD'S NUMBER!")
//         name = null
//     }
    
// }

// if(name!=null)
// alert("hey "+name+", let's see if your mad")
// }
// }

    document.getElementById("btn").onmouseover = function()
    {
      
        document.getElementById("box").style.display = "none"
        document.getElementById("box1").style.display = "block"
        console.log("btn")
    }
    
    document.getElementById("btn1").onmouseover = function()
    {
        document.getElementById("box1").style.display = "none"
        document.getElementById("box2").style.display = "block"

        
        console.log("btn1")
    }

    document.getElementById("btn2").onmouseover = function()
    {
        document.getElementById("box2").style.display = "none"
        document.getElementById("box").style.display = "block"


        
        
       
        console.log("btn2");
    }
    
function btnyes(){
    alert("LOL I KNOW!\nNow get lost")
    location.reload()
}
   



