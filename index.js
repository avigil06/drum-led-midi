import easymidi from 'easymidi';
import MidiSource from './utilities/interpreter.js';
import PixelWalker, { sleep } from './utilities/pixelWalker.js';

const SLEEP_TIMEOUT = 10000

const velocityToBrightness = (velocity) => {
  if (velocity > 750) return 1;
  return velocity / 750;
}

(async function() {
  let sleep = 0 
  let isSleeping = false

  try {
    const [input] = easymidi.getInputs().filter((input) => input.toLowerCase().includes('usb'))
    const walker = new PixelWalker()
    console.log(input)

    const midiInput = new MidiSource(input, {
      refresh: 10,
      decay: 10,
      peak: 1750,
    })

    walker.run();

    midiInput.on('decay', (velocity) => {
       if (velocity && isSleeping) {
          sleep = 0
          isSleeping = false
          walker.intro()
       } else if (velocity > 0 && !isSleeping) {
          sleep = 0
          walker.runIntro = false
          walker.dim(velocityToBrightness(velocity))
       } else if (sleep < SLEEP_TIMEOUT) {
          sleep += 10
       } 

       if (!isSleeping && sleep >= SLEEP_TIMEOUT) {
          isSleeping = true
          walker.sleep()
       }
    });

    process.on('SIGINT', function() {
      walker.reset();
      process.exit();
    });
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
