function add(amount){
    localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) + amount)
    location.reload()
}
function load(){
    if (localStorage.getItem("counter")==null){
        localStorage.setItem("counter",0)
        document.getElementById("counter").innerHTML = 0
    }
    else{
        document.getElementById("counter").innerHTML = localStorage.getItem("counter")
        
    }
    if(localStorage.getItem("cost1") != null){
        x = localStorage.getItem("cost1")
        y = x - 2*x
        document.getElementById("del-1").value = "1 Chapter ("+x+")"
        document.getElementById("del-1").onclick = function(){
            add(y)
        }
    }
    
}
function settings(){
    localStorage.setItem("cost1", prompt("How much for one chapter: "))
    
    location.reload()
}