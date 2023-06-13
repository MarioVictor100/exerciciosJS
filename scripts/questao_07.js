function calcular_reajuste() {
    let salario = parseFloat(prompt("Digite o Seu Respectivo Salário: "))

    let reajuste;

    if (salario < 280.00) {
        reajuste = (salario / 5)
        document.getElementById("salario").innerHTML = "Seu Salário Inicial: R$" + salario;
        document.getElementById("percentual").innerHTML = "Percentual de Aumento do seu Salário: 20%"  
        document.getElementById("valor_aumento").innerHTML = "O Valor do Reajuste: R$" + reajuste;
        document.getElementById("novo_salario").innerHTML = "Seu Novo Salário: R$" + (salario + reajuste);
    } else if (salario >= 280.00 && salario < 700.00) {
        reajuste = (salario * 0.15)
        document.getElementById("salario").innerHTML = "Seu Salário Inicial: R$" + salario;
        document.getElementById("percentual").innerHTML = "Percentual de Aumento do seu Salário: 15%"  
        document.getElementById("valor_aumento").innerHTML = "O Valor do Reajuste: R$" + reajuste;
        document.getElementById("novo_salario").innerHTML = "Seu Novo Salário: R$" + (salario + reajuste);
    } else if (salario >= 700.00 && salario < 1500.00) {
        reajuste = (salario / 10)
        document.getElementById("salario").innerHTML = "Seu Salário Inicial: R$" + salario;
        document.getElementById("percentual").innerHTML = "Percentual de Aumento do seu Salário: 10%"  
        document.getElementById("valor_aumento").innerHTML = "O Valor do Reajuste: R$" + reajuste;
        document.getElementById("novo_salario").innerHTML = "Seu Novo Salário: R$" + (salario + reajuste);
    } else if (salario >= 1500.00) {
        reajuste = (salario * 0.05)
        document.getElementById("salario").innerHTML = "Seu Salário Inicial: R$" + salario;
        document.getElementById("percentual").innerHTML = "Percentual de Aumento do seu Salário: 5%"  
        document.getElementById("valor_aumento").innerHTML = "O Valor do Reajuste: R$" + reajuste;
        document.getElementById("novo_salario").innerHTML = "Seu Novo Salário: R$" + (salario + reajuste);
    }
}