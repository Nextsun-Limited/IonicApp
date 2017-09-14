import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  signUp() {
    this.navCtrl.setRoot(ListPage);
  }

  signIn() {
    this.navCtrl.setRoot(ListPage);
  }
}


