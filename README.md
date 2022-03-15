# drum-led-midi

## The Backstory
This project was born out of a lack of branding for my Church Praise Band. My father in law is the drummer for this band and he uses a Rolands electronic drum kit.
This makes for messy wires and ugly scaffolding as the most prominent piece of equipment on stage.

Most live bands will usually put the branding on the front head of the kick drum. Since my father in laws kick drum was a small peddle with a 6 inch pad in front of it,
this was not going to work.


## The Vision
I decided I wanted to create something that I have never really seen before. I wanted a fake light up kick drum. The great looks of an acoustic 22 inch kick drum,
with the flexibility and creativity of the electronic pedal.

The Rolands kit has a MIDI out. For those who do not follow musical terminilogy, MIDI is an acronym for Musical Instrument Digital Interface.
The way this works on an electronic drum kit, as the drummer hits different components of the electronic kit, the processing unit registers the channel and the velocity of impact.
That is to say, the kit knows where it was hit and how hard. Let's get back to the vision now.

I decided I would use addressable LEDs and the MIDI output to create a build and decay lighting effect. It's simple, the more energetic the drummer is playing, the brighter the LEDS will become.
As the drummers energy is reduced, the LEDs will decay until they have no brightness.

## The components
Rolands MIDI output - This is the signal which will drive the LEDs.
WS2812b - These are the individuall addressable LEDs. Each LED can be a different color than the next,
Raspberry Pi 2 - This will process the MIDI signal and convert it to a light animation.
Sound Percussion 22 inch Bass Drum - I needed a cheap shell I could destroy, paint, and mount electronics in.
Generic MIDI to USB Cable - We need to get that MIDI signal to the raspberry pi somehow.
5v DC Power Supply - Those LEDs are hungry and we need to give them reliable power. I think this one was 15 amps at 5v.

## Project Gallery
