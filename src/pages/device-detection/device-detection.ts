import {Component} from "@angular/core";
import {Storage} from '@ionic/storage';
import {NavController, LoadingController, AlertController} from "ionic-angular";

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

  constructor(private storage: Storage, public nav: NavController, public alertCtrl: AlertController, public deviceDetectionService: DeviceDetectionService, public loadingCtrl: LoadingController) {
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
      this.showConfirm();
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

  addDeviceLoading(onComplete) {
      const loader = this.loadingCtrl.create({
          content: "기기를 등록하는중입니다..."
      });

      loader.onDidDismiss(() => {
          console.log('Dismissed loading');
          onComplete();
      });

      loader.present();

      setTimeout(() => { //기기 감지 api 연동 필요
          loader.dismiss();
      }, 3000);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '기기 추가 확인',
      message: '선택한 기기를 추가하시겠습니까?',
      buttons: [
        {
          text: '취소',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '확인',
          handler: () => {
            console.log('Agree clicked');
            this.storage.set('detectedDevice', this.detectedDevices).then(()=>{
              this.addDeviceLoading(()=>{
                this.nav.push(DevicesPage);
              });
            });
          }
        }
      ]
    });
    confirm.present();
  }

}
