import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../commons/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  public skill = new Skill();

  constructor() { }

  ngOnInit(){

  }

}
