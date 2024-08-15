import { Injectable } from '@angular/core';
import { Food } from '../../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll():Food[]{
    
    return [
    {
    id: 1,
    nome: 'Hamburger',
    price: 2,
    tags: ['Fast Food'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'food1.jpeg',
    origins: ['USA'],
    cookTime: '1 hour',
      }

    ]
  }
}
