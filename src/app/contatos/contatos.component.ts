import { Component, OnInit } from '@angular/core';
import { contato } from '../contato';
//import { CONTATOS } from '../mock-contato'
import { ContatoService} from '../contato.service'
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  selectedContato : contato;

  mockcontatos : contato[];// = CONTATOS;

  constructor(private contatoService : ContatoService) { }

  ngOnInit() {
    this.getContatos();
  }
  
  getContatos(): void {
    //this.mockcontatos = this.contatoService.getContatos();
    this.contatoService.getContatos()
      .subscribe(contato => this.mockcontatos = contato);
  }
  onSelect(contatoSelecionado: contato) : void {
    this.selectedContato = contatoSelecionado; 
  }
}
