import { Component, Input } from '@angular/core';

@Component({
  selector: 'con-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text = 'button';

  clicked() {
    console.log("Clicked: " + this.text)
  }
}
