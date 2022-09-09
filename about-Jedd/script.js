function projectText(hovered, item){
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
            case "eas":
                newh1.innerHTML = "The Odin Project : Etch a Sketch";
                newh4.innerHTML = "project description for etch a sketch";
            case "rps":
                newh1.innerHTML = "The Odin Project : Rock Paper Scissors";
                newh4.innerHTML = "project description for rock paper scissors";
            case "lp":
                newh1.innerHTML = "The Odin Project : Landing Page";
                newh4.innerHTML = "project description for landing page";
            case "rec":
                newh1.innerHTML = "The Odin Project : Recipes";
                newh4.innerHTML = "project description for recipes";
            case "calc":
                newh1.innerHTML = "The Odin Project : Calculator";
                newh4.innerHTML = "project description for calculator";
            default:
                newh1.innerHTML = "Here are the projects I've done so far!";
                newh4.innerHTML = "Upon clicking each one you will be offered page links and explanations to each one";
        }
        item.style.background = red;
        document.getElementById("text-changer").appendChild(newh1);
        document.getElementById("text-changer").appendChild(newh4);
    }
    else{
        var newh1 = document.createElement("h1");
        newh1.innerHTML = "Here are the projects I've done so far!";
        newh1.style.fontSize = "325%";
        var newh4 = document.createElement("h4");
        newh4.innerHTML = "Upon clicking each one you will be offered page links and explanations to each one";
        newh4.style.fontSize = "175%";
        document.getElementById("text-changer").appendChild(newh1);
        document.getElementById("text-changer").appendChild(newh4);
    }
}