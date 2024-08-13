import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll():String[]{
    
    return [
      "public/food1.jpeg"
    ]
  }
}
