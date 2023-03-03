const output=document.querySelector('.output');
const result=document.querySelector('.result');
const keys=document.querySelectorAll('button');
//event lesener

keys.forEach(key=>{
    key.addEventListener("click",calculator);
})
function calculator(){
    
    let buttontext=this.innerText;
    //console.log(buttontext)
    if(buttontext==='AC'){
        output.innerText="";
        result.innerText="";
        return;
    }
    if(buttontext==='DEl'){
        //string method string (from ,to)
        //string method substr(from,length)
        output.textContent=output.textContent.substr(0,output.textContent.length-1);
        return;
    }
    if(buttontext==='='){
        output.innerText=eval(output.innerText); 
    }
   else{
        output.textContent+=buttontext;
        return;
    }
    
}