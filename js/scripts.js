onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  }
  onclick = function(event) {
    //event.preventDefault();

    document.querySelector(".name").innerHTML = document.getElementById("nameInp").value;

    var headOpts = document.getElementsByName("headtype");
    var ht = "";
    for(let i of headOpts) {
      if(i.checked) {
        console.log(i.id);
        ht = i.id;
      }
    }
    if(ht != "") { 
      document.querySelector(".head").innerHTML = document.querySelector(".hidden>." + ht).innerHTML;
      
    }
    
    if(document.getElementById("glasses").checked) {
      for(let i = 0; i < 2; i ++) {
      document.querySelector(".head").innerHTML = document.querySelector(".head").innerHTML.replace(".", "()");
      }
    }
    

    document.querySelector(".shirt").firstElementChild.style.color = document.getElementById("scolor").value;

    document.querySelector(".pants").firstElementChild.style.color = document.getElementById("pcolor").value;

    document.querySelector(".feet").firstElementChild.style.color = document.getElementById("shcolor").value;

  }
}