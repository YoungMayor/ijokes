const Animate = {
    //
}

export default function({}, inject) {

    inject('animateCSS', (animation = 'bounce', delay = 1, duration = 'slow', repeat = 1) => {
        repeat = Number(repeat) > 0 && Number(repeat) < 4 ? `repeat-${repeat}` : repeat;

        return `animate__animated animate__${animation} animate__delay-${delay}s animate__${duration} animate__${repeat}`
    })
}