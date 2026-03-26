import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/mocks/Item.mock';
import { IPerson } from 'src/app/mocks/Person.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  item!: Item;
}
