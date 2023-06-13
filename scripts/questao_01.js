function questao01() {
    const peso = parseInt(prompt("Digite seu Peso (kg): "));

    const altura = parseFloat(prompt("Digite sua Altura (m):"));

    let calculo_imc = (peso / (altura * altura));

    if (calculo_imc < 18.5) {
        document.getElementById("resultado").innerHTML = 'Sua Classificação é : "Abaixo do Peso Normal"';
    } else if (calculo_imc >= 18.5 && calculo_imc <= 24.9) {
        document.getElementById("resultado").innerHTML = 'Sua Classificação é : "Peso Normal"';
    } else if (calculo_imc >= 25.0 && calculo_imc <= 29.9) {
        document.getElementById("resultado").innerHTML = 'Sua Classificação é : "Excesso de Peso"';
    } else if (calculo_imc >= 30.0 && calculo_imc <= 34.9) {
        document.getElementById("resultado").innerHTML = 'Sua Classificação é : "Obesidade Classe 1"';
    } else if (calculo_imc >= 35.0 && calculo_imc <= 39.9) {
        document.getElementById("resultado").innerHTML = 'Sua Classificação é : "Obesidade Classe 2"';
    } else if (calculo_imc >= 40.0) {
        document.getElementById("resultado").innerHTML = 'Sua Classificação é : "Obesidade Classe 3"';
    } console.log(calculo_imc);
}