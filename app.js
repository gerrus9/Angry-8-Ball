let counter = 0;

let answers = ["NO","YES","MAYBE","NEVER EVER","YOU ARE LUCKY","ASK AGAIN LATER","COMPUTER SAYS NO NO NO!"];
let buttonNames = ["Click me and I will kill you","Don't","I'm not joking","I'm serious","WTF","F*** YOU"];

function ask(){
    counter++;
    document.getElementById("out").innerHTML = answers[Math.floor(Math.random()*answers.length)];
    document.getElementById("run").innerHTML = buttonNames[Math.floor(Math.random()*buttonNames.length)];
    if (counter >= 10) {
        document.getElementById("out").style.color = "red";
        document.getElementById("run").style.color = "red";
    }
    if (counter >= 25) {
        document.getElementById("out").innerHTML = "STOP THIS SH*T";
        document.getElementById("run").innerHTML = "TRISTAN THE SAARLÄNDER IS LOOKING TO YOU, JACKASS";
    }
    if (counter >= 26) {
        document.getElementById("run").innerHTML = "";
        document.getElementById("run").style.height = "0px";
        document.getElementById("run").style.width = "0px";
    }
}

document.getElementById("run").addEventListener("click", function () {
    ask();
})