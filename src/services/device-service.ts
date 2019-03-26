import {Injectable} from "@angular/core";
import {DEVICES} from "./mock-devices";
import {DEVICE_INFO} from "./mock-device-info";

@Injectable()
export class DeviceService {
  private devices: any;
  private deviceInfo: any;

  constructor() {
    this.devices = DEVICES;
    this.deviceInfo = DEVICE_INFO;
  }

  getAll() {
    return this.devices;
  }

  getDeviceInfo() {
    return this.deviceInfo;
  }

  getItem(id) {
    for (var i = 0; i < this.devices.length; i++) {
      if (this.devices[i].id == id) {
        console.log('ddddd : ',this.devices[i]);
        return this.devices[i];
      }
    }
    return null;
  }

  remove(item) {
    this.devices.splice(this.devices.indexOf(item), 1);
  }
}
