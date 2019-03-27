import {Component} from "@angular/core";
import {NavController, Platform, AlertController} from "ionic-angular";
import {DeviceService} from "../../services/device-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";
import {DeviceInfoPage} from "../device-info/device-info";

@Component({
  selector: 'page-device-detail',
  templateUrl: 'device-detail.html'
})
export class DeviceDetailPage {
  isAndroid: boolean = false;
  // trip info
  public device: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;
  public tds = 0;

  constructor(public nav: NavController, public deviceService: DeviceService, platform: Platform, public alertCtrl: AlertController) {
    // set sample data
    this.device = deviceService.getItem('EPF129V0D350');

    this.isAndroid = platform.is('android');

  }

  ionViewDidEnter(){
      console.log("ionViewDidEnter");
      this.setTds();
  }

  goToDeviceInfoPage() {
    this.nav.push(DeviceInfoPage);
  }

  powerAlert() {
    const alert = this.alertCtrl.create({
      title: '기기 On/Off 알림',
      subTitle: '기기 전원상태를 변경하시겠습니까?',
      buttons: [
          {
            text: '취소',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '확인',
            handler: data => {
              console.log('Saved clicked');
              //turn on or off the machine.
            }
          }
        ]
    });
    alert.present();
  }

  setTds() {
    let arr = [5, 6, 7, 8, 9];

    for( let i = 0; i < 5; i++ ){
      setTimeout(()=>{
        let rand = arr[Math.floor(Math.random() * arr.length)];
        this.tds = rand;
      }, 5000*i);
    }
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

