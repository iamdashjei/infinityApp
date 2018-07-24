import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SurveyorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surveyor-form',
  templateUrl: 'surveyor-form.html',
})
export class SurveyorFormPage{


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() { console.log('ionViewDidLoad SurveyorFormPage'); }


}
