document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    function Circle() {};

    const init = () => {};
    init();

    const animate = () => {
        requestAnimationFrame(animate);
    }
    animate();

});
