import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DeviceService} from "../../services/device-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-trips',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  // list of trips
  public devices: any;

  constructor(public nav: NavController, public deviceService: DeviceService) {
    // set sample data
    this.devices = deviceService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

  findDevice() {
    this.nav.push(TripDetailPage, {id: 0});
  }
}
