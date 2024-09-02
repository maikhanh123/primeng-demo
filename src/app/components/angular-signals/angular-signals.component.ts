import { CommonModule } from '@angular/common';
import { Component, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-angular-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-signals.component.html',
  styleUrl: './angular-signals.component.scss',
})

export class AngularSignalsComponent {
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }

  public count: WritableSignal<number> = signal<number>(4);

  setRandomCount() {
    this.count.set(Math.floor(Math.random() * 10 + 1));
  }
}
