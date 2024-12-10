let string="";
let buttons=document.querySelectorAll("button")
let input=document.querySelector("input")

let arr=Array.from(buttons)
arr.forEach((buttons)=>{
    buttons.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)
            input.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string=""
            input.value=string
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1)
            input.value=string
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML
        input.value=string
        }
    })
})
arr.forEach((m)=>{
    m.addEventListener("mouseover",(e)=>{
        e.target.style.background="hsl(180, 15%, 79%)"
    })
    m.addEventListener("mouseout",(e)=>{
        e.target.style.background=""
    })
})

