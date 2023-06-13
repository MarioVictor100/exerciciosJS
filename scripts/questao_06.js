function calcular_media() {
    let nota_01 = parseFloat(prompt("Digite a Primeira Nota: "))

    let nota_02 = parseFloat(prompt("Digite a Segunda Nota: "))

    const media = (nota_01 + nota_02) / 2;

    if (media >= 7) {
        document.getElementById("resultado").innerHTML = "RESULTADO: APROVADO!!!"
    } else if (media < 7) {
        document.getElementById("resultado").innerHTML = "RESULTADO: REPROVADO!!!"
    } else if (media == 10) {
        document.getElementById("resultado").innerHTML = "RESULTADO: APROVADO COM DISTINÇÃO!!!"
    }
}
