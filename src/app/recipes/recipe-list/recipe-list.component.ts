import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://lifemadesweeter.com/wp-content/uploads/Instant-Pot-Beef-Stew-Recipe-Photo-Recipe-1-of-1-12-e1507849409918-500x375.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://lifemadesweeter.com/wp-content/uploads/Instant-Pot-Beef-Stew-Recipe-Photo-Recipe-1-of-1-12-e1507849409918-500x375.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
