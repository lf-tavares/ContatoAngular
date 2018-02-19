import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FormsModule } from '@angular/forms';
import { ContatoDetalhesComponent } from './contato-detalhes/contato-detalhes.component'; // <-- NgModel lives here
import {ContatoService} from './contato.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    ContatoDetalhesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContatoService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
