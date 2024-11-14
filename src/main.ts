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

    public eventAdd(pointAbove: (elem: HTMLElement) => void, pointBelow: (elem: HTMLElement) => void) {
        // イベントを追加する
        // HTML要素がnullの場合はイベントを追加しない
        let totop = this.elem;
        let changePoint = this.changePoint;

        if (totop) {
            // HTML要素があれば
            document.addEventListener("scroll", function () {
                if (window.scrollY > changePoint) {
                    // 指定したポイントよりも下なら
                    pointBelow(totop);
                } else {
                    // 指定したポイントよりも上なら
                    pointAbove(totop);
                }
            });
        }
    }
}

export default ScrollDisplay;
