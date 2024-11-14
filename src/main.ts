class ScrollDisplay{
    elem: HTMLElement|null = null;

    constructor(idName: string) {
        let elem = document.getElementById(idName);

        if (elem) {
            this.elem = elem;
        }
    }
}

export default ScrollDisplay;
