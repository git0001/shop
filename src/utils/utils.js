export function debounce(fn, dey) {
    let timer = null;
    return function(...agrs) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, agrs)
        }, dey)
    }
}