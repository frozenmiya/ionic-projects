import {Component, NgZone} from "@angular/core";
import {NavController, AlertController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {DeviceService} from "../../services/device-service";
import {DeviceDetailPage} from "../device-detail/device-detail";
import {DeviceDetectionPage} from "../device-detection/device-detection";
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  // list of trips
  public devices: any;
  public numOfDevices: 0;

  constructor(private ngZone: NgZone, private storage: Storage, public nav: NavController, public deviceService: DeviceService, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
    // set sample data
    //this.devices = deviceService.getAll();
    // this.storage.remove('detectedDevice');

  }

  ngOnInit() {
    this.storage.get('detectedDevice').then((val) => {

      this.ngZone.run(() => {
        console.log('storage : ', val);
        if (val === null) {
          this.devices = null;
        } else {
          this.devices = val;
        }
        this.numOfDevices = this.devices ? this.devices.length : 0;
        //this.cdr.detectChanges();
      });
      
    }).catch((err) => {
      console.log(err)
    });
  }

  // view trip detail
  viewDetail(id) {
    console.log('device viewDetail');
    this.nav.push(DeviceDetailPage, {id: id});
  }

  findDevice() {
    console.log('device.html find device');
    // this.showAlert(() => {
    //   this.nav.push(DeviceDetectionPage);
    // });

    this.showConfirm();
  }

  // showAlert(callback) {
  //   const alert = this.alertCtrl.create({
  //     title: '기기 찾기',
  //     subTitle: '기기 찾기를 시작하기 전 기기와 스마트폰이 같은 wi-fi 내에 있는지 확인하십시오.',
  //     buttons: [
  //       {
  //         text: '확인',
  //         role: 'ok',
  //         handler: () => {
  //           callback();
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '로그인 알림',
      message: '기기를 새로 추가하려면 로그인해야합니다.',
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
            this.nav.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }
}
