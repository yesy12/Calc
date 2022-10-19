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

        
}