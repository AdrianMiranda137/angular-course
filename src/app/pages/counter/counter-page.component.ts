import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor() {}

  increaseBy(value: number): void{
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
