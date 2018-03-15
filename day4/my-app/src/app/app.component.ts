import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "Angular";

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}