var osc, env, modulator;
var freq = 220;
var modFreq = 2;
var modDepth = 0;
var octave = 0;

function preload(){

}

function setup(){
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.start();
    osc.amp(0);

    modulator = new p5.Oscillator();
    modulator.setType('sine');
    modulator.freq(25);
    modulator.amp(50);
    modulator.start();

    modulator.disconnect();
    osc.freq( modulator );

    env = new p5.Env;
    env.setADSR(0.01, 0.5, 0.7, 1.5);
    env.setRange(1, 0);
}

function draw(){

    modulator.freq(modFreq); //fed from ui
    modulator.amp(modDepth); //fed from ui
}

function keyPressed(){
    var note;
    switch (key){
        case 'Q':
         note = 48;
        break;
        case '2':
        note = 49;
       break;
        case 'W':
        note = 50;
        break;
        case '3':
        note = 51;
        break;
        case 'E':
        note = 52;
        break;
        case 'R':
        note = 53;
        break;
        case '5':
        note = 54;
        break;
        case 'T':
        note = 55;
        break;
        case '6':
        note = 56;
        break;
        case 'Y':
        note = 57;
        break;
        case '7':
        note = 58;
        break;
        case 'U':
        note = 59;
        break;
        case 'I':
        note = 60;
        break;
        default:
        return 0;
        break;
    }
    osc.freq(midiToFreq(note+octave));
    env.triggerAttack(osc);
}
function keyReleased(){
    env.triggerRelease(osc);

}