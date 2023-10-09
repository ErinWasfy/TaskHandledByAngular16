import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe=new Recipe("","","",[]);
  isRecipeEmpty:boolean=false;
  constructor(private recipeService: RecipeService) { 
   
  }

  ngOnInit() {
  }
  ngDoCheck()
  {
    if(this.recipe.name!="")
    this.isRecipeEmpty=true;
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  getColor(ingred:number)
  {
    return this.recipe.ingredients[ingred].name==='Meat'?'rose':'red';
  }

}
