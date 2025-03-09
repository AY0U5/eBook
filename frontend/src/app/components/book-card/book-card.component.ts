import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() pictureName: string;
  @Input() author: string;
  @Input() category: string;
  @Input() price: number;
}
