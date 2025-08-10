import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss'
})
export class UiButton {
  @Input() text: string = 'button-text';
}
