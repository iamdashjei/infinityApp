import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import { RestProvider } from '../../providers/rest/rest';
import { Badge } from '@ionic-native/badge';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  badgeNumber: number;
  leads: any;
  errorMessage: string;

  MENU = {
    DEFAULT: 'menu-components',
    MATERIAL: 'menu-material',
    AVATAR: 'menu-avatar',
    DARK: 'menu-dark',
    RIGHT: 'menu-right',
  };

  constructor(private badge: Badge, public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public menuCtrl: MenuController) {

    this.menuCtrl.enable(true, 'menu-material');
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
              labels: ["In Progress", "Completed", "Added Leads"],
              datasets: [{
                  label: '# of Leads',
                  data: [12, 19, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)'
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          }

      });

      this.getLeads();
  }

  getLeads() {
   this.rest.getLeads()
      .subscribe(
        leads => this.leads = leads,
        error =>  this.errorMessage = <any>error);
   }

   loadProgress() {
     return 90;
   }





}
