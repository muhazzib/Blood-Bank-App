let detaildiv=document.getElementById("detailrenderdiv");
let database = firebase.database().ref("/")
let localdetail=localStorage.getItem("donorDetailId");
localdetail=JSON.parse(localdetail);
let counter=0;
        renderdetail=()=>{
database.child("donors").child(localdetail).on("child_added",(snap)=>{
    let obj=snap.val();
    obj.key=snap.key;
    let linebr=document.createElement("br");
    
    if(counter==0){
        let textnode=document.createTextNode("Age: "+obj);
        detaildiv.appendChild(textnode);
        detaildiv.appendChild(linebr);
        counter++;
    }
    else if(counter==1){
        let textnode=document.createTextNode("Blood Group: "+obj);
        detaildiv.appendChild(textnode);
        detaildiv.appendChild(linebr);
        counter++;
    }
    else if(counter==2){
        let textnode=document.createTextNode("Email : "+obj);
        detaildiv.appendChild(textnode);
        detaildiv.appendChild(linebr);
        counter++;
    }
    else if(counter==3){
        let textnode=document.createTextNode("Name: "+obj);
        detaildiv.appendChild(textnode);
        detaildiv.appendChild(linebr);
    }
    detaildiv.setAttribute("class","alert alert-info row justify-content-md-center customdetailstyle")
})        }
