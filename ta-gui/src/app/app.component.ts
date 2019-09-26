//component
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({ //decorador
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private alunoService: AlunoService) {}
   aluno: Aluno = {nome: "", cpf: "", email: "", login_git: ""};
   alunos: Aluno[] = []
   cpfduplicado: boolean = false;

   gravar(a: Aluno): void {
     if (this.alunoService.gravar(a)) {
       this.alunos.push(a);
       this.aluno = {nome: "", cpf: "", email: "", login_git: ""};
       /*lembra que isso ta vinculado com o ngModel, 
      assim que um aluno é cadastrado, esses valores são zerados*/
     } else {
       this.cpfduplicado = true;
     }
   }
   onMove(): void {
    this.cpfduplicado = false;
  }
}

