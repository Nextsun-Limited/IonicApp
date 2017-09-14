import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{name: string, picture: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        name: 'Item ' + i,
        picture: ''
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
