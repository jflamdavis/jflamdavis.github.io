var buttonOctaveUp = new Nexus.Button('#buttonOctaveUp', {size: [80,80]});

var buttonOctaveDown = new Nexus.Button('#buttonOctaveDown', {size: [80,80]});

buttonOctaveUp.on('change',function(val) {
    octave+=6;
    console.log(octave);
});

buttonOctaveDown.on('change',function(val) {
    octave-=6;
    console.log(octave);
});