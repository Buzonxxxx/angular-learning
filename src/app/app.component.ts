import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
  name = 'Louis';
  imageUrl = 'https://picsum.photos/id/237/500/500'
  updatedImageUrl = "https://fastly.picsum.photos/id/331/200/300.jpg?hmac=p5C3371_uSYqznhNsddJ6h1t3gMS35ijqJoWBTuBRIQ"

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value;
  }
}
