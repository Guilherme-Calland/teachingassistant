import { Aluno } from './aluno';

export class AlunoService {
    alunos: Aluno[]= []
    gravar(aluno: Aluno){
        var result = false;
        if(!this.alunos.find(a=> a.cpf == aluno.cpf)){
            this.alunos.push(aluno)
            result = true
        }
        return result;
    }
  }

