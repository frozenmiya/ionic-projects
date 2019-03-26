import {Component} from "@angular/core";
import {NavController, Platform, AlertController} from "ionic-angular";
import {DeviceService} from "../../services/device-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";
import { HomePage } from "../home/home";

@Component({
    selector: 'page-device-info',
    templateUrl: 'device-info.html'
})

export class DeviceInfoPage {

    public deviceInfo: any;

    constructor(public deviceService: DeviceService) {
        this.deviceInfo = deviceService.getDeviceInfo();
        console.log('device info : ', this.deviceInfo);
    }
}