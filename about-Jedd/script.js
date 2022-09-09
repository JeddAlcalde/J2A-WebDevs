function projectText(hovered, item){
    this.removeAllChildren(document.getElementById("text-changer"));
    if(hovered == true){
        var newh1 = document.createElement("h1");
        newh1.style.fontSize = "325%";
        var newh4 = document.createElement("h4");
        newh4.style.fontSize = "175%";
        var itemId = item.id
        console.log(item.id);
        switch(itemId){
            case "top":
                newh1.innerHTML = "The Odin Project";
                newh4.innerHTML = "The Odin Project is an online open source project used to educate up and coming web developers. I completed the \"Foundations\" part of it, focused on teaching fundamentals of HTML, CSS and JavaScript through articles, exercies and projects. As well as some information on backend. The projects listed for The Odin Project were made to teach specific skills and are therfore not polished as websites.";
                break;
            case "eas":
                newh1.innerHTML = "The Odin Project : Etch a Sketch";
                newh4.innerHTML = "project description for etch a sketch";
                break;
            case "rps":
                newh1.innerHTML = "The Odin Project : Rock Paper Scissors";
                newh4.innerHTML = "project description for rock paper scissors";
                break;
            case "lp":
                newh1.innerHTML = "The Odin Project : Landing Page";
                newh4.innerHTML = "project description for landing page";
                break;
            case "rec":
                newh1.innerHTML = "The Odin Project : Recipes";
                newh4.innerHTML = "project description for recipes";
                break;
            case "calc":
                newh1.innerHTML = "The Odin Project : Calculator";
                newh4.innerHTML = "project description for calculator";
                break;
            case "nhnl":
                newh1.innerHTML = "New Hair New Life";
                newh4.innerHTML = "project description for new hair new life";
                break;
            case "ps":
                newh1.innerHTML = "My Own Website";
                newh4.innerHTML = "project description for personal site";
                break;
        }
        //item.style.background = red;
        document.getElementById("text-changer").appendChild(newh1);
        document.getElementById("text-changer").appendChild(newh4);
    }
    else{
        var newh1 = document.createElement("h1");
        newh1.innerHTML = "Here are the projects I've done so far!";
        newh1.style.fontSize = "325%";
        var newh4 = document.createElement("h4");
        newh4.innerHTML = "Upon hovering each one you will be offered page links and explanations to each one. Hovering will give you a breif description on each.";
        newh4.style.fontSize = "175%";
        document.getElementById("text-changer").appendChild(newh1);
        document.getElementById("text-changer").appendChild(newh4);
    }
}

function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}