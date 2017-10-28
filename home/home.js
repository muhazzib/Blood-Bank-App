let database = firebase.database().ref("/")
let donorname=document.getElementById("username");
let donoremail=document.getElementById("email");
let donorage=document.getElementById("age");
let donorweight=document.getElementById("weight");
let donorbloodgroup=document.getElementById("donorbloodgroup");
let output=document.getElementById("output");
let output2=document.getElementById("output2");

let donordetail=document.getElementById("donordetail")



  let donate=()=>{
    let donoroject={
      donorname:donorname.value,
      donoremail:donoremail.value,
      donorage: donorage.value,
       donorage: donorage.value,
      donorbloodgroup:donorbloodgroup.value
    }
if(donorname.value!=""&donorbloodgroup.value!=""&donoremail.value!=""&donorage.value!=""&donorweight.value!=""){
database.child("donors").push(donoroject).then((success)=>{
  donorname.value="";
  donoremail.value="";
  donorage.value="";
  donorweight.value="";
}).then((success)=>{
  $('#exampleModal').modal('hide');
  $('#successmodal').modal('show');  
})
}
else{
  alert("Please fill out all the fields")
}
}

let render=(obj)=>{
  let subdiv=document.createElement("div");
  subdiv.setAttribute("class","card customcardstyle col-12");  
  let cardheader=document.createElement("div");
  cardheader.setAttribute("class","card-header");

  let cardheaderheading=document.createElement("h3");
  let cardheadertext=document.createTextNode(obj.donorname);
  cardheaderheading.appendChild(cardheadertext);
  




  let cardsecondheading=document.createElement("h6");
  cardsecondheading.setAttribute("class","cardsecondheadingstyle")
  let cardsecondheadingtext=document.createTextNode(obj.donorbloodgroup);
  cardsecondheading.appendChild(cardsecondheadingtext);

  let detailanchor=document.createElement("a");
  let detailanchortext=document.createTextNode("View Details");
  detailanchor.appendChild(detailanchortext);
  detailanchor.setAttribute("class","detailanchor")
  detailanchor.setAttribute("href","#")
  
  detailanchor.setAttribute("onClick","localfunction(this.id)")
  // detailanchor.setAttribute("data-toggle","modal");
  // detailanchor.setAttribute("data-target","#detail");
  

  
  detailanchor.setAttribute("id",obj.key);
  


  cardheader.appendChild(cardheadertext);
  cardheader.appendChild(detailanchor);
  
  cardheader.appendChild(cardsecondheading)
  subdiv.appendChild(cardheader);
  output.appendChild(subdiv);


//   <div class="card">
//   <div class="card-header">
//     Featured
//   </div>
//   <div class="card-body">
//     <h4 class="card-title">Special title treatment</h4>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
}

localfunction=(id)=>{
localStorage.setItem("donorDetailId",JSON.stringify(id));
window.location="../detail/detail.html"
}








/* <div class="card">
<div class="card-body">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */




filterfunction=()=>{
  let donorbloodgroup2=document.getElementById("donorbloodgroup2").value;
  output.style.display="none"
  let output3=document.getElementById("output2");
output3.innerHTML="";
let h3=document.createElement("h3");
let h3text=document.createTextNode(`Available donors for ${donorbloodgroup2}`);
h3.appendChild(h3text);
h3.setAttribute("class","customh3style")
output3.appendChild(h3)


  database.child("donors").on("child_added",(snap)=>{
    let obj=snap.val();
    obj.key=snap.key;
let filterrender=()=>{
  let subdiv=document.createElement("div");
 
  subdiv.setAttribute("class","card customcardstyle col-12");  
  subdiv.setAttribute("id","deletesubdiv");  
  
  let cardheader=document.createElement("div");
  cardheader.setAttribute("class","card-header");

  let cardheaderheading=document.createElement("h3");
  let cardheadertext=document.createTextNode(obj.donorname);
  cardheaderheading.appendChild(cardheadertext);
  




  let cardsecondheading=document.createElement("h6");
  cardsecondheading.setAttribute("class","cardsecondheadingstyle")
  let cardsecondheadingtext=document.createTextNode(obj.donorbloodgroup);
  cardsecondheading.appendChild(cardsecondheadingtext);

  let detailanchor=document.createElement("a");
  let detailanchortext=document.createTextNode("View Details");
  detailanchor.appendChild(detailanchortext);
  detailanchor.setAttribute("class","detailanchor")
  detailanchor.setAttribute("href","#")
  
  detailanchor.setAttribute("onClick","localfunction(this.id)")
  // detailanchor.setAttribute("data-toggle","modal");
  // detailanchor.setAttribute("data-target","#detail");
  

  
  detailanchor.setAttribute("id",obj.key);
  


  cardheader.appendChild(cardheadertext);
  cardheader.appendChild(detailanchor);
  
  cardheader.appendChild(cardsecondheading)
  subdiv.appendChild(cardheader);
  output2.appendChild(subdiv);
}
    if(donorbloodgroup2=="O-"){
if(obj.donorbloodgroup=="O-"){
  filterrender()
 }
    }
    else if(donorbloodgroup2=="O+"){
if(obj.donorbloodgroup=="O-" ||obj.donorbloodgroup=="O+"){
  filterrender()
  
}
    }
   else if(donorbloodgroup2=="A-"){
  if(obj.donorbloodgroup=="O-" ||obj.donorbloodgroup=="A-"){
    filterrender()
    
}
  }
   else if(donorbloodgroup2=="A+"){
    if(obj.donorbloodgroup=="O-" ||obj.donorbloodgroup=="A-"||obj.donorbloodgroup=="O+" ||obj.donorbloodgroup=="A+"){
    filterrender()
    }      
    }
   else if(donorbloodgroup2=="B-"){
    if(obj.donorbloodgroup=="B-" ||obj.donorbloodgroup=="O-"){
      filterrender()
      
    }      
  }
    else if(donorbloodgroup2=="B+"){
      if(obj.donorbloodgroup=="O-" ||obj.donorbloodgroup=="O+"||obj.donorbloodgroup=="B-" ||obj.donorbloodgroup=="B+"){
        filterrender();        
      }
      }
    else if(donorbloodgroup2=="AB-"){
      if(obj.donorbloodgroup=="O-" ||obj.donorbloodgroup=="B-"||obj.donorbloodgroup=="A-" ||obj.donorbloodgroup=="AB-"){
        filterrender();                
      }
      }
    else if(donorbloodgroup2=="AB+"){
      if(obj.donorbloodgroup=="O-" ||obj.donorbloodgroup=="O+"||obj.donorbloodgroup=="B-" ||obj.donorbloodgroup=="B+"||obj.donorbloodgroup=="A-" ||obj.donorbloodgroup=="A+"||obj.donorbloodgroup=="AB-" ||obj.donorbloodgroup=="AB+"){
        filterrender();                
        
      }

    }
  })
  
  // output2.removeChild(deletesubdiv)
  
}


database.child("donors").on("child_added",(snap)=>{
  let obj=snap.val();
  obj.key=snap.key;
  render(obj)
})

logoutfunction=()=>{
localStorage.clear("user");
firebase.auth().signOut().then(function() {
  window.location="../index.html"
}).catch(function(error) {
  // An error happened.
});
}