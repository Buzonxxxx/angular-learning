import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input('img') postImg = ''
  @Output() imgSelected = new EventEmitter<string>();
}
