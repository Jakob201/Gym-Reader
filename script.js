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
}