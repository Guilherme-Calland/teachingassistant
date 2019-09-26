import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {
    alunos: Aluno[]= []
    gravar(aluno: Aluno){
        var result = false;
        if (this.cpfNaoCadastrado(aluno.cpf)) {
            this.alunos.push(aluno)
            result = true
        }
        return result;
    }

    cpfNaoCadastrado(cpf: string): boolean {
        return !this.alunos.find(a => a.cpf == cpf);
     }
  }

