import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  providers: [CocktailService]
})

export class CocktailListComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  cocktailList = [] as any;

  ngOnInit(): void {
    this.cocktailList = this.cocktailService.getCocktails();
  }
}
