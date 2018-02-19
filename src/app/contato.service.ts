import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import {contato} from './contato';
import {CONTATOS} from './mock-contato';
import { MessageService } from './message.service';

@Injectable()
export class ContatoService {

  constructor(private messageService : MessageService) { }

  getContatos(): Observable<contato[]> {
    //TODO: Enviar mensagem após carregar os Contatos
    this.messageService.add('Contatos carregados!');
    return of(CONTATOS);
  }
}
