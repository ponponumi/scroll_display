class ScrollDisplay{
    elem: HTMLElement | null = null;
    changePoint: number = 0;

    constructor(idName: string,changePoint: number = 0) {
        let elem = document.getElementById(idName);

        if (elem) {
            this.elem = elem;
        }

        this.changePoint = changePoint;
    }
}

export default ScrollDisplay;
