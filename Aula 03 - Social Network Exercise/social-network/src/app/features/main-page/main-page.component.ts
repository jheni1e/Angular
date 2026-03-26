import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  name = '';
  image = '';

  items: any[] = [];

  enviar() {
    const novoItem = {
      name: this.name,
      image: this.image,
    };

    this.items.push(novoItem);
    this.name = '';
    this.image = '';
  }
}
