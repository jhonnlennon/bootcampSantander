//Vamos estar criando uma calculadora..
//A "Contra barra + N", \n, serve para quebrar linha.


function calculadora (){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4- Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**) \n 7 - DESLIGAR!'));

    if(!operacao || operacao >= 8 || operacao < 1 ){
        alert('Operação inválida, escolha uma opção entre 1 até 7.')
        calculadora()
    }else if(operacao == 7){
    alert('Até mais..!')
    }else{
//Usando o number(), que é uma função nativa do JS, ele vai transformar tudo em number..
let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor'));
let result;
if(!n1 || !n2){
    alert('Parametros inválidos..');
    calculadora();
}else{
function soma(){
    result = n1 + n2;
    alert(`${n1} + ${n2} = ${result}`);
    novaOperacao();
}

function subtracao(){
    result = n1 - n2;
    alert(`${n1} - ${n2} = ${result}`);
    novaOperacao();
}

function multiplicacao(){
    result = n1 * n2;
    alert(`${n1} x ${n2} = ${result}`);
    novaOperacao();
}

function divisaoReal(){
    result = n1 / n2;
    alert(`${n1}/ ${n2} = ${result}`);
    novaOperacao();
}

function divisaoInteira(){
    result = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${result}`);
    novaOperacao();
}

function potenciacao(){
    result = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${result}`);
    novaOperacao();
}


function novaOperacao(){
    let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não');

    if(opcao == 1){
        calculadora();
    }else if(opcao ==2){
        alert('Até mais!!');
    }else{
        alert('Digite uma opção válida!');
        novaOperacao();
    }
}
}
// if (operacao == 1){
//     soma();
// }else if(operacao == 2){
//     subtracao();
// }else if(operacao == 3){
//     multiplicacao();
// }else if(operacao == 4){
//     divisaoReal();
// }else if(operacao == 5){
//     divisaoInteira();
// }else if(operacao == 6){
//     potenciacao();
//         }
switch(operacao){
    case 1:
        soma();
        break;
        case 2:
            subtracao();
            break;
            case 3:
                multiplicacao();
                break;
                case 4:
                    divisaoReal();
                    break;
                    case 5:
                        divisaoInteira();
                        break;
                        case 6:
                            potenciacao();
                            break;

        }
    }
}


calculadora();