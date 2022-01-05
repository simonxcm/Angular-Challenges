import { Component, Input } from '@angular/core';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';

  // @Input() name: string | undefined;

  public onomatopoeias: Array<string> = [];

  onReceiveNewOnomatopia(newOnomatopia: string) {
    this.onomatopoeias.push(newOnomatopia);
    console.log(newOnomatopia);
  }

}
