import { Component, OnInit, Input } from '@angular/core';
import { contato } from '../contato'

@Component({
  selector: 'app-contato-detalhes',
  templateUrl: './contato-detalhes.component.html',
  styleUrls: ['./contato-detalhes.component.css']
})
export class ContatoDetalhesComponent implements OnInit {

  @Input() meuContato : contato;

  constructor() { }

  ngOnInit() {
  }


}
