function changeColor(J) {
    if(J.style.color == "green" || J.style.color == "black") {
        J.style.color = "red"
    } else {
        J.style.color = "green"
    }
}
function smoothModal() {
    document.getElementById("modal").parentNode.style.animation = "modalanimationJSIMS3 2s"
    document.getElementById("modal").style.animation = "modalanimationJSIMS3 2s"
    document.getElementById("modaltop").style.animation = "modalanimationJSIMS3 2s"
    document.getElementById("modalbottom").style.animation = "modalanimationJSIMS3 2s"
    document.getElementById("modalbutton").style.animation = "modalanimationJSIMS3 2s"
    setTimeout(function() {document.getElementById("modal").parentNode.remove()}, 1900)
}

function calculate(id, index) {
    var first;
    var other;
    if(answers[index].right == "red") {
        other = "green";
    } else {
        other = "red";
    }
    if(document.getElementById(id).style.color == answers[index].right) {
        first = `<span>${answers[index].correct}</span>` + '<span type="check">&check;</span> ';
    } else if(document.getElementById(id).style.color == other){
        first = `<span>${answers[index].wrong}</span>` + '<span type="other">&times;</span> ';  
    } else {
        first = answers[index].correct.split("•")[0] + "• " + "N/A"
    }
    return first;
}
function smoothMain() {
    document.getElementById("main").style.animation = "modalanimationJSIMS3ILJS 2s"
    setTimeout(function() {document.getElementById("main").style.display = "none"}, 1900)
    document.getElementById("results").style.animation = "modalanimationJSIMS3ILJS3OJSISGTM 2s";
    setTimeout(function() {document.getElementById("results").style.opacity = "1"}, 1900)
    document.getElementById("first").innerHTML += calculate("1", 0);
    document.getElementById("first").innerHTML += "<br>";
    document.getElementById("first").innerHTML += calculate("2", 1);

    document.getElementById("second").innerHTML += calculate("3", 2);
    document.getElementById("second").innerHTML += "<br>";
    document.getElementById("second").innerHTML += calculate("4", 3);

    document.getElementById("third").innerHTML += calculate("5", 4);
    document.getElementById("third").innerHTML += "<br>";
    document.getElementById("third").innerHTML += calculate("6", 5);
}
var answers = [
    {
        right: "red",
        correct:"Lives in New Mexico • Correct! D doesn’t live in New Mexico, he lives in New Jersey!",
        wrong: "Lives in New Mexico • D. Lives in New Jersey, not New Mexico!"
    },
    {
        right: "green",
        correct: "Is the father of two children • Yes! He is the father of two children!",
        wrong: "Is the father of two children • He is the father of two children!"
    },
    {
        right: "green",
        correct: "Lives in Maryland • Yes! N. does live in Maryland!",
        wrong: 'Lives in Maryland • N. <span style="font-weight: bold; font-style: italic">does</span> live in Maryland!'
    },
    {
        right: "red",
        correct: 'Licks Cheese • You got it! N. Likes cheese, but he doesn’t <span style="font-style: italic;">lick</span> cheese! E. Doesn’t like cheese though!',
        wrong: 'Licks Cheese • N. Likes cheese, but he doesn’t <span style="font-style: italic;">lick</span> cheese! E. Doesn’t like cheese though!'
    },
    {
        right: "red",
        correct: 'Lives in Lanham • You got it! E. Lives in La<span style="font-style: italic;">nh</span>am not La<span style="font-style: italic;">hn</span>am',
        wrong: 'Lives in Lanham • E. Lives in La<span style="font-style: italic;">nh</span>am not La<span style="font-style: italic;">hn</span>am'
    },
    {
        right: "green",
        correct: 'Likes Hot Beverages • Yes! E. Would rather have a hot beverage than it’s iced version! E. also loves caramel lattes!',
        wrong: 'E. Would rather have a hot beverage than it’s iced version! E. also loves caramel lattes! '
    },
]

