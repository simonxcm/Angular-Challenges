import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(){

    let cocktailList = [
      {
        name: 'Mojito',
        price: 10,
        image: 'https://photos.bigoven.com/recipe/hero/drink-mojito-e327ed.jpg?h=300&w=300'
      },
      {
        name: 'Cuba Libre',
        price: 10,
        image: 'https://bevvyco.s3.amazonaws.com/img/drinks/Sl/zSl/07e012c11762f6309fff534e810e06ab-md.jpg?ts=1397060573000'
      },
      {
        name: 'Bloody Mary',
        price: 10,
        image: 'https://photos.bigoven.com/recipe/hero/bloody-mary-nyt-568054.jpg?h=300&w=300'
      },
    ];

    return cocktailList;
  }
}
