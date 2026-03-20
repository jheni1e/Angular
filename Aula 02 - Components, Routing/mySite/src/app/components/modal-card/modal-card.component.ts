import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from 'src/app/mocks/Comida.mock';
import { IMercado } from 'src/app/mocks/Mercado.mock';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent {

  @Input()
  item!: IComida | IMercado; // recebe um item do componente pai, que pode ser tanto um IComida ou um IMercado

  @Output()
  dataChange: EventEmitter<boolean> = new EventEmitter(); // emitter para mandar pro componente pai o "abriu" booleano

  changed = (e: any) => {
    this.dataChange.emit(e); // emite a mudança booleana
  }
}
