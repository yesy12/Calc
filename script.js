string = "";
history;
number1 = 0;
number2 = 0;
number1Bool = false;
number2Bool = false;
ultimaOp = "";
result = 0; 

window.onload = () =>{

    let display = document.getElementById("display");
    let displayCount = document.getElementById("displayCount");

    operations_id = [ 
        [".","ponto"], ["+","soma"], ["=","equal"], 
        ["*","mult"], ["-","minus"], ["/","div"],
        ['eraser',"eraser"], ["C","C"], ["-1","-1"],
        ["x2","x2"], ["%","percentual"], ["xX", "xX"]
    ];

    for(let i=0; i < 10;i++){
        document.getElementById(i).addEventListener("click",()=>{
            incrementoString(i)
        })
    }
    
    operations_id.forEach(operation => {
        let element = document.getElementById(operation[1]);
        element.addEventListener("click",()=>{
            if(operation[0] == "."){
                incrementoString(operation[0]);
            }
            else{
                operations(operation[0]);
            }
        })
    });   
}

function operations(value){
    //Level 1
    if(value == "+" && string != ""){
        increment("+");
        if(number2Bool){
            ultimaOp = "+";            
            result = number1 + number2;

            mostraNoDisplayCount(result);

            incrementeHistory(` ${ultimaOp} `)
            incrementeHistory(number2);
            incrementeHistory(" = ");
            incrementeHistory(`${result}\n`);
        }       
    }
    else if(value == "-" && string != ""){
        
        increment("-");
        if(number2Bool){
            ultimaOp = "-";
            result = number1 - number2;            
            mostraNoDisplayCount(result);

            incrementeHistory(` ${ultimaOp} `)
            incrementeHistory(number2);
            incrementeHistory(" = ");
            incrementeHistory(`${result}\n`);
        }
    }
    
    else if(value == "=" ){
        let op;
        if(ultimaOp == "+") {
            number1 = number1 + number2;
        }
        else if(ultimaOp == "-"){
            number1 = number1 - number2;
        }
        else if(ultimaOp == "/") {
            number1 = number1 / number2;
        }
        else if(ultimaOp == "*"){
            number1 = number1 * number2;
        }        
        mostraNoDisplayCount(number1);
    }

    else if(value == "/" && string != ""){
        increment("/");
        if(number2Bool){
            ultimaOp = "/"
            result = number1 / number2;
            mostraNoDisplayCount(result);

            incrementeHistory(` ${ultimaOp} `)
            incrementeHistory(number2);
            incrementeHistory(" = ");
            incrementeHistory(`${result}\n`);
        }
        
    }
    else if(value == "*" && string != ""){
        increment("*");
        if(number2Bool){
            ultimaOp = "*"
            result = number1 * number2;

            mostraNoDisplayCount(result);

            incrementeHistory(` ${ultimaOp} `)
            incrementeHistory(number2);
            incrementeHistory(" = ");
            incrementeHistory(`${result}\n`);
        }
    }

    //Level 2
    if(value == "xX" && string != ""){
        string += "**";
        ultimaOp = "**";
    }
    else if(value == "%" && string != ""){
        incrementeHistory(`${string} / 100`);

        string = `${string/100}`;
        ultimaOp = "%";

        incrementeHistory(" = ");
        incrementeHistory(`${string}\n`);
        
    }
    else if(value == "x2" && string != ""){
        incrementeHistory(`${string} ** 2`);

        string = `${string**2}`;
        ultimaOp = "x2";

        incrementeHistory(" = ");
        incrementeHistory(`${string}\n`);
    }
    else if(value == "-1" && string != ""){
        incrementeHistory(`\n${string} * -1`);

        string = `${string *-1}`;
        ultimaOp = "-1";

        incrementeHistory(" = ");
        incrementeHistory(`${string}\n`);
    }
    else if(value == "C"){

        string =  "";
        ultimaOp = "";
        number1 = 0;
        number2 = 0;
        result  = 0;
        number1Bool = false;
        number2Bool = false;

        incrementeHistory(`\n-----------\nTudo igual a 0\n-----------\n`);   

        mostraNoDisplayCount(result);
    }
    else if(value == "eraser" ){
        
        newString = "";

        incrementeHistory(`\n-----------\nO Valor era ${string}`);   
        for(let i = 0; i < string.length-1; i ++){
            newString += string[i];
        }
        string = newString;
        incrementeHistory(` e agora é ${string}\n-----------\n`);   
    }
    else{
        console.log(value);
    }

    mostrarNaTela();
    verificationTwoTrue();
}

function verificationTwoTrue(){
    if(number1Bool == true && number2Bool == true){
        number2Bool = false;
        number1 = result;

        incrementeHistory(`${result}`);
        mostraNoDisplayCount(result);
    }
}

function incrementeHistory(value_){
    document.getElementById("historicOutput").value += `${value_}`;
}

function mostraNoDisplayCount(value){
    displayCount.value = `${value}`;
}

function mostrarNaTela(){
    display.value = string;
    // incrementeHistory(string);
}

function incrementoString(value){
    let exists = string.includes(".");

    if(exists && value == "."){
        return;
    }
    string += value;
    operationsNew();
    mostrarNaTela();
}

function operationsNew(){
    let exists = string.includes("**");

    if(exists){
        temp =  string.split("**");

        incrementeHistory(`\n${string}`);

        string = `${Number(temp[0]) ** Number(temp[1])}`;
        incrementeHistory(" = ");
        incrementeHistory(`${string}\n`);

    }
}

function increment(operation){
    if(!number1Bool){
        number1Bool = true;
        number1 = Number(string);
        string = "";

        displayCount.value = `${number1}`;
        incrementeHistory(`${number1}`); 
        ultimaOp = operation;
    }
    else{
        number2Bool = true;
        number2 = Number(string);            
        string = "";
    }
}