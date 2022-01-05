import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() public sendOnomatopiaToParent = new EventEmitter<string>()

  createOnomatopia(value: string): void {
    this.sendOnomatopiaToParent.emit(value);
  }

}
