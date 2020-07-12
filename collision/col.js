document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    // get cursor position and assign it to mouse object
    let mouse = {
        x: undefined,
        y: undefined
    }
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    })

    // Circle constructor
    function Circle(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.velo = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
        }
        this.m = 1;
        this.color = color;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.strokeStyle = this.color;
            c.stroke();
            c.fillStyle = this.color;
        };
        this.update = () => {

            for (let i = 0; i < circles.length; i++) {
                if (this == circles[i]) {
                    continue;
                }
                if (getDistance(this.x, circles[i].x, this.y, circles[i].y) < this.r + circles[i].r) {
                    resolveCollision(this, circles[i]);
                }
            }

            if (this.x < this.r || this.x > canvas.width - this.r) {
                this.velo.x = -this.velo.x;
            }
            if (this.y < this.r || this.y > canvas.height - this.r) {
                this.velo.y = -this.velo.y;
            }

            this.x += this.velo.x;
            this.y += this.velo.x;
        };
    };

    // resolve collision function
    const resolveCollision = (circle1, circle2) => {
        const xVeloDiff = circle2.velo.x - circle1.velo.x;
        const yVeloDiff = circle2.velo.y - circle1.velo.y;

        const xDist = circle2.x - circle1.x;
        const yDist = circle2.y - circle1.y;

        // prevent accidental overlap
        if ((xVeloDiff * xDist) + (yVeloDiff * yDist) >= 0) {
            // gets the angle between circles
            const angle = -Math.atan2(yDist, xDist);

            // mass variables
            const m1 = circle1.m;
            const m2 = circle2.m;

            // velocity before 
            const u1 = c.rotate(circle1.velo, angle);
            const u2 = c.rotate(circle2.velo, angle);

            // velocity after 
            const v1 = { x: u1 * (m1 - m2) / (m1 + m2) + u2 * 2 * m2 / (m1 + m2), y: u1.y};
            const v2 = { x: u2 * (m1 - m2) / (m1 + m2) + u1 * 2 * m2 / (m1 + m2), y: u2.y};

            // caculates final velocities
            const vFinal1 = c.rotate(v1, -angle);
            const vFinal2 = c.rotate(v2, -angle);

            // sets velocity to final calculated velocities
            circle1.velo.x = vFinal1.x;
            circle1.velo.y = vFinal1.y;

            circle2.velo.x = vFinal2.x;
            circle2.velo.y = vFinal2.y;

        }
    };

    // get distance between the circles 
    const getDistance = (x1, x2, y1, y2) => {
        let xDist = x2 - x1;
        let yDist = y2 - y1;
        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        return distance;
    };

    // colors array
    const colors = ["#f4d573", "#afdde3","#b7a5e3", "#eeaddb", "#88eab1", "#7392f4", "#f49573", "#f47392", "#c1ea88"];

    // creates two new Circles 
    let circles = [];
    for (let i = 0; i < 5; i++) {
        let r = 100;
        let x = r + (Math.random() * (canvas.width - (2 * r)));
        let y = r + (Math.random() * (canvas.height - (2 * r)));
        if (i !== 0) {
            for (let j = 0; j < circles.length; j++) {
                if (getDistance(x, circles[j].x, y, circles[j].y) < r + circles[j].r){
                    x = r + (Math.random() * (canvas.width - (2 * r)));
                    y = r + (Math.random() * (canvas.height - (2 * r)));

                    j = -1;
                }
            }
        }
        let randomIndex = Math.floor(Math.random() * colors.length);
        let color = colors[randomIndex];
        circles.push(new Circle(x, y, r, color));
    };

    // animate function
    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < circles.length; i++) {
            circles[i].draw();
            //circles[i].update();
        }
    }
    animate();
});