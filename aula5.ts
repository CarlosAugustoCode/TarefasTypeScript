import promptSync from "prompt-sync";
let prompt = promptSync();
let resposta:string;
import { 
    exercicio1, 
    exercicio2,
    exercicio3,
    exercicio4,
    exercicio5,
    exercicio6,
    exercicio7,
    exercicio8,
    exercicio9,
    exercicio10,
    exercicio11,
    mostrarMenu
} from './modulo';
mostrarMenu();

do{
    console.log("\n")
    resposta = prompt("Digite o Número do exercicio que voce quer exibir, se quiser sair digite 'sair': ");
    switch(resposta){
        case '1': 
            exercicio1();
            break;
        case '2':
            exercicio2();
            break;
        case '3':
            exercicio3();
            break;
        case '4':
            let tabuada:number  = parseFloat(prompt('Digite qual a tabuada você deseja visualizar (0-10): '));
            exercicio4(tabuada);
            break;
        case '5':
            exercicio5();
            break;
        case '6':
            exercicio6();
            break;
        case '7':
            exercicio7();
            break;
        case '8':
            exercicio8();
            break;
        case '9':
            exercicio9();
            break;
        case '10':
            exercicio10();
            break;
        case '11':
            exercicio11();
            break;
        case 'sair':
            console.log('\nObrigado por utilziador nosso gerador de exercícios :) Volte Sempre !!!\n');
            break;
        default:
            console.log('\nValor Digitado não corresponde a nenhum exercicio\n');
            break;
        }
    
}while(resposta != 'sair')