import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { AlunoService } from './aluno.service';
import { Aluno } from '../../../common/aluno';

@Component({
  selector: 'metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})

export class MetasComponent implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[]

    atualizarAluno(aluno: Aluno): void{
        this.alunoService.atualizar(aluno)
    }

    ngOnInit(): void{
        this.alunos = this.alunoService.getAlunos()
    }
}