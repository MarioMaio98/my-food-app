import { Component, NgModule, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit{
  //first i create an empty array of String
  foods:String[]= [];
  constructor(private foodService:FoodService){}
   
  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}
