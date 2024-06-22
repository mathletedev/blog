import { COLOURS } from "./colours";

const CHARSET =
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890:."=*+-<>';
const CHAR_HEIGHT = window.innerWidth < 768 ? 16 : 24;
const CHAR_WIDTH = 0.75 * CHAR_HEIGHT;
const DELAY = 50;
const GLITCH_RATE = 0.2;
const ERROR_RATE = 0.05;
const FADE = 0.9;
const GOLD = 0.5;
const OPACITY = 0.4;
const ERROR_OPACITY = 0.8;
const GOLD_OPACITY = 1;

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SPAWN_RATE = canvas.width / 1920;

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    SPAWN_RATE = canvas.width / 2500;
};

let frame = 0;

let mouse = { x: -1000, y: -1000, acc: 0 };

document.onmousemove = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.acc += e.movementX * e.movementX + e.movementY * e.movementY;
};

class Stream {
    private chars: string[] = [];
    private length: number;
    private speed: number;
    private x: number;
    private error: boolean;

    public constructor(x: number) {
        this.length = Math.floor(Math.random() * 40) + 4;
        this.speed = Math.floor(Math.random() * 2) + 1;
        this.x = x;

        this.error = Math.random() < ERROR_RATE;

        ctx.font = `${CHAR_HEIGHT}px Kosugi Maru`;
    }

    public update() {
        if (frame % this.speed === 0) {
            this.chars.push(
                CHARSET[Math.floor(Math.random() * CHARSET.length)]
            );
            if (this.chars.length >= this.length) {
                this.chars[this.chars.length - this.length] = " ";
            }
        }

        if (this.chars.length - this.length > canvas.height / CHAR_HEIGHT)
            return true;

        for (let i = 0; i < this.chars.length; i++) {
            // "glitching" characters
            if (Math.random() < GLITCH_RATE && this.chars[i] !== " ") {
                this.chars[i] =
                    CHARSET[Math.floor(Math.random() * CHARSET.length)];
            }

            let x = this.x + CHAR_WIDTH / 2;
            let y = i * CHAR_HEIGHT - CHAR_HEIGHT / 2;

            // hide tail of stream
            if (this.chars[i] === " ") {
                ctx.fillStyle = "#1e1e2e";
                ctx.fillRect(this.x, i * CHAR_HEIGHT, CHAR_WIDTH, CHAR_HEIGHT);

                continue;
            }

            // circle around mouse for golden code
            const isGold =
                (x - mouse.x) * (x - mouse.x) + (y - mouse.y) * (y - mouse.y) <
                mouse.acc * GOLD;

            ctx.fillStyle = isGold
                ? COLOURS.peach.hex
                : this.error
                  ? i === this.chars.length - 1
                      ? COLOURS.red.hex
                      : COLOURS.maroon.hex
                  : i === this.chars.length - 1
                    ? COLOURS.text.hex
                    : COLOURS.green.hex;
            ctx.globalAlpha =
                (isGold ? GOLD_OPACITY : this.error ? ERROR_OPACITY : OPACITY) *
                // fade out characters at end of stream
                ((i - (this.chars.length - this.length)) / this.length);
            ctx.fillText(this.chars[i], this.x, i * CHAR_HEIGHT);
        }

        return false;
    }
}

const streams: Stream[] = [];

let lastTick = Date.now();

const tick = () => {
    requestAnimationFrame(tick);

    if (Date.now() > lastTick + DELAY) {
        mouse.acc *= FADE;

        if (Math.random() < SPAWN_RATE) {
            streams.push(
                new Stream(
                    Math.floor((Math.random() * canvas.width) / CHAR_WIDTH) *
                        CHAR_WIDTH
                )
            );
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < streams.length; i++) {
            if (streams[i].update()) {
                streams.splice(i, 1);
                i--;
            }
        }

        frame++;

        lastTick = Date.now();
    }
};

setTimeout(() => {
    requestAnimationFrame(tick);
}, 1500);
