import {Component} from "@angular/core";
import {NavController, Platform} from "ionic-angular";
import {DeviceService} from "../../services/device-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-device-detail',
  //templateUrl: 'device-detail.html'
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Tabs</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
  </ion-content>
    `
})
export class BasicPage {
  isAndroid: boolean = false;
  // trip info
  public device: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  constructor(public nav: NavController, public deviceService: DeviceService, platform: Platform) {
    // set sample data
    this.device = deviceService.getItem('EPF129V0D350');

    this.isAndroid = platform.is('android');
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
    this.nav.push(CheckoutTripPage);
  }
}


@Component({
  template: `
  <ion-tabs class="tabs-basic">
    <ion-tab tabTitle="Music" [root]="rootPage"></ion-tab>
    <ion-tab tabTitle="Movies" [root]="rootPage"></ion-tab>
    <ion-tab tabTitle="Games" [root]="rootPage"></ion-tab>
  </ion-tabs>
`})
export class DeviceDetailPage {
  rootPage = HomePage;

}
