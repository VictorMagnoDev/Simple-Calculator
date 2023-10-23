function calculate(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case "+":
            calculo = n1 + n2
            document.getElementById("result").innerHTML = `The Result is: ${calculo}`
            break

        case "-":
            calculo = n1 - n2
            document.getElementById("result").innerHTML = `The Result is: ${calculo}`
            break

        case "/":
            calculo = n1/n2
            //calculo = calculo.toFixed(2)

            if (!Number.isInteger(calculo)){
                calculo = calculo.toFixed(2)
            }
            
            if (Number.isNaN(calculo)){
                document.getElementById("result").innerHTML = `Invalid Operation`
            }

            else{
            document.getElementById("result").innerHTML = `The Result is: ${calculo}`
            break
            }

        case "*":
            calculo = n1 * n2
            document.getElementById("result").innerHTML = `The Result is: ${calculo}`
            break
    }
}