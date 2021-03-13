function inserir(numero) {
    document.getElementById("numview").value += numero;
}

function funcao() {
    document.getElementById("numview").value = '';
}

function igual() {
    let exp = document.getElementById("numview").value
    if (exp) {
        document.getElementById("numview").value = eval(exp);
    }
}