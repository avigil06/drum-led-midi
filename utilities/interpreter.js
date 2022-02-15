import { EventEmitter } from 'events';
import easymidi from 'easymidi';

class MidiSource extends EventEmitter {
  peak = 500;

  decay = 100;

  refresh = 100;

  velocity = 0;

  constructor (name, options) {
    super();

    this.peak = options?.peak || 500;
    this.decay = options?.decay || 100;
    this.refresh = options?.refresh || 100;

    try {
        this.input = new easymidi.Input(name);
        this.input.on('noteon', this.handleNoteOn.bind(this));
    } catch (err) {
    }

    this.handleDecay();
  }

  handleNoteOn({ velocity, ...event }) {
    this.velocity += velocity;

    if (this.velocity > this.peak) {
      this.velocity = this.peak;
    }
  }

  handleDecay() {
    this.velocity -= this.decay;
    if (this.velocity < 0) {
      this.velocity = 0;
    }

    this.emit('decay', this.velocity);
    setTimeout(this.handleDecay.bind(this), this.refresh);
  }
}

export default MidiSource;
