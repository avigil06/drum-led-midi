# drum-led-midi
A combination of music and technology

[Stallings UMC](https://youtu.be/IWWZYP6lm0k?t=2301)


![Mar-15-2022 11-26-04 intro](https://user-images.githubusercontent.com/14132880/158412579-d31e6254-504b-4131-868d-cd07d765ea66.gif)


![Mar-15-2022 11-25-40](https://user-images.githubusercontent.com/14132880/158412607-91cabe65-a40e-46fe-b77a-7616e1f43e2f.gif)


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
- Rolands MIDI output - This is the signal which will drive the LEDs.
- WS2812b - These are the individuall addressable LEDs. Each LED can be a different color than the next,
- Raspberry Pi 2 - This will process the MIDI signal and convert it to a light animation.
- Sound Percussion 22 inch Bass Drum - I needed a cheap shell I could destroy, paint, and mount electronics in.
- Generic MIDI to USB Cable - We need to get that MIDI signal to the raspberry pi somehow.
- 5v DC Power Supply - Those LEDs are hungry and we need to give them reliable power. I think this one was 15 amps at 5v.

## Project Gallery

![66508322178__26C1167F-C2B1-45BF-8EBC-F35088747A89](https://user-images.githubusercontent.com/14132880/158407315-b74e03a1-e955-4dd1-acf9-1476560de0b0.JPG)

![66516498295__514A28B8-076C-4C35-BD15-F2536A09F748](https://user-images.githubusercontent.com/14132880/158407323-5db7b412-e7de-457d-b73a-decac59e16fc.JPG)

![IMG_3299](https://user-images.githubusercontent.com/14132880/158407331-9c380102-b8b1-4915-aee5-b95857f1a10d.JPG)

![IMG_3305](https://user-images.githubusercontent.com/14132880/158407304-382c87be-7022-411a-9da4-74156efa0d21.JPG)

![IMG_3310](https://user-images.githubusercontent.com/14132880/158407337-da69cf93-5f1e-4d7c-8615-bc415d8a927b.JPG)

![IMG_3307](https://user-images.githubusercontent.com/14132880/158407343-196ad80a-c031-4dff-96f3-5eec52a23133.JPG)

![IMG_3336 2](https://user-images.githubusercontent.com/14132880/158407913-25d1c6a8-3464-4713-9c47-b1f8a49be0b1.JPG)

![IMG_3368 2](https://user-images.githubusercontent.com/14132880/158407925-317c71c6-0bc7-4ceb-8a27-ac5901e95e50.PNG)
