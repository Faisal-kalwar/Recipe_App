import { Component } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
recipes : Recipe[] = [
  new Recipe('A Test Recipe','This is simply a test ', 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
];

constructor(){

}
ngOnInit() {}
}
