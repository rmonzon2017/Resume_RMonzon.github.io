function currentdate(){
    
var d = new Date();
document.getElementById("currentdate").innerHTML = d.toDateString();
}