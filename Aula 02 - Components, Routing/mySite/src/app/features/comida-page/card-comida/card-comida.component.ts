import { Component } from '@angular/core';
import { IComida } from 'src/app/mocks/Comida.mock';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-comida',
  templateUrl: './card-comida.component.html',
  styleUrls: ['./card-comida.component.css']
})
export class CardComidaComponent {
  @Input()
  comidas: IComida[] = []

  @Input()
  abriu: boolean = false; // retém a variável booleana q controla o modal

  itemSelecionado!: IComida; // variável do item selecionado ao ser clicado

  abrirModal(c: IComida) {
    this.itemSelecionado = c; // seta o item selecionado para o que você clicou
    this.abriu = true; // seta como true para abrir o modal
  }
}
