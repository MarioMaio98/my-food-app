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
      },
      {
        id: 2,
        nome: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'food1.jpeg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        nome: 'Pizza',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'food1.jpeg',
        tags: ['FastFood', 'Hamburger'],
      },
    ]
  }
}
