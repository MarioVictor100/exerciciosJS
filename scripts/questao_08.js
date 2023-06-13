function calcular_pagamento() {
    let hora = parseFloat(prompt("Digite o Valor da Sua Hora: "))

    let valor_hora = parseFloat(prompt("Digite a Quantidade de Horas Trabalhadas: "))

    let salario_bruto = hora * valor_hora;

    let imposto_renda;

    let sindicato = salario_bruto * 0.03;

    let INSS = salario_bruto / 10;

    let FGTS = salario_bruto * 0.11;

    let descontos;

    if (salario_bruto <= 900.00) {
        descontos = INSS + sindicato;
        document.getElementById("salario_bruto").innerHTML = "Salário Bruto: (" + hora + " * " + valor_hora + ") : R$ " + salario_bruto;
        document.getElementById("imposto_renda").innerHTML = "IR :  ISENTO";
        document.getElementById("sindicato").innerHTML = "(-) Sindicato (3%) : R$ " + sindicato;
        document.getElementById("INSS").innerHTML = "(-) INSS (10%) : R$ " + INSS;
        document.getElementById("FGTS").innerHTML = "FGTS (11%) : R$ " + FGTS;
        document.getElementById("total_desconto").innerHTML = "Total de descontos : R$ " + descontos;
        document.getElementById("salario_liquido").innerHTML = "Salário Liquido : R$ " + (salario_bruto - descontos);
    } else if (salario_bruto <= 1500.00) {
        imposto_renda = (salario_bruto * 0.05)
        descontos = imposto_renda + INSS + sindicato;
        document.getElementById("salario_bruto").innerHTML = "Salário Bruto: (" + hora + " * " + valor_hora + ") : R$ " + salario_bruto;
        document.getElementById("imposto_renda").innerHTML = "(-) IR (5%) : R$ " + imposto_renda;
        document.getElementById("sindicato").innerHTML = "(-) Sindicato (3%) : R$ " + sindicato;
        document.getElementById("INSS").innerHTML = "(-) INSS (10%) : R$ " + INSS;
        document.getElementById("FGTS").innerHTML = "FGTS (11%) : R$ " + FGTS;
        document.getElementById("total_desconto").innerHTML = "Total de descontos : R$ " + descontos;
        document.getElementById("salario_liquido").innerHTML = "Salário Liquido : R$ " + (salario_bruto - descontos);
    } else if (salario_bruto >= 2500.00) {
        imposto_renda = (salario_bruto / 10)
        descontos = imposto_renda + INSS + sindicato;
        document.getElementById("salario_bruto").innerHTML = "Salário Bruto: (" + hora + " * " + valor_hora + ") : R$ " + salario_bruto;
        document.getElementById("imposto_renda").innerHTML = "(-) IR (10%) : R$ " + imposto_renda;
        document.getElementById("sindicato").innerHTML = "(-) Sindicato (3%) : R$ " + sindicato;
        document.getElementById("INSS").innerHTML = "(-) INSS (10%) : R$ " + INSS;
        document.getElementById("FGTS").innerHTML = "FGTS (11%) : R$ " + FGTS;
        document.getElementById("total_desconto").innerHTML = "Total de descontos : R$ " + descontos;
        document.getElementById("salario_liquido").innerHTML = "Salário Liquido : R$ " + (salario_bruto - descontos);
    } else if (salario_bruto > 2500.00) {
        imposto_renda = (salario_bruto / 5)
        descontos = imposto_renda + INSS + sindicato;
        document.getElementById("salario_bruto").innerHTML = "Salário Bruto: (" + hora + " * " + valor_hora + ") : R$ " + salario_bruto;
        document.getElementById("imposto_renda").innerHTML = "(-) IR (20%) : R$ " + imposto_renda;
        document.getElementById("sindicato").innerHTML = "(-) Sindicato (3%) : R$ " + sindicato;
        document.getElementById("INSS").innerHTML = "(-) INSS (10%) : R$ " + INSS;
        document.getElementById("FGTS").innerHTML = "FGTS (11%) : R$ " + FGTS;
        document.getElementById("total_desconto").innerHTML = "Total de descontos : R$ " + descontos;
        document.getElementById("salario_liquido").innerHTML = "Salário Liquido : R$ " + (salario_bruto - descontos);
    }
}