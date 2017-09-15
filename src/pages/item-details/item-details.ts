import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StarWarsProvider } from '../../providers/star-wars/star-wars'

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  item: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private starWars: StarWarsProvider
  ) {
    this.item = this.navParams.get('item');
    this.starWars.GetPeopleDetails(this.item.url).subscribe(data => {
      this.selectedItem = data;
    });
  }
}
