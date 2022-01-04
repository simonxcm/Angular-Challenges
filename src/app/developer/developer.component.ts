import { Component, OnInit } from '@angular/core';
import { Developer } from '../commons/developer.model';

@Component({

  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']

})

export class DeveloperComponent implements OnInit {

  public developer = new Developer();

  constructor() { }

  ngOnInit() {

    this.developer = new Developer();
    this.developer.lastName = 'CM';
    this.developer.firstName = 'Simon';
    this.developer.age = 31;
    this.developer.gender = 'M';
    this.developer.bio = 'Incoming Dev';
    this.developer.skill = [
      {
        name: 'REACT',
        logo: 'react logo',
        site: 'donkeyschool.com'
      },
      {
        name: 'ANGULAR',
        logo: 'angular Logo',
        site: 'angular.com'
      },
    ];

  }
}
