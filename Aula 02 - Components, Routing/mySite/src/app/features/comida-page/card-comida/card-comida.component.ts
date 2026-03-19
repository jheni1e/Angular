import { Component } from '@angular/core';
import MockComidas, { IComida } from 'src/app/mocks/Comida.mock';

@Component({
  selector: 'app-card-comida',
  templateUrl: './card-comida.component.html',
  styleUrls: ['./card-comida.component.css']
})
export class CardComidaComponent {
  protected comidas: IComida[] = []

  constructor() {
    this.comidas = MockComidas;
  }
}
