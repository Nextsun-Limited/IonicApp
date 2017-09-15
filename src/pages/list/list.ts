import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { StarWarsProvider } from '../../providers/star-wars/star-wars'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{name: string, icon: string}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private starWars: StarWarsProvider
  ) {

    this.starWars.GetPeopleList().subscribe(data => {
      this.items = data;
    });

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
