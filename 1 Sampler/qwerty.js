var cow1, cow2, cow3;
var env;
var mySound;
var soundSelect;
var octave = 0;

function preload(){
    soundFormats('wav', 'ogg');
    cow1 = loadSound("snd/cow1.wav");
    cow2 = loadSound("snd/cow2.wav");
    cow3 = loadSound("snd/cow3.wav");
    cow4 = loadSound("snd/cow4.wav");

    cow1.playMode('sustain');
    cow2.playMode('sustain');
    cow3.playMode('restart');
    cow4.playMode('sustain');

    mySound = cow1;
}

function setup(){
    createCanvas(550, 366);
    soundSelect = createSelect();
    soundSelect.size(200,20);
    soundSelect.option('The 1st Cowbell');
    soundSelect.option('The 2nd Cowbell');
    soundSelect.option('The 3rd Cowbell');
    soundSelect.option('The Cow Itself');
    soundSelect.changed(setSound);

    env = new p5.Env();
    env.setADSR(0.0001, 0.2, 0.7, 2);
    env.setRange(1, 0);
}

function draw(){
    soundSelect.position(windowWidth/2- 100, 160);
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
    
    mySound.rate(midiToFreq(note+octave)/midiToFreq(48));
    mySound.play();
    env.setInput(mySound);
    env.triggerAttack();
    }
    function keyReleased(){
        env.triggerRelease();
    
    }

function setSound(){
    mySound.stop();
    var item = soundSelect.value();
    switch (item){
        case 'The 1st Cowbell':
        mySound = cow1;
        break;
        case 'The 2nd Cowbell':
        mySound = cow2;
        break;
        case 'The 3rd Cowbell':
        mySound = cow3;
        break;
        case 'The Cow Itself':
        mySound = cow4;
        break;

    }

}