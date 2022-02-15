import Oled from 'oled-js-pi';
import font from 'oled-font-5x7';
import { sleep } from './pixelWalker.js';

export default class Display {
  constructor(address, sda, slc) {
    this.oled = new Oled({
        address: 0x3c,
        width: 128,
        height: 32,
    });

    this.init();
  }

  async init() {
    this.oled.turnOnDisplay();
    await sleep(1000);
    this.oled.setCursor(1, 1);
    await sleep(1000);
    this.oled.writeString(font, 1, 'Cats', 1, true);
  }
}
