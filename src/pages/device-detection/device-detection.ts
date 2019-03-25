import {Component} from "@angular/core";
import {Storage} from '@ionic/storage';
import {NavController, LoadingController} from "ionic-angular";

import {DeviceDetectionService} from "../../services/device-detection-service";
import {DevicesPage} from "../devices/devices";


@Component({
  selector: 'page-device-detection',
  templateUrl: 'device-detection.html'
})
export class DeviceDetectionPage {
  // list of trips
  public detectedDevices: any;
  public numOfDevices: 0;

  constructor(private storage: Storage, public nav: NavController, public deviceDetectionService: DeviceDetectionService, public loadingCtrl: LoadingController) {
    // set sample data
    // this.devices = deviceDetectionService.getAll();

    this.presentLoading(() => {
        this.detectedDevices = deviceDetectionService.getAll();
        this.numOfDevices = this.detectedDevices.length;
        console.log('this : ', this.detectedDevices.length);
    });

  }

  addDevice() {
      console.log('add device');
      this.storage.set('detectedDevice', this.detectedDevices);
      this.nav.push(DevicesPage);
  }

  presentLoading(onDidDismissFunction) {
        const loader = this.loadingCtrl.create({
            content: "기기를 찾는중..."
        });

        loader.onDidDismiss(() => {
            console.log('Dismissed loading');
            onDidDismissFunction();
        });

        loader.present();

        setTimeout(() => { //기기 감지 api 연동 필요
            loader.dismiss();
        }, 3000);
    }

}
