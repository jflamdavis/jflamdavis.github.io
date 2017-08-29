var sliderModFreq = new Nexus.Slider('#sliderModFreq', {
    size: [180,50],
    'min': 0, 'max': 50, 'step': 1,});
var sliderModDepth = new Nexus.Slider('#sliderModDepth', {
    size: [180,50],
    'min': 0, 'max': 20, 'step': 1,});
var buttonOctaveUp = new Nexus.Button('#buttonOctaveUp', {size: [80,80]});

var buttonOctaveDown = new Nexus.Button('#buttonOctaveDown', {size: [80,80]});

var selectCarrier = new Nexus.Select('#selectCarrier', {
    size: [120,30],
    options: ["sine", "triangle", "sawtooth", "square"]});
var selectModulator = new Nexus.Select('#selectModulator', {
    size: [120,30],
    options: ["sine", "triangle", "sawtooth", "square"]});

sliderModFreq.on('change',function(val) {
    modFreq = exp(val/10);
});
sliderModDepth.on('change',function(val) {
    modDepth = val*10;
});

buttonOctaveUp.on('change',function(val) {
    octave+=6;
    console.log(octave);
    if (octave == 0){
        document.getElementById("beach").style.backgroundImage = "url('img/wink.png')";
    }
    else if (octave > 0){
        document.getElementById("beach").style.backgroundImage = "url('img/kiss.png')";
    }
    else{
        document.getElementById("beach").style.backgroundImage = "url('img/cry.png')";
    }    
});

buttonOctaveDown.on('change',function(val) {
    octave-=6;
    console.log(octave);
    if (octave == 0){
        document.getElementById("beach").style.backgroundImage = "url('img/wink.png')";
    }
    else if (octave > 0){
        document.getElementById("beach").style.backgroundImage = "url('img/kiss.png')";
    }
    else{
        document.getElementById("beach").style.backgroundImage = "url('img/cry.png')";
    }
});

selectCarrier.on('change',function(val) {
    osc.setType(val.value);
});

selectModulator.on('change',function(val) {
    modulator.setType(val.value);
});
