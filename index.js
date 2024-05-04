const Value = document.getElementById("value");
const CTOF = document.getElementById("CTOF");
const FTOC = document.getElementById("FTOC");
let temp;
const result = document.getElementById("result");


Value.onclick = () => {Value.value = ""};

function convert(){

    temp = Number(Value.value);

    if(CTOF.checked){
        if(temp == 0){
            result.textContent = `0.0 F`
        }
        else{
        temp= temp*9/5 + 32;
        result.textContent = temp.toFixed(1) +"F";
        }
    }
    else if(FTOC.checked){
        if(temp == 0){
            result.textContent = `0.0 C`
        }
        else{
        temp= (temp-32) * 5/9;
        result.textContent = temp.toFixed(1) +"C"}
    }
    else{
        result.textContent = `Select a unit`;
    }
}

