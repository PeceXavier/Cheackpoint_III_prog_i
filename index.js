



function aluno(nome, QFaltas, notas){
  return { nome: nome, QFaltas: QFaltas, notas: notas,

    calcularMedia(){
      let media = 0;

      for (let i = 0; i < this.notas.length; i++){
        media += this.notas [i];

      }   
      return media / this.notas.length;
    },

    faltas(){
      this.QFaltas++;
    }, 
  }
}

let aluno0 = new aluno('Paulo Cesar', 1, [9, 9, 8, 6]);
let aluno1 = new aluno('Malaquias Barreto', 2, [3, 9, 8, 6]);
let aluno2 = new aluno('Geraldao', 4, [9, 9, 8, 6]);
let aluno3 = new aluno('Dwyane Wade', 5, [8, 8, 5, 6]);
let aluno4 = new aluno('Stephen Curry', 0, [7, 7, 7, 7]);

let alunos = [ aluno0, aluno1, aluno2, aluno3, aluno4];


for (let aluno of alunos) {
    console.log("O aluno " + aluno.nome + " obteve media de: " + aluno.calcularMedia());
}

aluno2.faltas()
 console.log("Faltas do aluno:" + aluno2.QFaltas);



 let curso = {
    nomeCurso: "Certified Tech Developer",
    notaAprovacao: 7,
    FMaxima: 3,
    LEstudantes: [aluno0, aluno1, aluno2, aluno3, aluno4],

    addAlunos: function(novoAluno) {
        curso.LEstudantes.push(novoAluno);
      },

      Aprovado: function(aluno) {
        let mediaAluno = aluno.calcularMedia();
    
        if ( this.faltaEmedia(mediaAluno, aluno.QFaltas) || this.mediaAcima(aluno.QFaltas, mediaAluno)){
            return true;
        } else {
            return false;
        }
      },

      faltaEmedia: function(mediaAluno, faltas) {
        return mediaAluno >= curso.notaAprovacao && faltas < curso.FMaxima ? true : false;
      },
    
      mediaAcima: function(QFAluno, mediaAluno) {
        if (QFAluno == curso.FMaxima) {
          let notaAprovacaoA = curso.notaAprovacao + ((curso.notaAprovacao / 100) * 10);
          return mediaAluno > notaAprovacaoA ? true : false;
        }
      },
       
      alunosAprovados: function () {
        for (let aluno of this.LEstudantes){
          console.log("O aluno " + aluno.nome + " foi aprovado? " + curso.Aprovado(aluno));
        }
      }

 };

    let novoAluno5 = new aluno("Caitano Veloz", 3, [5, 6, 8, 9]);
    let novoAluno6 = new aluno("Neo Matrix", 2, [6, 2, 9, 7])
    let novoAluno7 = new aluno("Asterix e Obelix", 1, [10, 10, 10, 10])
  
    let novosAlunos = [novoAluno5, novoAluno6, novoAluno7];

    for (let aluno of novosAlunos) {
        curso.addAlunos(aluno);
  }

  for (let aluno of curso.LEstudantes) {
    console.log(aluno.nome);
}

console.log("O aluno " + aluno3.nome + " esta aprovado ?", curso.Aprovado(aluno3));


curso.alunosAprovados();