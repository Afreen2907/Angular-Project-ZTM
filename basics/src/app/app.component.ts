import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})
export class AppComponent {

  name = 'luis ramirez'
  imageURL = 'https://picsum.photos/id/237/500/500'
  images = [
    'https://picsum.photos/id/227/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/247/500/500'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }

  blueClass = false;
  fontSize = 30
  

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imageURL = (e.target as HTMLInputElement).value  
  }

  logImg(event: string) {
    console.log(event)
  }
}