//modulos são uma composicao d componetntes, serviços etc
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlunoService } from './aluno.service';
import { AppComponent } from './app.component';
import { MetasComponent } from './metas.component';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }