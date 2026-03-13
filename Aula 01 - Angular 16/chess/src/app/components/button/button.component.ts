import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked = false;
  
  onClick = () => {
    this.isClicked = !this.isClicked;
    console.log("clicado: ", this.isClicked);
  }
}
