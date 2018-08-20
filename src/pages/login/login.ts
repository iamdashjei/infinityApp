import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  phone: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad(){
      console.log('ionViewDidLoad LoginPage');
  }

  // Login for OTP
  login() {
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
	    defaultCountryCode: "PH",
	    facebookNotificationsEnabled: true
    }, (successdata) => {
      (<any>window).AccountKitPlugin.getAccount((user) => {
        this.navCtrl.setRoot('DashboardPage');
      })
      }, (err) => {
        alert(err);
    })
  }
}
