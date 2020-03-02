fetch("data.json")
.then((response)=>{
    return response.json()//json() converts json into js object
}).then((data)=>{
    //console.log(data);
     display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    let card=document.createElement("div");
    card.classList.add("cardstyle");

    let heading=document.createElement("h2");
    heading.textContent=info.name;

    bodyElement.append(card);
    card.append(heading);

    let line=document.createElement("hr");
    card.append(line);

    let heading1=document.createElement("h3");
    heading1.textContent=info.role;
    card.append(heading1);

    let email=document.createElement("a");
    email.href="mailto:"+info.email;
    email.textContent=info.email;
    card.append(email);

    let linebreak = document.createElement("br");
    card.append(linebreak);
    
    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);

     var button=document.createElement("a");
     button.textContent="view profile";
     button.classList.add("btn");
     card.append(button);

}