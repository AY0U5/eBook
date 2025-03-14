import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() title: string;
  @Input() message: string;
  @Input() icon: string;

  constructor() {}
}
