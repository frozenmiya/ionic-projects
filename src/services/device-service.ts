import {Injectable} from "@angular/core";
import {DEVICES} from "./mock-devices";

@Injectable()
export class DeviceService {
  private devices: any;

  constructor() {
    this.devices = DEVICES;
  }

  getAll() {
    return this.devices;
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
