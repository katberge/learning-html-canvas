document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // make variable for half of canvas.height
    const vertCenter = canvas.height / 2;

    // Sliders
    // gets amp slider
    const ampSlider = document.querySelector("#amp-slider");
    ampSlider.max = vertCenter;
    ampSlider.min = -vertCenter;
    ampSlider.value = vertCenter / 3;
    let amp = ampSlider.value; // set amp variable to the value of ampSlider
    // make amp update when ampSlider changes
    ampSlider.oninput = () => {
        amp = ampSlider.value;
    };

    // gets length slider (mostly same methods as previous slider)
    const lengthSlider = document.querySelector("#length-slider");
    let length = -lengthSlider.value / 100;
    lengthSlider.oninput = () => {
        length = -lengthSlider.value / 100;
    };

    // gets freq slider (same methods as previous)
    const freqSlider = document.querySelector("#freq-slider");
    let freq = freqSlider.value;
    freqSlider.oninput = () => {
        freq = freqSlider.value;
    };


    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    })

    let x = 0;
    const init = () => {
        c.beginPath();
        c.moveTo(0, vertCenter);
        //draw a line for every pixel
        for (let i = 1; i < canvas.width; i ++) {
            let sineWave = Math.sin((i + x) * length) * amp;
            c.lineTo(i, vertCenter + sineWave);
        }
        c.stroke();
    };
    init();

    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        init();
        x -= freq;
    }
    animate();
});