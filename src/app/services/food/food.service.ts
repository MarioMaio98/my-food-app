import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll():String[]{
    
    return [
      "food1.jpeg",
      "food4.jpeg",
      "food2.webp",
      "food3.jpg",
      "food5.webp"
    ]
  }
}
