
/*antes, esse alunos.service simulava um servidor, 
criando um array de alunos */

import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Aluno } from '../../../common/aluno';

@Injectable()
export class AlunoService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
/*
versao síncrona se req:
r = this.http.post(...);
print("oi")
//oi só é impresso SE e DEPOIS que chegar a resposta
assíncrona:
retorna algo mesmo sem receber resposta do servidor, no caso retorna um observable
observable observa valores, um canal de comunicacao que pe devolvido que eventualmente posso receber algum valor pelo canal.

subscribe olha os valores da observable

<any> -> qual o tipo dos valores de observable? any.

subscribe(
   f -> ação se chegar um novo elemento no canal.
  ,g -> ação se houver algum erro.
)
*/
  criar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<any>(this.taURL + "/aluno", aluno, {headers: this.headers})
    /*resposta do servidor */
/* 
http.post -> requisicao http
1o parametro -> endereço do serviço +
 /aluno -> alunos component (la em module mostra
os path diferentes) 
2o parametro -> aluno -> objeto aluno que será criado la no 
servidor
3o parametro -> o cabeçalho que será enviado na requisicao
(algo a ver com o que ta la em private headers = ... ,la em cima)

recaptulando os parametros(o endereço + comonentes de aluno,
  conteudo, cabeçalho)

----
o metodo post cria um objeto do tipo observable. O servidor 
retorna um objeto do tipo JSON que seria o aluno criado.
*/
             .pipe( 
/*
o pipe faz 2 operacoes no observable.
*/
                retry(2),
/*1a operacao, retry, reenvia a requisicao 2 vezes */
                map( res => {if (res.success) {return aluno;} else {return null;}} )
/*
map pega uma lista de objetos recebidos pelo canal, à cada elemento ele retorna um aluno ou um null
ex: [{sucess},{failure},{sucess}] -> [{"jao","097676111","bleh@gmail"},null, ...]

2a operacao, map, recebe uma responsta do servidor (responce)  
se ela tiver o atributo sucess -> retorna o aluno, 
senao -> null*/

/*

*/
              ); 
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.http.put<any>(this.taURL + "/aluno",JSON.stringify(aluno), {headers: this.headers})          .pipe( 
                retry(2),
                map( res => {if (res.success) {return aluno;} else {return null;}} )
              ); 
  }

  getAlunos(): Observable<Aluno[]> {
    /* observable representa uma potencial lista de alunos,*/
    return this.http.get<Aluno[]>(this.taURL + "/alunos")
              .pipe(
                 retry(2)
                 /*ele envia a requisicao 2 vezes caso a 1a req
                 nao seja bem sucedida */
               );
  }

}