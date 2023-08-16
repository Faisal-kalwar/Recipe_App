import { Component } from '@angular/core';
import { ingredient } from '../Shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
ingredients : ingredient [] = [
  new ingredient('apple',5),
  new ingredient('orange',10)
];

constructor(){

}
ngOninit() {

}
}
