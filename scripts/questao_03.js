function checagem() {
    let numero_1 = parseFloat(prompt("Digite qualquer número: "))

    let numero_2 = parseFloat(prompt("Digite qualquer número: "))

    let numero_3 = parseFloat(prompt("Digite qualquer número: "))

    if (numero_1 > numero_2 && numero_1 > numero_3) {
        document.getElementById("numero_maior").innerHTML = "Maior número é: " + numero_1;
    } else if (numero_2 > numero_1 && numero_2 > numero_3) {
        document.getElementById("numero_maior").innerHTML = "Maior número é: " + numero_2;
    } else if (numero_3 > numero_1 && numero_3 > numero_2) {
        document.getElementById("numero_maior").innerHTML = "Maior número é: " + numero_3;
    }
}