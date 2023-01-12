onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    takeForm(event);
  }
  onclick = takeForm;
}

function takeForm(event) {
    //event.preventDefault();
    let val = document.getElementById("nameInp").value;
    if(val != "") {
    document.querySelector(".name").innerHTML = val;
    }

    var headOpts = document.getElementsByName("headtype");
    var ht = "";
    for(let i of headOpts) {
      if(i.checked) {
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
    
    document.querySelector(".head").firstElementChild.style.color = document.getElementById("hcolor").value;

    document.querySelector(".shirt").firstElementChild.style.color = document.getElementById("scolor").value;

    document.querySelector(".pants").firstElementChild.style.color = document.getElementById("pcolor").value;

    document.querySelector(".feet").firstElementChild.style.color = document.getElementById("shcolor").value;

  }