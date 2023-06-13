function checagem() {
    let numero_1 = parseFloat(prompt("Digite qualquer número: "));

    let numero_2 = parseFloat(prompt("Digite qualquer número: "));

    if ((numero_1 % numero_2) == 0) {
        document.getElementById("numero_divisor").innerHTML = "O número " + numero_2 + " é divisor do número " + numero_1
    } else
        document.getElementById("numero_divisor").innerHTML = "O número " + numero_2 + " não é divisor do número " + numero_1
}