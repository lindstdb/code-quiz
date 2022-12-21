const questions =[{
    id: 0,
    q: "Commonly used data types DO NOT include:",
    a: [{text:"Boolean", isCorrect: false },
        {text:"Number", isCorrect: false},
        {text:"Airplanes", isCorrect: true},
        {text:"String", isCorrect: false}
    ]},

    {id:1,
    q: "The condition in an if/else statement is enclosed within what?",
    a: [{text:"Parenthesis", isCorrect: true, isSelected: false},
        {text:"Curly Brackets", isCorrect: false},
        {text:"Square Brackets", isCorrect: false},
        {text:"Quotes", isCorrect: false}
    ]},

    {id:2,
    q: "Arrays in JavaScript can be used to store...",
    a: [{text:"Numbers and Strings", isCorrect: false},
        {text:"Other Arrays", isCorrect: false},
        {text:"Booleances", isCorrect: false},
        {text:"All of the Above", isCorrect: true}
    ]},

    {id:3,
    q: "String values must be enclosed within .... when being assigned to variables",
    a: [{text:"Commas", isCorrect: false},
        {text:"Curley Brackets", isCorrect: false},
        {text:"Quotes", isCorrect: true},
        {text:"Parenthesis", isCorrect: false}
    ]},

    {id:4,
    q: "A useful tool used by developers to print content to the debugger",
    a: [{text:"JavaScript", isCorrect: false},
        {text:"Terminal/Bash", isCorrect: false},
        {text:"Alerts", isCorrect: false},
        {text:"Console.log", isCorrect: true}
    ]},
]

var start = true;

function iterate(id) {
    var outcome = document.getElementsByClassName("outcome");
    outcome[0].innerText = "";

    const question = document.getElementById("question");

    question.innerText = Questions[id].q;

    const a1 = document.getElementById('a1');
    const b2 = document.getElementById('b2');
    const c3 = document.getElementById('c3');
    const d4 = document.getElementById('d4');

    a1.innerText = questions[id].a[0].text;
    b2.innerText = questions[id].a[1].text;
    c3.innerText = questions[id].a[2].text;
    d4.innerText = questions[id].a[3].text;

    a1.value = questions[id].a[0].isCorrect;
    b2.value = questions[id].a[1].isCorrect;
    c3.value = questions[id].a[2].isCorrect;
    d4.value = questions[id].a[3].isCorrect;

    var selected = "";

    a1.addEventListener("click",() => {
        a1.style.backgroundColor = "lightgray";
        b2.style.backgroundColor = "lightblue";
        c3.style.backgroundColor = "lightblue";
        d4.style.backgroundColor = "lightblue";
        selected = a1.value;
    })

    b2.addEventListener("click", () => {
        a1.style.backgroundColor = "lightblue";
        b2.style.backgroundColor = "lightgray";
        c3.style.backgroundColor = "lightblue";
        d4.style.backgroundColor = "lightblue";
        selected = b2.value; 
    })

    c3.addEventListener("click", () => {
        a1.style.backgroundColor = "lightblue";
        b2.style.backgroundColor = "lightblue";
        c3.style.backgroundColor = "lightgray";
        d4.style.backgroundColor = "lightblue";
        selected = c3.value;   
    })

    d4.addEventListener("click", () => {
        a1.style.backgroundColor = "lightblue";
        b2.style.backgroundColor = "lightblue";
        c3.style.backgroundColor = "lightblue";
        d4.style.backgroundColor = "lightgray";
        selected = d4.value; 
    })

    
}