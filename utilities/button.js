import { EventEmitter } from 'events';
import { Gpio } from 'onoff';

export default class Rotary {
  pin = null;

  constructor(a) {
    this.pin = new Gpio(a, 'in', 'both');


    this.pin.watch((err, value) => console.log(value));
  }
}

