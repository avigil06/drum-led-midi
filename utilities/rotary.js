import { EventEmitter } from 'events';
import { Gpio } from 'onoff';

export default class Rotary extends EventEmitter {
  pinA = null;
  pinB = null;
  value = 0;

  constructor(a, b) {
    super();
    this.state = 'S00';
    this.pinA = new Gpio(a, 'in', 'both');
    this.pinB = new Gpio(b, 'in', 'both');

    this.a = 2;
    this.b = 2;

    this.pinA.watch(this.watch('a').bind(this));
    this.pinB.watch(this.watch('b').bind(this));
  }


  watch(microState) {
    return (err, value) => {
      if (err) {
        this.emit('error', err);
	return;
      }

      this[microState] = value;
      this.tick();
    }
  }

  tick() {
    const currentDirection = this.direction;
    const { a, b } = this;
    const newState = `S${a}${b}`;

    switch (this.state) {
      case 'S00':
	if (newState === 'S01') this.direction = 'R';
        else if (newState === 'S10') this.direction = 'L';
        break;

      case 'S01':
	if (newState === 'S11') this.direction = 'R';
	break;

      case 'S10':
	if (newState === 'S11') this.direction = 'L';
	break;

      default:
        if (newState === 'S01') this.direction = 'L';
        else if (newState === 'S10') this.direction = 'R';
    }

    if (currentDirection !== this.direction) this.value = 0;
    else this.value += 1;

    this.state = newState;
    if (this.value === 3) {
      this.value = 0;
      this.emit('rotate', this.direction);
    }
  }
}

