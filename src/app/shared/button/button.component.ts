import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() labelText: string;
  @Input() buttonClass: string;
  @Input() isDisabled = false;
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() {
    this.labelText = '';
    this.buttonClass = '';
  }

  sendMessageToParent() {
    this.buttonClicked.emit('Happy!');
  }
}
