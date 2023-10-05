//Definindo parametros para o maior e menor
let maior = Number.MIN_VALUE;
let menor = Number.MAX_VALUE;
//primeira pergunta e criação de arrays
let turma = String(prompt('Qual o nome da turma?'));
let materias = [];
let mediasGeral = []
let mediasAlunos = [];
//for de materias
let numeroDeMaterias = parseInt(prompt('Quantas materias essa turma cursa?'))
for(let i = 0; i < numeroDeMaterias; i++) {
    let materia = prompt("Digite o nome da matéria " + (i + 1));
    materias.push(materia);
    let alunosAprovados = [];
    let alunosReprovados = [];
    let alunosFinal = [];
  
    let alunosQuant = parseInt(prompt("Quantos alunos têm na matéria " + materia + "?"));
    //for dos Alunos
    for(let i = 0; i < alunosQuant; i++){
        let nota1 = parseFloat(prompt('Digite a primeira nota do aluno '+(i+1)+' na disciplina ' + materia));
        let nota2 = parseFloat(prompt('Digite a segunda nota do aluno '+(i+1)+' na disciplina ' + materia));
        let media = (nota1+nota2)/2;

            console.log('A media do aluno '+(i+1)+' foi: ', media);
            mediasAlunos.push(media);
        if (media >= 7){
            console.log('O aluno '+(i+1)+' foi aprovado');
            alunosAprovados.push('1');
        } else if (media >= 4) {
            console.log('O aluno '+(i+1)+' está na final');
            alunosFinal.push('1');
        } else {
            console.log('O aluno '+(i+1)+' foi reprovado');
            alunosReprovados.push('1');
        }
        if (maior < media){
            maior = media
        } else if (menor > media){
            menor = media
        }
    
    }
    //For para calcular o total das medias de cada disciplina
    let somaMedias = 0;
    for (let k = 0; k < mediasAlunos.length; k++) {
        somaMedias += mediasAlunos[k];
    }
    let mediaMateria = somaMedias / mediasAlunos.length;

    console.log('#### RESUMO DA DISCIPLINA ####');
    console.log('DISCIPLINA: '+ materia);
    console.log('QTD TOTAL DE ALUNOS: ', alunosQuant);
    console.log('MÉDIA GERAL DA DISCIPLINA: ', mediaMateria.toFixed(2));
    console.log('MAIOR MÉDIA DA DISCIPLINA: ', maior.toFixed(2));
    console.log('MENOR MÉDIA DA DISCIPLINA: ', menor.toFixed(2));
    console.log('QTD ALUNOS REPROVADOS: ', alunosReprovados.length);
    console.log('QTD ALUNOS NA FINAL: ', alunosFinal.length);
    console.log('QTD ALUNOS APROVADOS: ', alunosAprovados.length);
    console.log(' ');

}
// calcular a media geral de todas as disciplina
let somaMediasGeral = 0;
for (let j = 0; j < mediasAlunos.length; j++) {
        somaMediasGeral += mediasAlunos[j];
}
let mediaFinal = somaMediasGeral / mediasAlunos.length;

console.log('#### RESUMO DA TURMA ####'); 
console.log('TURMA: ', turma);
console.log('QTD DE DISCIPLINAS: ', materias.length);
console.log('MÉDIA GERAL DA TURMA: ', mediaFinal.toFixed(2));
