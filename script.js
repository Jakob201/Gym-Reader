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
            chapter(y)
        }
    }
    
}
function settings(){
    x = localStorage.getItem("cost1") || 20
    localStorage.setItem("cost1", prompt("How much for one chapter: ",x) || x)
    
    location.reload()
}
function push_up(amount){
    x = localStorage.getItem("Push_up") 
    if(x == null)
        localStorage.setItem("Push_up", amount)
    else{
        localStorage.setItem("Push_up", parseInt(x) + amount)
    }
    add(amount)
}
function gym(amount){
    x = localStorage.getItem("gym") 
    if(x == null)
        localStorage.setItem("gym", amount/200)
    else{
        localStorage.setItem("gym", parseInt(x) + (amount / 200))
    }
    add(amount)
}
function chapter(amount){
    x = localStorage.getItem("chapters") 
    if(x == null)
        localStorage.setItem("chapters", 1)
    else{
        localStorage.setItem("chapters", parseInt(x) + 1)
    }
    add(amount)
}
function book(amount){
    x = localStorage.getItem("book") 
    if(x == null)
        localStorage.setItem("book", 1)
    else{
        localStorage.setItem("book", parseInt(x) + 1)
    }
    add(amount)
}
function stats() {
  const pushUps = localStorage.getItem("Push_up") || 0; // Standardwert 0
  document.getElementById("add-opt1").innerHTML = `
    <h3>Push-Ups: </h3>
    <h3>${pushUps}</h3>
  `;
  const gym = localStorage.getItem("gym") || 0; // Standardwert 0
  document.getElementById("add-opt2").innerHTML = `
    <h3>Gym-Hours: </h3>
    <h3>${gym}h</h3>
  `;
  const book = localStorage.getItem("book") || 0; // Standardwert 0
  const chapter = localStorage.getItem("chapters") || 0;
  document.getElementById("add-opt3").innerHTML = `
    <h3>books read: ${book}</h3>
    <h3>chapters read: ${chapter}</h3>
  `;
}