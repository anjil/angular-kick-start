import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjgl8_Y18HkAhUIWX0KHcIEC5MQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.simplyrecipes.com%2F&psig=AOvVaw001d2cwMIf_cpdV0AKuIkS&ust=1568047873705854')
  ];
  constructor() { }

  ngOnInit() {
  }

}
