import ws281x from 'rpi-ws281x';
import Color from 'color';

const WHITE = 0xFFFFFF;
const ORANGE = 0xF28407;
const RED = 0x943131;

export const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

export default class PixelWalker {

    minimum = 0.0;
    maximum = 1.0;
    orangeStart = 50;
    redStart = 52;
    introIsDone = false;

    constructor() {
        // Current pixel position
        this.offset = 0;

        // Set my Neopixel configuration
        this.config = {
                strip: 'grb',
		brightness: 255,
		leds:101,
		gpio: 18
	};

        // Configure ws281x
        this.configure()
    }

    reset() {
        ws281x.reset();
    }

    async configure() {
        ws281x.configure(this.config);
    }

    isWhiteLED(offset) {
        return offset % 5 === 0;
    }

    async intro() {
        this.introIsDone = false;
        await this.chaseWhite();
        await sleep(10);
        await this.fillColor();
        this.introIsDone = true;
    }

    async sleep() {
       await this.fadeToBottom();
       await this.off();
    }

    async dim(brightness = 1.0) {
        if (!this.introIsDone) return;
        const pixels = new Uint32Array(this.config.leds);
	const darkenBy = 1.0 - brightness;

        for (let i = 0; i <= this.config.leds; i++) {
            const c = i < (this.config.leds / 2) ? RED : ORANGE;
            if (this.isWhiteLED(i) && brightness > 0.1) pixels[i] = Color(WHITE).darken(darkenBy).rgbNumber();
	    else pixels[i] = c;
        }

        ws281x.render(pixels);
        await sleep(10);
    }

    async chaseWhite(offset = 0) {
        const pixels = new Uint32Array(this.config.leds);

        pixels[offset] = WHITE;
        ws281x.render(pixels);
        await sleep(10);

	if (offset < this.config.leds) {
            return this.chaseWhite(offset + 1);
        }

        return Promise.resolve(true);
    }

    async fillColor(offset = 0) {
        const pixels = new Uint32Array(this.config.leds);

        for (let i = 0; i <= offset; i++) {
            pixels[i] = i < (this.config.leds / 2) ? RED : ORANGE;
        }

        ws281x.render(pixels);
        await sleep(10);


        if (offset < this.config.leds) {
             return this.fillColor(offset + 1);
        }

        return Promise.resolve(true);
    }

    async fadeToBottom(offset = 51) {
       const pixels = new Uint32Array(this.config.leds);
       for (let i = this.orangeStart, count = 0; i >= 0; i--) {
           count++;
           if (count <= offset) {
               pixels[i] = ORANGE;
           }
       }

       for (let i = this.redStart, count = 0; i <= this.config.leds; i++) {
           count++;
           if (count <= offset) {
               pixels[i] = RED;
           }
       }

       pixels[51] = Color(WHITE).darken(offset / 51).rgbNumber();

       ws281x.render(pixels);
       await sleep(10);
       if (offset < 0) return Promise.resolve(true);
       return this.fadeToBottom(offset - 1);
    }

    async off() {
      const pixels = new Uint32Array(this.config.leds);
      ws281x.render(pixels);
      await sleep(10);
    }

    run() {
        this.intro();
    }
};
