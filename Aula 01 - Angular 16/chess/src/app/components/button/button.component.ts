import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked = false;
  OnClick: EventEmitter<void> = new EventEmitter();

  clicked = () => {
    this.isClicked = !this.isClicked;
    console.log("clicado: ", this.isClicked);
    this.OnClick.emit();
  }
}
