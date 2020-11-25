/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
 */

function calcSalarioLiquido(bruto) {
  let aliquotaINSS;
  let aliquotaTotalIR = 0;
  let menosINSS;
  let salarioLiquido;

  if (bruto >= 0) {
    if (bruto <= 1556.94) {
      aliquotaINSS = (8 / 100) * bruto;
    } else if (bruto >= 1556.95 && bruto <= 2594.92) {
      aliquotaINSS = (9 / 100) * bruto;
    } else if (bruto >= 2594.93 && bruto <= 5189.82) {
      aliquotaINSS = (11 / 100) * bruto;
    } else if (bruto > 5189.82) {
      aliquotaINSS = 570.88;
    }
    menosINSS = bruto - aliquotaINSS;
  } else {
    console.log("Salário inválido");
    return;
  }

  if (menosINSS >= 1903.99 && menosINSS <= 2826.65) {
    aliquotaTotalIR = (7.5 / 100) * menosINSS - 142.8;
  } else if (menosINSS >= 2826.66 && menosINSS <= 3751.05) {
    aliquotaTotalIR = (15 / 100) * menosINSS - 354.8;
  } else if (menosINSS >= 3751.06 && menosINSS <= 4664.68) {
    aliquotaTotalIR = (22.5 / 100) * menosINSS - 636.13;
  } else if (menosINSS > 4664.68) {
    aliquotaTotalIR = (27.5 / 100) * menosINSS - 869.36;
  }
  salarioLiquido = menosINSS - aliquotaTotalIR;
  console.log(salarioLiquido);
}

calcSalarioLiquido(3000);
