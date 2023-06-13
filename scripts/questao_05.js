function checagem() {
    let numero_1 = parseFloat(prompt("Digite qualquer número: "))

    let numero_2 = parseFloat(prompt("Digite qualquer número: "))

    let numero_3 = parseFloat(prompt("Digite qualquer número: "))

    if (numero_1 == numero_2 && numero_1 == numero_3) {

    } else if (numero_1 >= numero_2 && numero_1 >= numero_3 && numero_2 >= numero_3) {
        document.getElementById("crescente").innerHTML = "Ordem Crescente: " + numero_3 + ", " + numero_2 + ", " + numero_1
        document.getElementById("decrescente").innerHTML = "Ordem decrescente: " + numero_1 + ", " + numero_2 + ", " + numero_3
    } else if (numero_1 >= numero_2 && numero_1 >= numero_3 && numero_3 >= numero_2) {
        document.getElementById("crescente").innerHTML = "Ordem Crescente: " + numero_2 + ", " + numero_3 + ", " + numero_1
        document.getElementById("decrescente").innerHTML = "Ordem decrescente: " + numero_1 + ", " + numero_3 + ", " + numero_2
    } else if (numero_2 >= numero_1 && numero_2 >= numero_3 && numero_1 >= numero_3) {
        document.getElementById("crescente").innerHTML = "Ordem Crescente: " + numero_3 + ", " + numero_1 + ", " + numero_2
        document.getElementById("decrescente").innerHTML = "Ordem decrescente: " + numero_2 + ", " + numero_1 + ", " + numero_3
    } else if (numero_2 >= numero_1 && numero_2 >= numero_3 && numero_3 >= numero_1) {
        document.getElementById("crescente").innerHTML = "Ordem Crescente: " + numero_1 + ", " + numero_3 + ", " + numero_2
        document.getElementById("decrescente").innerHTML = "Ordem decrescente: " + numero_2 + ", " + numero_3 + ", " + numero_1
    } else if (numero_3 >= numero_1 && numero_3 >= numero_2 && numero_1 >= numero_2) {
        document.getElementById("crescente").innerHTML = "Ordem Crescente: " + numero_2 + ", " + numero_1 + ", " + numero_3
        document.getElementById("decrescente").innerHTML = "Ordem decrescente: " + numero_3 + ", " + numero_1 + ", " + numero_2
    } else if (numero_3 >= numero_1 && numero_3 >= numero_2 && numero_2 >= numero_1) {
        document.getElementById("crescente").innerHTML = "Ordem Crescente: " + numero_1 + ", " + numero_2 + ", " + numero_3
        document.getElementById("decrescente").innerHTML = "Ordem decrescente: " + numero_3 + ", " + numero_2 + ", " + numero_1
    }
}