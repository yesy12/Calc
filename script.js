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