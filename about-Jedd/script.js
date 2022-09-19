function projectText(hovered, item){
    this.removeAllChildren(document.getElementById("text-changer"));
    if(hovered == true){
        var newh1 = document.createElement("h1");
        newh1.style.fontSize = "325%";
        var newh4 = document.createElement("h4");
        newh4.style.fontSize = "175%";
        var itemId = item.id;
        switch(itemId){
            case "top":
                newh1.innerHTML = "The Odin Project";
                newh4.innerHTML = "The Odin Project is an online open source project used to educate up and coming web developers. I completed the \"Foundations\" part of it, focused on teaching fundamentals of HTML, CSS and JavaScript through articles, exercies and projects. As well as some information on backend. The projects listed for The Odin Project were made to teach specific skills and are therfore not polished as websites.";
                break;
            case "eas":
                newh1.innerHTML = "The Odin Project : Etch a Sketch";
                newh4.innerHTML = "The Etch a Sketch Project was used to teach changing live variables and updating HTML elements in real time. We first created a gridbox that could change dimensions according to what the user wanted. When hovering over any of these grid boxes they would change color. The hardest part of this project was using the live coordinates for the mouse effectively.";
                break;
            case "rps":
                newh1.innerHTML = "The Odin Project : Rock Paper Scissors";
                newh4.innerHTML = "The Rock Paper Scissors Project was based mainly around incorporating the logic of a Rock Paper Scissors game into JavaScript. HTML buttons were used to indicate which selection the user had made, and the Random object was used to give a number which would indicate what selection the computer had made. The entire game took place in the console log, which is a very useful tool for debugging and figuring out live values for variables in our turn.";
                break;
            case "lp":
                newh1.innerHTML = "The Odin Project : Landing Page";
                newh4.innerHTML = "The Landing Page Project was used to test our understanding of the FlexBox tool, and create a webpage identical to an image we were given. The biggest thing learned from this was the use of aligning items and justifying content with different display values. I also more efficiently used things like margins and divs to section off different parts of the website, making it easier to integrate FlexBox.";
                break;
            case "rec":
                newh1.innerHTML = "The Odin Project : Recipes";
                newh4.innerHTML = "The Recipes Project was designed to test how well I could use images and text to build a simple website without no layout. This was the first project and only required simple use of tags in HTML and linking images and other webpages to a central webpage. This was also my first real usage of git and github to log changes to my code and overall project, later I would learn CSS and FlexBox to create a nicer looking website with a real layout and style.";
                break;
            case "calc":
                newh1.innerHTML = "The Odin Project : Calculator";
                newh4.innerHTML = "The Calculator Project tested how to handle live changing of variables and objects in Javascript. I was tasked with making a webpage with a calculator that would have a live display based on what buttons the user had used. I did this by having the buttons display their innerHTML as a string and when the user was done changing the string, I would convert parts of the string to integers and other parts into operators. Now that the string has been translated into an equation, you can complete the operation. Its fitting that the most enjoyable project in The Odin Project : Foundations was the last.";
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

function fadeCallIn(element){
    //function called on hoverin
    //targetStr is the class string of the element that you want to fade in/out

    //current problem is that the nodeList returned from querySelectorAll is static and therefore its own changes don't refelect on the actual page
    var target = document.querySelectorAll(".fadePossible");
    for(let i = 0; i < target.length; i++){
        console.log("fadedIn");
        target[i].classList.remove("fadeOut");
        target[i].classList.add("fadeIn");
    }
}

function fadeCallOut(element){
    //function called on hoverout
    //targetStr is the class string of the element that you want to fade in/out

    var target = document.querySelectorAll(".fadePossible");
    for(let i = 0; i < target.length; i++){
        console.log("fadedOut");
        target[i].classList.remove("fadeIn");
        target[i].classList.add("fadeOut");
    }

}