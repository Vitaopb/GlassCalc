VanillaTilt.init(document.querySelector(".calculadora"), {
    max: 20,
    speed: 300
});

var operador = false;

function inserir(numero) {

    if (numero == "." || numero == "+" || numero == "-" || numero == "/" || numero == "*") {
        if (operador == true) {
            // Pare
            return;
        }

        operador = true;
    } else {
        operador = false;
    }

    document.getElementById("numview").value += numero;
}

function clean() {
    operador = false;
    document.getElementById("numview").value = '';
}

function back() {
    let expressao = document.getElementById("numview").value

    let anterior = expressao[expressao.length - 1]

    document.getElementById("numview").value = expressao.substring(0, expressao.length - 1)

    if (anterior == "." || anterior == "+" || anterior == "-" || anterior == "/" || anterior == "*") {
        operador = false
    } else {
        operador = true
    }

}

function igual() {
    let string = document.getElementById("numview").value
    document.getElementById("numview").value = eval(string)
}


