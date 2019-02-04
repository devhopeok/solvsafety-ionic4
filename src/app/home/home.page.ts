import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, Events, MenuController } from '@ionic/angular';
import { ParamsService } from '../services/params.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  modules = [
  	{icon: 'warning', name: 'Incident'},
  	{icon: 'eye', name: 'Hazard'},
    {icon: 'copy', name: 'Hazard'},
    {icon: 'car', name: 'Vehicle Inspection'},
  ];

  constructor(
  	public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public events: Events,
    public menuCtrl: MenuController,
    public paramsService: ParamsService,
  ) { }

  ngOnInit() {
  }

  gotoFormFill(module) {
  	this.paramsService.setParam(module);
  	// this.navCtrl.navigateRoot('/tabs');
  	// this.navCtrl.navigateForward('/tabs');
  	this.navCtrl.navigateForward('/form-fill');
  }

  logout() {
    localStorage.removeItem('loginInfo');
    localStorage.removeItem('lastLoggedIn');
    this.navCtrl.navigateRoot('/login');
  }

}
