function  Button (){
window.location = 'file:///E:/DEJOYLAND/ContactUs.html'
}
 

function  logo (){
    window.location = 'file:///E:/DEJOYLAND/Home.html'
    }


function myFunction(){
    var x = document.getElementById("hamburger");
    if (x.className == "hamburger"){
        x.className += " responsive";
    } else {
        x.className = "hamburger";
    }
}


function validateForm() {
    let x = document.forms["bookingform"]["Email"] ["fyourname"].value;
    if (x == "mailto@:salman-hero16@outlook.com") {
      alert("Please Fill the Ticket Form For Furture Processed");
      return false;
    }
  }
   
    




    


