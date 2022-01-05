import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})

export class CocktailListComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  public cocktailList = [] as any;

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(localData => this.cocktailList = localData);
  }
}
