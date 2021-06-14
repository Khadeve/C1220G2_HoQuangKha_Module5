import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-slider-app';
  numberFromApp: number = 0;

  onPrevious(): void {
    if (this.numberFromApp > 0) {
      this.numberFromApp--;
    }
    console.log(this.numberFromApp);
  }

  onNext(): void {
    if (this.numberFromApp < 3) {
      this.numberFromApp++;
    }
    console.log(this.numberFromApp);
  }
}
