import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailInterface } from './cocktails-interface';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  private localData: string = "/assets/data/cocktails.json"

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<CocktailInterface[]>{

    return this.http.get<CocktailInterface[]>(this.localData);

  }
}
