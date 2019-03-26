import {Component} from "@angular/core";
import {DeviceService} from "../../services/device-service";

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