let count=1;
let fill = (control) => {
   if(count<=9){
    if(count%2==0){
        document.getElementById(control.id).innerHTML="O"
        document.getElementById("turn").innerText="Turn for X"
    }
    else{
        document.getElementById(control.id).innerHTML="X"
        document.getElementById("turn").innerText="Turn for O"
    }
    count++;
    if(match()){
       document.getElementById("win").style.display="block"
       document.getElementById("turn").innerText=""
       
   
//       setTimeout(() => {
//         blank()
//       }, 500);
    }
   }
    else {
    document.getElementById("alert").style.display="block"
    document.getElementById("turn").innerText=""
   

    // console.log("hi")
}
}
let blank = () => {
    for(let i =1; i <=9;i++){
     document.getElementById("div"+i).innerHTML=""
     count=1
     document.getElementById("alert").style.display="none"
     document.getElementById("win").style.display="none"
     document.getElementById("turn").innerText="Turn for X"
    }
}
let match = () => {
if(check("div1","div2","div3") || check("div1","div4","div7") || check("div1","div5","div9") || check("div3","div5","div7") || check("div2","div5","div8") || check("div3","div6","div9") || check("div5","div4","div6") || check("div9","div8","div7")){
    return true;
}
}
let check = (a,b,c)=>{
    if(get(a) !== "" && get(b) !== "" && get(c) !== "" && get(a)==get(b) && get(b)==get(c) ){
        return true;
    }
}
function get(div) {
    return document.getElementById(div).innerHTML
}