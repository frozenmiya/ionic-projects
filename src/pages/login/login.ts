import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
// import {HomePage} from "../home/home";
import {DevicesPage} from "../devices/devices";
import {DeviceDetectionPage} from "../device-detection/device-detection";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController, public alertCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  goToDevicesPage() {
    this.nav.push(DevicesPage);
  }

  // login and go to home page
  login() {
    //this.nav.setRoot(DevicesPage);
    this.showAlert(() => {
      this.nav.push(DeviceDetectionPage);
    });
  }

  showAlert(callback) {
    const alert = this.alertCtrl.create({
      title: '기기 찾기',
      subTitle: '기기 찾기를 시작하기 전 기기와 스마트폰이 같은 wi-fi 내에 있는지 확인하십시오.',
      buttons: [
        {
          text: '확인',
          role: 'ok',
          handler: () => {
            callback();
          }
        }
      ]
    });
    alert.present();
  }

  forgotPass() {
    let forgot = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
