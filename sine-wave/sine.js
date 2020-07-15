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

    // color sliders
    // gets hue slider (same methods as previous)
    const hueSlider = document.querySelector("#hue-slider");
    let hue = hueSlider.value;
    hueSlider.oninput = () => {
        hue = hueSlider.value;
    };
    // gets saturation slider (same methods as previous)
    const saturSlider = document.querySelector("#satur-slider");
    let satur = saturSlider.value;
    saturSlider.oninput = () => {
        satur = saturSlider.value;
    };
    // gets lightness slider (same methods as previous)
    const lightSlider = document.querySelector("#light-slider");
    let light = lightSlider.value;
    lightSlider.oninput = () => {
        light = lightSlider.value;
    };

    // background color sliders
    // gets red slider (same methods as previous)
    const rSlider = document.querySelector("#r-slider");
    let r = rSlider.value;
    rSlider.oninput = () => {
        r = rSlider.value;
    };
    // gets green slider (same methods as previous)
    const gSlider = document.querySelector("#g-slider");
    let g = gSlider.value;
    gSlider.oninput = () => {
        g = gSlider.value;
    };
    // gets blue slider (same methods as previous)
    const bSlider = document.querySelector("#b-slider");
    let b = bSlider.value;
    bSlider.oninput = () => {
        b = bSlider.value;
    };
    // gets opacity slider (same methods as previous)
    const opacSlider = document.querySelector("#opac-slider");
    let opac = opacSlider.value;
    opacSlider.oninput = () => {
        opac = opacSlider.value;
    };

    // button
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        c.clearRect(0, 0, canvas.width, canvas.height);
    })


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
            let sineWave = Math.sin((i + x) * length) * amp * Math.sin(i / x * amp);
            c.lineTo(i, vertCenter + sineWave);
        }
        c.strokeStyle = `hsl(${hue}, ${satur}%, ${light}%)`
        c.stroke();
    };
    init();

    const animate = () => {
        requestAnimationFrame(animate);
        c.fillStyle = `rgba(${r}, ${g}, ${b}, ${opac})`;
        c.fillRect(0, 0, canvas.width, canvas.height);
        init();
        x -= freq;
    }
    animate();
});