import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
  name = 'Louis';
  imageUrl = 'https://picsum.photos/id/237/500/500'

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
