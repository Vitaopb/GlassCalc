VanillaTilt.init(document.querySelector(".calculadora"), {
    max: 20,
    speed: 300
});

function inserir(numero) {
    document.getElementById("numview").value += numero;
}

function clean() {
    document.getElementById("numview").value = '';
}

function igual() {
    let exp = document.getElementById("numview").value
    if (exp) {
        document.getElementById("numview").value = eval(exp);
    }
}

function back() {
    let exp = document.getElementById("numview").value
    document.getElementById("numview").value = exp.substring(0, exp.length - 1)
}